import { getPlaylist } from "./history-services"
import Song from "../models/sonng_model.js";

const getNewRelease = async() => {
   const ahah =  await Song.find({ genresid: { $elemMatch: { $eq: 'IWZ9Z087' } } })
console.log('-----------------------------------------',ahah);

  
    // Lặp qua từng id playlist
   
}
module.exports = {
    getNewRelease
  };