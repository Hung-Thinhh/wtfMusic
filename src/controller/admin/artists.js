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
          let duration
          try {
            const fileResult = await cloudinary.uploader.upload(
              "data:image/png;base64," + fileBase64
            );
            fileUrl = fileResult.secure_url;
            console.log("lonk1", fileUrl)

            const songLinkResult = await cloudinary.uploader.upload(

              "data:audio/mp3;base64," + songLinkBase64,
              { resource_type: "auto" }
            );
            songLinkUrl = songLinkResult.url;
            duration = songLinkResult.duration;
          } catch (error) {
            console.log("Failed to upload file:", error);
          }
          const newIDSong = uuidv4().substring(0, 8).toUpperCase();
          form = {
            infor: {
              id: newIDSong,
              songname: songname,
              thumbnail: fileUrl,
              alias: songname,
              artists: artists,
              genresid: genresid,
              songLink: songLinkUrl,
              duration: duration,
              like: 0,
              listen: 0,
            }
          };
        }

        let data = await Song.create(form.infor);
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
};

module.exports = {
  adminA
};