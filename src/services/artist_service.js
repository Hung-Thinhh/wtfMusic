const { Nuxtify } = require("nuxtify-api");
const Ar = require("../models/artists_model");
const Song = require("../models/sonng_model");
const Playlist = require("../models/playlist_model");
const infoArtist = async (id) => {
  const data = await Ar.findOne({ alias: id }).select(
    "artistsName id biography birthday playListId realName avt totalFollow songListId"
  );

  if (data) {
    const song = await Song.find({ id: { $in: data.songListId } }).select(
      "songname thumbnail id artists duration"
    );
    if (song) {
      data.songListId = song;
    }
    // Lấy danh sách các nghệ sĩ liên quan
    const relatedArtistsIds = data.songListId.flatMap((song) =>
      song.artists.map((artist) => artist.id)
    ); // Lấy danh sách ID nghệ sĩ từ song.artists
    // console.log(relatedArtistsIds);
    const relatedArtists = await Ar.find({
      id: { $in: relatedArtistsIds.filter((a) => a !== data.id) },
    })
      .select("artistsName id avt totalFollow alias")
      .lean();
    // console.log(relatedArtists);

    const playlist = await Playlist.find({
      playlistId: { $in: data.playListId },
    }).select("playlistname thumbnail playlistId");
    if (playlist) {
      data.playListId = playlist;
    }
    const playlists = await Playlist.find({
      artistsId: { $in: [data.id] },
      type: "playlist",
    }).select("playlistname thumbnail playlistId");
    // Tạo bản sao của data

    const newData = JSON.parse(JSON.stringify(data));

    // Thêm trường mới vào bản sao
    newData.playlistJoin = playlists;
    newData.relatedArtists = relatedArtists;

    // console.log(newData); // Kiểm tra kết quả

    return {
      EM: "Lấy artist thành công!",
      EC: "0",
      DT: newData, // Sử dụng dữ liệu đã được cập nhật
    };
  } else {
    const getSongmp3 = async () => {
      const songly = await Nuxtify.getArtist(artistId);
      return {
        EM: "Lấy genres thành công!",
        EC: "0",
        DT: songly.data, // Sử dụng dữ liệu đã được cập nhật
      };
    };
    getSongmp3();
  }
};
const ArtistSong = async (id) => {
  const data = await Ar.findOne({ alias: id })
    .select("playListId  songListId")
    
      if (data) {
        const song = await Song.find({ id: { $in: data.songListId } }).select(
          "songname thumbnail id artists duration"
        );
        if (song) {
          return {
            EM: "Lấy artist song thành công!",
            EC: "0",
            DT: song, // Sử dụng dữ liệu đã được cập nhật
          };
        } else {
          return {
            EM: "error",
            EC: "1",
            DT: "", // Sử dụng dữ liệu đã được cập nhật
          };
        }

        const playlist = await Playlist.find({
          playlistId: { $in: data.playListId },
        }).select("playlistname thumbnail playlistId");
        if (playlist) {
          data.playListId = playlist;
        }
      } else {
        return {
          EM: "error",
          EC: "1",
          DT: "", // Sử dụng dữ liệu đã được cập nhật
        };
      }
  
};
const Artistplaylist = async (id) => {
  const data = await Ar.findOne({ alias: id })
    .select("playListId  songListId")
   
      if (data) {
        const playlist = await Playlist.find({
          playlistId: { $in: data.playListId },
        }).select("playlistname thumbnail playlistId");
        if (playlist) {
          return {
            EM: "Lấy artist song thành công!",
            EC: "0",
            DT: playlist, // Sử dụng dữ liệu đã được cập nhật
          };
        } else {
          return {
            EM: "error",
            EC: "1",
            DT: "", // Sử dụng dữ liệu đã được cập nhật
          };
        }
      } else {
        return {
          EM: "error",
          EC: "1",
          DT: "", // Sử dụng dữ liệu đã được cập nhật
        };
      }

};
export { infoArtist, ArtistSong, Artistplaylist };
