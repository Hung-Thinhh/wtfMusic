const Song = require('../../models/sonng_model');
const Ar = require('../../models/artists_model');
const Genre = require('../../models/genre_model');
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
import { AssemblyAI } from 'assemblyai'
const adminS = async (req, res) => {
  try {
    upload(req, res, async function (err) {
      // upate !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      if (req.body.status === "update") {
        let form;
        if (err) {
          console.log(err);
          return res.status(200).json({
            EM: "error from server",
            EC: "-1",
            DT: ""
          });
        } else if (!req.files) {
          // Không có file và không có songLink
          const id = req.body.id;
          const songname = req.body.songname;
          const artists = req.body.artists;
          const genresid = req.body.genresid;

          form = {
            id: id,
            songname: songname,
            artists: artists.split(","),
            genresid: genresid.split(",")
          };
        } else if (req.files.songLink && req.files.file) {
          // Có file hoặc songLink hoặc cả hai
          const id = req.body.id;
          const songname = req.body.songname;
          const artists = req.body.artists;
          const genresid = req.body.genresid;
          const file = req.files.file[0];
          const songLinkFile = req.files.songLink[0];

          const fileBase64 = file.buffer.toString("base64");
          const songLinkBase64 = songLinkFile.buffer.toString("base64");

          let fileUrl;
          let songLinkUrl;
          let duration;
          // Bổ xung các câu điều kiện kiểm tra tính tồn tại của file và songLink
          if (fileBase64) {
            try {
              const fileResult = await cloudinary.uploader.upload("data:image/png;base64," + fileBase64);
              fileUrl = fileResult.secure_url;
              console.log("link1", fileUrl);
            } catch (error) {
              console.log("Failed to upload file:", error);
            }
          }

          if (songLinkBase64) {
            try {
              const songLinkResult = await cloudinary.uploader.upload(
                "data:audio/mp3;base64," + songLinkBase64,
                { resource_type: "auto" }
              );
              songLinkUrl = songLinkResult.url;
              duration = songLinkResult.duration;
            } catch (error) {
              console.log("Failed to upload songLink:", error);
            }
          }

          const newArtistId = artists.split(",");
          const newArtistPromises = newArtistId.map(async (artist) => {
            const artistData = await Ar.findOne({ id: artist });
            if (artistData) {
              await Ar.updateOne({ id: artist }, { $push: { songListId: artist } });
            } else {
              await Ar.create({
                id: artist,
                artistsName: "",
                avt: "",
                alias: "",
                biography: "",
                birthday: "",
                realName: "",
                songListId: [id],
                playListId: [],
                totalFollow: 0
              });
            }
          });
          await Promise.all(newArtistPromises);

          const newGenresId = genresid.split(",");
          const newGenrePromises = newGenresId.map(async (genre) => {
            const genreData = await Genre.findOne({ genreId: genre });
            if (genreData) {
              await Genre.updateOne({ genreId: genre }, { $push: { songListId: genre } });
            } else {
              await Genre.create({
                genreId: genre,
                genrename: "",
                thumbnail: "",
                thumbnailHasText: "",
                thumbnailR: "",
                description: "",
                playListId: [id],
                listen: 0,
                state: 1
              });
            }
          });
          await Promise.all(newGenrePromises);
          form = {

            id: id,
            songname: songname,
            artists: artists.split(","),
            genresid: genresid.split(","),
            thumbnail: fileUrl,
            songLink: songLinkUrl,
            duration: duration

          };
          
        } else if (req.files.songLink && !req.files.file) {
          const id = req.body.id;
          const songname = req.body.songname;
          const artists = req.body.artists;
          const genresid = req.body.genresid;
          const songLinkFile = req.files.songLink[0];
          const songLinkBase64 = songLinkFile.buffer.toString("base64");

          let songLinkUrl;
          let duration;
          // Bổ xung các câu điều kiện kiểm tra tính tồn tại của file và songLink

          if (songLinkBase64) {
            try {
              const songLinkResult = await cloudinary.uploader.upload(
                "data:audio/mp3;base64," + songLinkBase64,
                { resource_type: "auto" }
              );
              songLinkUrl = songLinkResult.url;
              duration = songLinkResult.duration;
            } catch (error) {
              console.log("Failed to upload songLink:", error);
            }
          }
          const newArtistId = artists.split(",");
          const newArtistPromises = newArtistId.map(async (artist) => {
            const artistData = await Ar.findOne({ id: artist });
            if (artistData) {
              await Ar.updateOne({ id: artist }, { $push: { songListId: artist } });
            } else {
              await Ar.create({
                id: artist,
                artistsName: "",
                avt: "",
                alias: "",
                biography: "",
                birthday: "",
                realName: "",
                songListId: [id],
                playListId: [],
                totalFollow: 0
              });
            }
          });
          await Promise.all(newArtistPromises);

          const newGenresId = genresid.split(",");
          const newGenrePromises = newGenresId.map(async (genre) => {
            const genreData = await Genre.findOne({ genreId: genre });
            if (genreData) {
              await Genre.updateOne({ genreId: genre }, { $push: { songListId: genre } });
            } else {
              await Genre.create({
                genreId: genre,
                genrename: "",
                thumbnail: "",
                thumbnailHasText: "",
                thumbnailR: "",
                description: "",
                playListId: [id],
                listen: 0,
                state: 1
              });
            }
          });
          await Promise.all(newGenrePromises);
          form = {
            id: id,
            songname: songname,
            artists: artists.split(","),
            genresid: genresid.split(","),
            songLink: songLinkUrl,
            duration: duration
          };
        } else if (!req.files.songLink && req.files.file) {
          console.log(req.files.songLink);
          const id = req.body.id;
          const songname = req.body.songname;
          const artists = req.body.artists;
          const genresid = req.body.genresid;
          const file = req.files.file ? req.files.file[0] : null;

          const fileBase64 = file ? file.buffer.toString("base64") : null;

          let fileUrl;
          let duration;
          // Bổ xung các câu điều kiện kiểm tra tính tồn tại của file và songLink
          if (fileBase64) {
            try {
              const fileResult = await cloudinary.uploader.upload("data:image/png;base64," + fileBase64);
              fileUrl = fileResult.secure_url;
              console.log("link1", fileUrl);
            } catch (error) {
              console.log("Failed to upload file:", error);
            }
          }
          const newArtistId = artists.split(",");
          const newArtistPromises = newArtistId.map(async (artist) => {
            const artistData = await Ar.findOne({ id: artist });
            if (artistData) {
              await Ar.updateOne({ id: artist }, { $push: { songListId: artist } });
            } else {
              await Ar.create({
                id: artist,
                artistsName: "",
                avt: "",
                alias: "",
                biography: "",
                birthday: "",
                realName: "",
                songListId: [id],
                playListId: [],
                totalFollow: 0
              });
            }
          });
          await Promise.all(newArtistPromises);

          const newGenresId = genresid.split(",");
          const newGenrePromises = newGenresId.map(async (genre) => {
            const genreData = await Genre.findOne({ genreId: genre });
            if (genreData) {
              await Genre.updateOne({ genreId: genre }, { $push: { songListId: genre } });
            } else {
              await Genre.create({
                genreId: genre,
                genrename: "",
                thumbnail: "",
                thumbnailHasText: "",
                thumbnailR: "",
                description: "",
                playListId: [id],
                listen: 0,
                state: 1
              });
            }
          });
          await Promise.all(newGenrePromises);
          form = {
            id: id,
            songname: songname,
            artists: artists.split(","),
            genresid: genresid.split(","),
            thumbnail: fileUrl
          };
        } else if (!req.files.songLink && !req.files.file) {
          const id = req.body.id;
          const songname = req.body.songname;
          const artists = req.body.artists;
          const genresid = req.body.genresid;
          const newArtistId = artists.split(",");
          const newArtistPromises = newArtistId.map(async (artist) => {
            const artistData = await Ar.findOne({ id: artist });
            if (artistData) {
              await Ar.updateOne({ id: artist }, { $push: { songListId: artist } });
            } else {
              await Ar.create({
                id: artist,
                artistsName: "",
                avt: "",
                alias: "",
                biography: "",
                birthday: "",
                realName: "",
                songListId: [id],
                playListId: [],
                totalFollow: 0
              });
            }
          });
          await Promise.all(newArtistPromises);

          const newGenresId = genresid.split(",");
          const newGenrePromises = newGenresId.map(async (genre) => {
            const genreData = await Genre.findOne({ genreId: genre });
            if (genreData) {
              await Genre.updateOne({ genreId: genre }, { $push: { songListId: genre } });
            } else {
              await Genre.create({
                genreId: genre,
                genrename: "",
                thumbnail: "",
                thumbnailHasText: "",
                thumbnailR: "",
                description: "",
                playListId: [id],
                listen: 0,
                state: 1
              });
            }
          });
          await Promise.all(newGenrePromises);
          form = {
            id: id,
            songname: songname,
            artists: artists.split(","),
            genresid: genresid.split(","),
          };
        }
        try {
          const data = await Song.updateOne({ id: req.body.id }, form);

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
        } catch (error) {
          console.log("Failed to update song:", error);
          return res.status(200).json({
            EM: "error from server",
            EC: "-1",
            DT: ""
          });
        }
      }
      // create +++++++++++++++++++++++++++++++++++++++++++++++++++++++
      else if (req.body.status === "create") {
        let form;
        if (err) {
          console.log(err);
          return res.status(200).json({
            EM: "error from server",
            EC: "-1",
            DT: ""
          });
        } else if (!req.files || !req.files.songLink) {
          return res.status(200).json({
            EM: "ảnh không được để trống",
            EC: "-1",
            DT: ""
          });
        } else if (req.body.songname === "" || req.body.artists === "" || req.body.genresid === "" || req.body.songLink === "") {
          return res.status(200).json({
            EM: "không được để trống",
            EC: "-1",
            DT: ""
          });
        }
        else {
          const songname = req.body.songname;
          const artists = req.body.artists;
          const genresid = req.body.genresid;
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
          // kfjgkjf
          const client = new AssemblyAI({
            apiKey: '7a136dfcb51d4e579a8b13d3405b9b5a'
          })
          const audioUrl = songLinkUrl

          const params = {
            audio: audioUrl,
            punctuate: false,
            speech_model: 'best',
            format_text: false,
            language_detection: true,
            word_boost: ['aws', 'azure', 'google cloud'],
            boost_param: 'high',
            filter_profanity: false,
          }
          const transcript = await client.transcripts.transcribe(params)
          const new_lyric = [];
          let tempArray = [];
          transcript.words.forEach((word, index) => {
            tempArray.push(word);

            if ((index + 1) % 5 === 0 || index === transcript.words.length - 1) {
              new_lyric.push({
                words: tempArray.map((item) => {
                  return {
                    startTime: item.start,
                    endTime: item.end,
                    data: item.text
                  }
                })
              });
              tempArray = [];
            }
          });

          // kdjfkdjfk
          const newArtistId = artists.split(",");
          const newArtistPromises = newArtistId.map(async (artist) => {
            const artistData = await Ar.findOne({ id: artist });
            if (artistData) {
              const newSongList = artistData.songListId;
              newSongList.push(artist);
              await Ar.updateOne({ id: artist }, { songListId: newSongList });
            } else {
              await Ar.create({
                id: artist,
                artistsName: "",
                avt: "",
                alias: "",
                biography: "",
                birthday: "",
                realName: "",
                songListId: [id],
                playListId: [],
                totalFollow: 0
              });
            }
          });
          await Promise.all(newArtistPromises);

          const newGenresId = genresid.split(",");
          const newGenrePromises = newGenresId.map(async (genre) => {
            const genreData = await Genre.findOne({ genreId: genre });
            if (genreData) {
              await Genre.updateOne({ genreId: genre }, { $push: { songListId: genre } });
            } else {
              await Genre.create({
                genreId: genre,
                genrename: "",
                thumbnail: "",
                thumbnailHasText: "",
                thumbnailR: "",
                description: "",
                playListId: [id],
                listen: 0,
                state: 1
              });
            }
          });
          await Promise.all(newGenrePromises);
          form = {
            infor: {
              id: newIDSong,
              songname: songname,
              thumbnail: fileUrl,
              alias: songname,
              artists: newArtistId,
              genresid: genresid.split(","),
              songLink: songLinkUrl,
              duration: duration,
              lyric: new_lyric,
              like: 0,
              listen: 0,
            }
          };
        }

        let data = await Song.create(form.infor);
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
      else if (req.body.status === "delete") {
        let data;
        const song = await Song.findOne({ id: req.body.id });
        if (song) {
          const newState = song.state === 1 ? 0 : 1;
          data = await Song.updateOne({ id: req.body.id }, { state: newState });
          
          // Kiểm tra xem cập nhật đã thành công hay không
          if (data.modifiedCount > 0) {
            return res.status(200).json({
              EM: "success",
              EC: "0",
              DT: data
            });
          } else {
            return res.status(200).json({
              EM: "error from server",
              EC: "-1",
              DT: "No update made"
            });
          }
        } else {
          return res.status(200).json({
            EM: "error from server",
            EC: "-1",
            DT: "Song not found"
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