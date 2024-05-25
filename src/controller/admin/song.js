const Song = require('../../models/sonng_model');
const { v4: uuidv4 } = require("uuid");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "drupmc7qd",
  api_key: "725439635389318",
  api_secret: "c52-kr9-K0JKIQVNLQNZnSD5FRs",
});
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  }
});
const upload = multer({ storage: storage }).fields([
  { name: "file", maxCount: 1 },
  { name: "songLink", maxCount: 1 }
]);
const adminS = async (req, res) => {
  try {
    upload(req, res, async function (err) {
      if (req.body.status === "update") {
        console.log(req.body.status)
        let form;
        if (err) {
          console.log(err);
          return res.status(200).json({
            EM: "error from server",
            EC: "-1",
            DT: ""
          });
        } else if (!req.files || !req.files.file || !req.files.songLink) {
          form = {
            infor: {
              id: req.id,
              songname: req.songname,
              artists: req.artists,
              genresid: req.genresid,
              songLink: req.songLink,
              like: req.like,
              listen: req.listen
            }
          };
        } else {
          const file = req.files.file[0];
          const songLink = req.files.songLink[0];
          const fileBase64 = file.buffer.toString("base64");
          const songLinkBase64 = songLink.buffer.toString("base64");
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
                    const secureUrl = result.secure_url;
                    resolve(secureUrl);
                  }
                }
              );
            });
          } catch (error) {
            console.log("Failed to upload image:", error);
          }
          form = {
            infor: {
              id: req.body.id,
              songname: req.body.songname,
              artists: req.body.artists,
              genresid: req.body.genresid,
              songLink: {
                path: songLink.path,
                base64: songLinkBase64
              },
              like: req.body.like,
              listen: req.body.listen,
              thumbnail: imageUrl
            }
          };
        }
        let data = form;
        console.log(JSON.stringify(data));
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
      } else if (req.body.status === "create") {
        console.log(req.body.status)
        let form;
        if (err) {
          console.log(err);
          return res.status(200).json({
            EM: "error from server",
            EC: "-1",
            DT: ""
          });
        } else if (!req.files || !req.files.file || !req.files.songLink) {
          form = {
            infor: {
              id: req.id,
              songname: req.songname,
              artists: req.artists,
              genresid: req.genresid,
              songLink: req.songLink,
              like: req.like,
              listen: req.listen
            }
          };
        } else {
          const file = req.files.file[0];
          const songLink = req.files.songLink[0];
          const fileBase64 = file.buffer.toString("base64");
          const songLinkBase64 = songLink.buffer.toString("base64");
          console.log(songLinkBase64)
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
                    const secureUrl = result.secure_url;
                    resolve(secureUrl);
                  }
                }
              );
            });
          } catch (error) {
            console.log("Failed to upload image:", error);
          }
          form = {
            infor: {
              id: req.body.id,
              songname: req.body.songname,
              artists: req.body.artists,
              genresid: req.body.genresid,
              songLink: {
                path: songLink.path,
                base64: songLinkBase64
              },
              like: req.body.like,
              listen: req.body.listen,
              thumbnail: imageUrl
            }
          };
        }
        let data = form;
        console.log(JSON.stringify(data));
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
}

module.exports = {
  adminS
};