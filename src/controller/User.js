import {
  getInfor,
  updateInfor,
  changepassword,
} from "../services/User_service";

const multer = require("multer");

const Infor = async (req, res) => {
  try {
    console.log(req.user.id);
    let data = await getInfor(req.user.id);
    console.log(data);
    if (data && data.EC == "0") {
      return res.status(200).json({
        EM: "Infor User get successfully",
        EC: "0",
        DT: data.DT,
      });
    } else {
      return res.status(200).json({
        EM: "error from server",
        EC: "-1",
        DT: "",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(200).json({
      EM: "error from server",
      EC: "-1",
      DT: "",
    });
  }
};

const upload = multer({
  storage: multer.memoryStorage(),
}).single("file"); // 'file' tương ứng với tên field trong form data khi gửi từ client
const editInfor = async (req, res) => {
  try {

    // Xử lý yêu cầu `multipart/form-data` sử dụng multer
    upload(req, res, async function (err) {
      let form
      if (err ) {
        // Xử lý lỗi khi tải lên
        console.log(err);
        return res.status(200).json({
          EM: "error from server",
          EC: "-1",
          DT: "",
        });
      } else if (!req.file) {
        form = {infor:{
          email: req.body.email,
          birthday: req.body.birthday
        }}
      }
       else {
        const file = req.file;
        // Chuyển Buffer sang base64
        const fileBase64 = file.buffer.toString("base64");
        form = {infor:{
          email: req.body.email,
          birthday: req.body.birthday,
          avt:fileBase64
        }}
        
      }
      let data = await updateInfor(form, req.user.id);
      console.log(req.body.email);
      if (data && data.EC == "0") {
        return res.status(200).json({
          EM: data.EM,
          EC: "0",
          DT: data.DT,
        });
      } else {
        return res.status(200).json({
          EM: "error from server",
          EC: "-1",
          DT: "",
        });
      }
    });
    
     
  } catch (err) {
    console.log(err);
    return res.status(200).json({
      EM: "error from server",
      EC: "-1",
      DT: "",
    });
  }
};
const changePass = async (req, res) => {
  try {
    let data = await changepassword(req.body, req.user.id);
    console.log(data);
    if (data && data.EC == "0") {
      return res.status(200).json({
        EM: data.EM,
        EC: "0",
        DT: data.DT,
      });
    } else {
      return res.status(200).json({
        EM: data.EM,
        EC: "-1",
        DT: "",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(200).json({
      EM: "error from server",
      EC: "-1",
      DT: "",
    });
  }
};
module.exports = {
  Infor,
  editInfor,
  changePass,
};
