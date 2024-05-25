const Song = require('../../models/sonng_model');
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
const adminS = async (req, res) => {
  const { status, data } = req.body;
  if (status) {
    try {
      switch (status) {
        case 'delete':
          const deletedSong = await Song.findOneAndDelete({ id: data });
          res.json(deletedSong);
          break;
        case 'create':
          const newIDSong = uuidv4().substring(0, 8).toUpperCase();
          data.lyric = JSON.parse(data.lyric);
          const createdSong = await Song.create({ ...data, alias: data.songname, id: newIDSong });
          console.log(createdSong);
          res.json(createdSong);
          break;
        default:
          res.status(400).json({ error: 'Invalid status' });
          break;
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    try {
      // Xử lý yêu cầu `multipart/form-data` sử dụng multer
      upload(req, res, async function (err) {
        let form;
        if (err) {
          // Xử lý lỗi khi tải lên
          console.log(err);
          return res.status(200).json({
            EM: "error from server",
            EC: "-1",
            DT: "",
          });
        } else if (!req.file) {
          form = {
            infor: {
              id: req.id,
              songname: req.songname,
              artists: req.artists,
              genresid: req.genresid,
              songLink: req.songLink,
              like: req.like,
              listen: req.listen,
            },
          };
        } else {
          const file = req.file;
          // Chuyển Buffer sang base64
          const fileBase64 = file.buffer.toString("base64");
          let imageUrl;
          try {
            imageUrl = await new Promise((resolve, reject) => {
              cloudinary.uploader.upload(
                "data:image/png;base64," + fileBase64,
                function (error, result) {
                  if (error) {
                    console.log("Error uploading file:", error);
                    reject(error);
                  } else {
                    console.log("Uploaded file details:", result);
                    // Lấy URL an toàn của hình ảnh đã tải lên
                    const secureUrl = result.secure_url;

                    // Tiếp tục xử lý với URL hình ảnh
                    resolve(secureUrl);
                  }
                }
              );
            });
          } catch (error) {
            // Xử lý lỗi nếu có
            console.log("Failed to upload image:", error);
          }
          form = {
            infor: {
              id: req.body.id,
              songname: req.body.songname,
              artists: req.body.artists,
              genresid: req.body.genresid,
              songLink: req.body.songLink,
              like: req.body.like,
              listen: req.body.listen,
              thumbnail: imageUrl,
            },
          };
        }
        let data = form;
        console.log(JSON.stringify(data));

        if (data) {
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
  }
};

module.exports = {
  adminS
};