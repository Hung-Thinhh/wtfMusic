import {getInfor,updateInfor,changepassword} from '../services/User_service';
const Infor = async (req, res) => {
    try {
        console.log(req.user.id)
        let data = await getInfor(req.user.id);
        console.log(data)
        if (data && data.EC == '0') {
            return res.status(200).json({
                EM: "Infor User get successfully",
                EC: "0",
                DT: data.DT
              });
        } else {
            return res.status(200).json({
                EM: "error from server",
                EC: "-1",
                DT: "",
              });
        }
    } catch(err) {
        console.log(err);
        return res.status(200).json({
            EM: "error from server",
            EC: "-1",
            DT: "",
          });
    }
}
const editInfor = async (req, res) => {
    try {
        let data = await updateInfor(req.body,req.user.id);
        console.log(data)
        if (data && data.EC == '0') {
            return res.status(200).json({
                EM: "Infor User get successfully",
                EC: "0",
                DT: data.DT
              });
        } else {
            return res.status(200).json({
                EM: "error from server",
                EC: "-1",
                DT: "",
              });
        }
    } catch(err) {
        console.log(err);
        return res.status(200).json({
            EM: "error from server",
            EC: "-1",
            DT: "",
          });
    }
}
const changePass = async (req, res) => {
    try {
        let data = await changepassword(req.body,req.user.id);
        console.log(data)
        if (data && data.EC == '0') {
            return res.status(200).json({
                EM: "Infor User get successfully",
                EC: "0",
                DT: data.DT
              });
        } else {
            return res.status(200).json({
                EM: "error from server",
                EC: "-1",
                DT: "",
              });
        }
    } catch(err) {
        console.log(err);
        return res.status(200).json({
            EM: "error from server",
            EC: "-1",
            DT: "",
          });
    }
}
module.exports = {
    Infor,
    editInfor,
    changePass
};