import Playlist from "../models/playlist_model";
import Song from "../models/sonng_model";
const Ar = require("../models/artists_model");

const getPlaylist = async (id) => {
  const playlist = await Playlist.findOne({
    playlistId: id,
    state: { $ne: 1 },
  }).select("playlistId playlistname thumbnail description songid like listen");
  if (!playlist) {
    return {
      EM: "thêm vào lịch sử thất bại!",
      EC: "1",
      DT: "",
    };
  }

  const songId = playlist.songid;
  const songs = [];

  // Use Promise.all to fetch genres and songs concurrently
  const [songsData] = await Promise.all([
    Promise.all(
      songId.map(async (id) => {
        try {
          const songItem = await Song.findOne({
            id: id,
            state: { $ne: 1 },
          }).select("songname id artists duration thumbnail");
          if (songItem) {
            songs.push(songItem);
          }
        } catch (error) {
          console.log("Error retrieving songs:", error);
        }
      })
    ),
  ]);

  // Sort songs based on their index in songId
  songs.sort((a, b) => songId.indexOf(a.id) - songId.indexOf(b.id));

  // Check if there are any errors during fetching
  if (songsData.some((result) => result instanceof Error)) {
    console.log("Error retrieving playlist info:", songsData);

    return {
      EM: "thêm vào lịch sử thất bại!",
      EC: "-1",
      DT: "",
    };
  } else {
    // Lấy danh sách các nghệ sĩ liên quan
    const relatedArtistsIds = songs.flatMap((songs) =>
      songs.artists.map((artist) => artist.id)
    );
    // Loại bỏ các phần tử trùng lặp
    const uniqueArtistsIds = new Set(relatedArtistsIds);

    // Chuyển đổi lại thành mảng
    const uniqueArtistsIdsArray = Array.from(uniqueArtistsIds);

    // Lấy 5 phần tử đầu tiên
    const top5ArtistsIds = uniqueArtistsIdsArray.slice(0, 5);
    const relatedArtists = await Ar.find({
      id: { $in: top5ArtistsIds },
    })
      .select("artistsName id avt totalFollow alias")
      .lean();
    console.log(top5ArtistsIds);
    return {
      EM: "thêm vào lịch sử thành công!",
      EC: "0",
      DT: { playlist, song: songs, artist: relatedArtists },
    };
  }
};

// lấy danh sách các bài nhạc liên quan với bài hát đang phát
const RelatedPlaylist = async (id) => {
  const currentSong = await Song.findOne(
    { id: id, state: { $ne: 1 } },
    { id: 1, artist: 1, songname: 1, artists: 1, thumbnail: 1, genresid: 1 }
  );
  const genre = currentSong.genresid;
  const randomSongs = await Song.aggregate([
    { $match: { genresid: { $in: genre } } },
    { $sample: { size: 10 } },
    { $sort: { createdAt: -1 } },
  ]);
  console.log(randomSongs);

  const isIDExist = randomSongs.some((song) => song.id == id);

  if (isIDExist) {
    console.log("ID đã tồn tại trong kết quả trả về.");
  } else {
    randomSongs.unshift(currentSong);
    console.log("ID không tồn tại trong kết quả trả về.");
  }
  if (randomSongs) {
    return {
      EM: "thêm vào lịch sử thành công!",
      EC: "0",
      DT: { song: randomSongs },
    };
  } else {
    return {
      EM: "thêm vào lịch sử thất bại!",
      EC: "-1",
      DT: "",
    };
  }
};

module.exports = { getPlaylist, RelatedPlaylist };
