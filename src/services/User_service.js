import User from "../models/user_model.js";
import Song from "../models/sonng_model.js";
import Playlist from "../models/playlist_model.js";
import { checkPassword, hashPassword } from "./Authentication_service.js";
const { v4: uuidv4 } = require("uuid");

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
    let ps = await Song.findOne({ id: data.id });
    if (ps) {

      updateData = await User.findOneAndUpdate(
        { id: id },
        { $addToSet: { likedSongs: data.id } },
        { upsert: true }
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
    if (ps) {

      updateData = await User.findOneAndUpdate(
        { id: id },
        { $addToSet: { likedPlayLists: data.id } },
        { upsert: true }
      );
    } else {
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
const unLike = async (data, id) => {
  let updateData;
  console.log(data);
  if (data.type == "song") {
    let ps = await Song.findOne({ id: data.id });
    console.log(ps);
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
    console.log(ps);
    if (ps) {
      updateData = await User.findOneAndUpdate(
        { id: id },
        { $pull: { likedPlayLists: data.id } },
        { new: true }
      );
    } else {
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
const getMyPlaylist = async (idUser) => {
  try {
    const getUser = await User.findOne({ id: idUser });

    if (getUser.myPlayLists.length > 0) {
      const getplaylist = async (id) => {
        return await Playlist.findOne({ playlistId: id });
      };
      const playlistPromises = getUser.myPlayLists.map((idPlaylist) => {
        return getplaylist(idPlaylist);
      });
      const playlists = await Promise.all(playlistPromises);
      return {
        EM: "Lấy danh sách nhạc đã tạo thành công!",
        EC: "0",
        DT: playlists,
      };
    } else {
      return {
        EM: "Lấy danh sách nhạc đã tạo thành công!",
        EC: "1",
        DT: [],
      };
    }
  } catch (err) {
    return {
      EM: "Lấy danh sách nhạc đã tạo thất bại!",
      EC: "-1",
      DT: "",
    };
  }
};
const createMyPlaylist = async (user, playlistname) => {
  try {
    const getUser = await User.findOne({ id: user.id });
    const getplaylist = async (id) => {
      return await Playlist.findOne({ playlistId: id }, "playlistname");
    };
    const playlistPromises = getUser.myPlayLists.map((idPlaylist) => {
      return getplaylist(idPlaylist);
    });
    const playlists = await Promise.all(playlistPromises);
    const isDuplicateName = async (newPlaylistName) => {
      const hasDuplicate = await playlists.some((playlist) => {
        return playlist.playlistname === newPlaylistName;
      });
      return hasDuplicate;
    };
    const hasDuplicate = await isDuplicateName(playlistname);
    if (!hasDuplicate) {
      const newPlaylistID = uuidv4().substring(0, 8).toUpperCase();

      //Tạo playlist mới với các thông tin tương ứng
      const createdPlaylist = new Playlist({
        playlistId: newPlaylistID,
        playlistname: playlistname,
        genresid: [],
        artistsId: [user.username],
        thumbnail:
          "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/3/a/f/f3af71df0b7a68ec44955faa5dc7d0ce.jpg",
        description: "/",
        songid: [],
        like: 0,
        listen: 0,
        type: "user",
      });

      // Lưu playlist
      const data1 = await createdPlaylist.save();

      //Thêm playlistId vào mảng playlistId của user
      getUser.myPlayLists.push(newPlaylistID);
      const data2 = await getUser.save();

      console.log("Thêm playlist vào myPlaylists:", data2, data1);
      return {
        EM: "Tạo danh sách nhạc thành công!",
        EC: "0",
        DT: { playlistId: data2, message: data1 },
      };
    } else {
      return {
        EM: "Không thể tạo danh sách nhạc!",
        EC: "-1",
        DT: "",
      };
    }
  } catch (err) {
    console.error(err);
    return {
      EM: "Không thể tạo danh sách nhạc!!",
      EC: "-1",
      DT: "",
    };
  }
};
const addToMyPlaylist = async (idUser, data) => {
  try {
    const curUser = await User.findOne({ id: idUser });
    const playlist = await Playlist.findOne({ playlistId: data.playlistId });
    console.log(curUser);

    if (
      !curUser ||
      !playlist ||
      !curUser.myPlayLists ||
      curUser.myPlayLists.indexOf(playlist.playlistId) === -1
    ) {
      return {
        EM: "Không thể tạo danh sách nhạc!",
        EC: "-1",
        DT: "",
      };
    } else {
      console.log('hahaha', data.songId);
      // Chuyển đổi các songId trong playlist thành một tập hợp (set)
      const existingSongIds = new Set(playlist.songid);

      // Tạo một mảng mới chứa các songId cần thêm
      const songsToAdd = data.songId.filter((id) => !existingSongIds.has(id));
      console.log('songsToAdd', songsToAdd)
      // Thêm các bài hát mới vào playlist
      await Playlist.updateOne(
        { playlistId: data.playlistId },
        { $push: { songid: { $each: songsToAdd } } }
      );

      return {
        EM: "Thêm vào playlist thành công",
        EC: "0",
        DT: "",
      };
    }
  } catch (err) {
    console.error(err);

    return {
      EM: "Không thể thêm vào danh sách nhạc!",
      EC: "-1",
      DT: "",
    };
  }
};

const getAllUser = async (data) => {
  const limit = data;
  try {
    // Truy vấn dữ liệu bài hát sau khi xóa trùng lặp
    const UserCount = await User.countDocuments({});
    const Userdata = await User.find({}, {
      _id: 1,
      id: 1,
      username: 1,
      birthday: 1,
      avt: 1,
      email: 1,
      likedPlayLists: 1,
      likedSongs: 1,
      myPlayLists: 1,
      banSongs: 1
    }).sort({ _id: -1 }).skip(+limit).limit(10);

    const handledata = await Promise.all(Userdata.map(async (User) => {
      const playlistName = await Promise.all(
        User.likedPlayLists.map(async (id) =>
          await Playlist.findOne({ playlistId: id }, { playlistname: 1, _id: 0 })
        ));
      const songName = await Promise.all(
        User.likedSongs.map(async (id) =>
          await Song.findOne({ id: id }, { songname: 1, _id: 0 })
        ));

      return { ...User.toObject(), likedSongs: songName, likedPlayLists: playlistName };
    }));
    const responseData = { handledata, maxPage: UserCount };
    return {
      EM: "Lấy danh sách nhạc đã tạo thành công!",
      EC: "0",
      DT: responseData,
    };
  } catch (err) {
    return {
      EM: "Không lấy danh sách user !",
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
  getMyPlaylist,
  createMyPlaylist,
  addToMyPlaylist,
  getAllUser,
};
