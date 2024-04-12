import User from "../models/user_model.js";
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

module.exports = {
  getInfor,
  updateInfor,
  changepassword,
};
