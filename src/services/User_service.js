import User from "../models/user_model.js";


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

module.exports = {
    getInfor
}