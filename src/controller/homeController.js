
const Song = require("../models/sonng_model");
const Playlist = require("../models/playlist_model");


const handleHome = async (req, res) => {
  try {
    // Lấy tất cả các document từ collection
    const documents = await Playlist.find();

    // Mảng để lưu các document không đúng định dạng
    const invalidDocuments = [];

    // Kiểm tra từng document
    documents.forEach((document) => {
      // Kiểm tra nếu các trường bị thiếu hoặc không đúng kiểu dữ liệu
      if (
        !document.playlistId ||
        !document.playlistname ||
        !document.genresid ||
        !document.artistsId ||
        !document.thumbnail ||
        !document.type ||
        !document.description ||
        !document.songid ||
        !document.like ||
        !document.listen 
      ) {
        invalidDocuments.push(document);
      }
    });

    // Xoá các document không đúng định dạng
    const result = await Playlist.deleteMany({ _id: { $in: invalidDocuments.map(invalid => invalid._id) } });

    console.log(`${result.deletedCount} document đã được xoá.`);

    // Tiếp tục xử lý các tác vụ khác trong hàm handleHome

    res.status(200).json({ message: "Xoá các document không đúng định dạng thành công." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Gặp lỗi khi xoá các document không đúng định dạng." });
  }
};

const getHome = async (req, res) => {

  try {
    // Lấy tất cả các document từ collection
    const documents = await Song.find();

    // Mảng để lưu các document không đúng định dạng
    const invalidDocuments = [];

    // Kiểm tra từng document
    documents.forEach((document) => {
      // Kiểm tra nếu các trường bị thiếu hoặc không đúng kiểu dữ liệu
      if (
        !document.id ||
        !document.songname ||
        !document.thumbnail ||
        !document.alias ||
        !document.artists ||
        !document.genresid ||
        !document.like ||
        !document.listen ||
        !document.songLink ||
        !document.createdAt ||
        !document.updatedAt
      ) {
        console.log("có bọ")
        invalidDocuments.push(document);
      }
    });

    // Xoá các document không đúng định dạng
    // const result = await Song.deleteMany({ _id: { $in: invalidDocuments.map(invalid => invalid._id) } });

    console.log(`${invalidDocuments} document đã được xoá.`);

    // Tiếp tục xử lý các tác vụ khác trong hàm handleHome

    res.status(200).json({ message: "Xoá các document không đúng định dạng thành công." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Gặp lỗi khi xoá các document không đúng định dạng." });
  }

};
module.exports = {
  handleHome,
  getHome
};
