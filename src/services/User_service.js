import User from "../models/user_model.js";
import Song from "../models/sonng_model.js";
import Playlist from "../models/playlist_model.js";
import { checkPassword, hashPassword } from "./Authentication_service.js";

const getInfor = async (id) => {
  let user = await User.findOne({ id: id });
  if (user) {
    return {
      EM: "ok!",
      EC: "0",
      DT: user,
    };
  } else {
    return false;
  }
};
const updateInfor = async (data, id) => {
  const newInfor = data.infor;
  const updateUser = await User.findOneAndUpdate({ id: id }, newInfor, {
    upsert: true,
    new: true,
  }).select("-_id username email birthday avt");
  if (updateUser) {
    return {
      EM: "updated successfully",
      EC: "0",
      DT: updateUser,
    };
  } else {
    console.log(
      "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
    );
    return false;
  }
};
const changepassword = async (data, id) => {
  const newInfor = data;
  let updateUser;
  const user = await User.findOne({
    id: id,
  });
  if (user && user.password) {
    let isCorrectPassword = await checkPassword(
      newInfor.password,
      user.password
    );
    if (isCorrectPassword) {
      let hashPass = hashPassword(newInfor.newPassword);
      updateUser = await User.findOneAndUpdate(
        { id: id },
        { password: hashPass },
        { upsert: true }
      );
    } else {
      return {
        EM: "Bạn đã sai mật khẩu!",
        EC: "1",
        DT: "",
      };
    }
  }
  if (updateUser) {
    return {
      EM: "ok!",
      EC: "0",
      DT: "",
    };
  } else {
    return {
      EM: "error from server",
      EC: "-1",
      DT: "",
    };
  }
};
const addBanSong = async (songId, id) => {
  const updateUser = await User.findOneAndUpdate(
    { id: id },
    { $addToSet: { banSongs: songId } },
    { upsert: true }
  );
  if (updateUser) {
    return {
      EM: "Bài nhạc đã bị cấm",
      EC: "0",
      DT: "",
    };
  } else {
    return {
      EM: "error from server",
      EC: "-1",
      DT: "",
    };
  }
};
const addLike = async (data, id) => {
  let updateData;
  if (data.type == "song") {
    updateData = await User.findOneAndUpdate(
      { id: id },
      { $addToSet: { likedSongs: data.id } },
      { upsert: true }
    );
  } else {
    updateData = await User.findOneAndUpdate(
      { id: id },
      { $addToSet: { likedPlayLists: data.id } },
      { upsert: true }
    );
  }
  if (updateData) {
    return {
      EM: "Đã thêm vào danh sách yêu thích!",
      EC: "0",
      DT: "",
    };
  } else {
    return {
      EM: "error from server",
      EC: "-1",
      DT: "",
    };
  }
};
const unLike = async (data, id) => {
  let updateData;
  console.log(data)
  if (data.type == "song") {
    let ps = await Song.findOne({ id: data.id });
    if (ps) {
      updateData = await User.findOneAndUpdate(
        { id: id },
        { $pull: { likedSongs: data.id } },
        { new: true }
      );
    } else {
      return {
        EM: "không thấy bài hát này",
        EC: "-1",
        DT: "",
      };
    }
  } else {
    let ps = await Playlist.findOne({ playlistId: data.id });
    console.log(ps)
    if (ps) {
      updateData = await User.findOneAndUpdate(
        { id: id },
        { $pull: { likedPlayLists: data.id } },
        { new: true }
      );
    }else {
      return {
        EM: "không thấy playlist này",
        EC: "-1",
        DT: "",
      };
    }
  }
  if (updateData) {
    return {
      EM: "Đã thêm vào danh sách yêu thích!",
      EC: "0",
      DT: "",
    };
  } else {
    return {
      EM: "error from server",
      EC: "-1",
      DT: "",
    };
  }
};

module.exports = {
  getInfor,
  updateInfor,
  changepassword,
  addBanSong,
  addLike,
  unLike,
};
