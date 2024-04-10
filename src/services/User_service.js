import User from "../models/user_model.js";
import {checkPassword,hashPassword} from "./Authentication_service.js"

const getInfor = async (id) => {
    let user = await User.findOne({ id: id });
    if (user) {
        return {
            EM: "ok!",
            EC: "0",
            DT: user
          };
    } else {
      return false;
    }

}
const updateInfor = async (data,id) => {
  const newInfor = data.infor
  const updateUser = await User.findOneAndUpdate({ id: id }, newInfor, {
    upsert: true
  }).select('-_id username email birthday');
  if (updateUser) {
      return {
          EM: "ok!",
          EC: "0",
          DT: updateUser
        };
  } else {
    return false;
  }

}
const changepassword = async (data,id) => {
  const newInfor = data
  let updateUser
  const user = await User.findOne({
     id: id 
  });
  if (user && user.password) {
    let isCorrectPassword = await checkPassword(newInfor.password, user.password);
    if (isCorrectPassword) {
      let hashPass = hashPassword(newInfor.newPassword);
       updateUser = await User.findOneAndUpdate({ id: id }, {password:hashPass}, { upsert: true });
    }
  }
  if (updateUser) {
      return {
          EM: "ok!",
          EC: "0",
          DT: ''
        };
  } else {
    return false;
  }

}

module.exports = {
  getInfor,
  updateInfor,
  changepassword
}