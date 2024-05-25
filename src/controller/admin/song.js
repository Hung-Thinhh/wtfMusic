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
}).fields([
  { name: "file", maxCount: 1 },
  { name: "songLink", maxCount: 1 }
]);

const adminS = async (req, res) => {
  try {
    upload(req, res, async function (err) {
// upate !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
        } else {
          const id = req.body.id;
          const songname = req.body.songname;
          const artists = req.body.artists;
          const genresid = req.body.genresid;
          const songLink = req.body.songLink;
          const file = req.files.file[0];
          const songLinkFile = req.files.songLink[0];

          const fileBase64 = file.buffer.toString("base64");
          const songLinkBase64 = songLinkFile.buffer.toString("base64");

          let fileUrl;
          let songLinkUrl;

          try {
            const fileResult = await cloudinary.uploader.upload(
              "data:image/png;base64," + fileBase64
            );
            fileUrl = fileResult.secure_url;

            const songLinkResult = await cloudinary.uploader.upload(
              "data:audio/mp3;base64," + songLinkBase64
            );
            songLinkUrl = songLinkResult.secure_url;
          } catch (error) {
            console.log("Failed to upload file:", error);
          }

          form = {
            infor: {
              id: id,
              songname: songname,
              artists: artists,
              genresid: genresid,
              songLink: {
                path: songLinkFile ? songLinkFile.path : "",
                base64: songLinkBase64
              },
              like: like,
              listen: listen,
              thumbnail: fileUrl
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
      
// create +++++++++++++++++++++++++++++++++++++++++++++++++++++++
      else if (req.body.status === "create") {
        console.log(req.body.status)
        let form;
        if (err) {
          console.log(err);
          return res.status(200).json({
            EM: "error from server",
            EC: "-1",
            DT: ""
          });
        } else {
          const id = req.body.id;
          const songname = req.body.songname;
          const artists = req.body.artists;
          const genresid = req.body.genresid;
          const songLink = req.body.songLink;
          const file = req.files.file[0];
          const songLinkFile = req.files.songLink[0];

          const fileBase64 = file.buffer.toString("base64");
          const songLinkBase64 = songLinkFile.buffer.toString("base64");
          let fileUrl;
          let songLinkUrl;

          try {
            const fileResult = await cloudinary.uploader.upload(
              "data:image/png;base64," + fileBase64
            );
            fileUrl = fileResult.secure_url;
            console.log("lonk1",fileUrl)

            const songLinkResult = await cloudinary.uploader.upload(

              "data:audio/mp3;base64," + songLinkBase64,
              {resource_type:"auto"}
            );
            songLinkUrl = songLinkResult.url;

          } catch (error) {
            console.log("Failed to upload file:", error);
          }

          form = {
            infor: {
              id: id,
              songname: songname,
              artists: artists,
              genresid: genresid,
              songLink: songLinkUrl,
              like: 0,
              listen: 0,
              thumbnail: fileUrl
            }
          };
        }

        let data = form;
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