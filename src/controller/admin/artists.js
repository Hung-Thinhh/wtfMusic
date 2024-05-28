const Ar = require('../../models/artists_model');
const { v4: uuidv4 } = require("uuid");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "drupmc7qd",
  api_key: "725439635389318",
  api_secret: "c52-kr9-K0JKIQVNLQNZnSD5FRs",
});
const multer = require("multer");


const upload = multer({
  storage: multer.memoryStorage(),
}).single("file");


const adminA = async (req, res) => {
  try {
    upload(req, res, async function (err) {
      // upate !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      if (req.body.status === "create") {
        let form;
        if (err) {
          console.log(err);
          return res.status(200).json({
            EM: "error from server",
            EC: "-1",
            DT: ""
          });
        } else {
          const artistsName = req.body.artistsName
          const biography = req.body.biography
          const birthday = req.body.birthday
          const realName = req.body.realName
          const songListId = req.body.songListId
          const playListId = req.body.playListId

          const file = req.file;
          const fileBase64 = file.buffer.toString("base64");

          let fileUrl;

          try {
            const fileResult = await cloudinary.uploader.upload(
              "data:image/png;base64," + fileBase64
            );
            fileUrl = fileResult.secure_url;
            console.log("lonk1", fileUrl)
          } catch (error) {
            console.log("Failed to upload file:", error);
          }
          const newIDAr= uuidv4().substring(0, 8).toUpperCase();

          form = {
            infor: {
              id:newIDAr,
              artistsName: artistsName,
              avt:fileUrl,
              alias: artistsName,
              biography: biography,
              birthday: birthday,
              realName: realName,
              songListId: songListId,
              playListId: playListId,
              totalFollow:0
            }
          };
        }

        let data = await Ar.create(form.infor);
        console.log(data);

        if (data) {
          return res.status(200).json({
            EM: data.EM,
            EC: "0",
            DT: data.DT
          });
        } else {
          return res.status(200).json({
            EM: "error from server",
            EC: "-1",
            DT: ""
          });
        }
      }

      // create +++++++++++++++++++++++++++++++++++++++++++++++++++++++
      else if (req.body.status === "update") {
       
        let form;
        if (err) {
          console.log(err);
          return res.status(200).json({
            EM: "error from server",
            EC: "-1",
            DT: ""
          });
        } else if (!req.file) {
          
          form = {
            infor: {
              id:req.body.id,
              artistsName:req.body.artistsName,
              biography:req.body.biography,
              birthday:req.body.birthday,
              realName:req.body.realName,
              songListId:req.body.songListId,
              playListId:req.body.playListId,
            },
          };
          console.log("dell up",form.infor);
        }else {
          const id = req.body.id
          const artistsName = req.body.artistsName
          const biography = req.body.biography
          const birthday = req.body.birthday
          const realName = req.body.realName
          const songListId = req.body.songListId
          const playListId = req.body.playListId

          const file = req.file;
          const fileBase64 = file.buffer.toString("base64");

          let fileUrl;

          try {
            const fileResult = await cloudinary.uploader.upload(
              "data:image/png;base64," + fileBase64
            );
            fileUrl = fileResult.secure_url;
            console.log("lonk1", fileUrl)
          } catch (error) {
            console.log("Failed to upload file:", error);
          }

          form = {
            infor: {
              id:id,
              artistsName: artistsName,
              avt:fileUrl,
              alias: artistsName,
              biography: biography,
              birthday: birthday,
              realName: realName,
              songListId: songListId,
              playListId: playListId,
              totalFollow:0
            }
          };
        }

        console.log("coas up",form.infor);
        let data = await Ar.updateOne({id: form.infor.id },form.infor);

        if (data) {
          return res.status(200).json({
            EM: data.EM,
            EC: "0",
            DT: data.DT
          });
        } else {
          return res.status(200).json({
            EM: "error from server",
            EC: "-1",
            DT: ""
          });
        }
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(200).json({
      EM: "error from server",
      EC: "-1",
      DT: ""
    });
  }
};

module.exports = {
  adminA
};