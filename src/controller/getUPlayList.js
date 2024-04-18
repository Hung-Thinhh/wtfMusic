import User from "../models/user_model.js";
import Playlist from "../models/playlist_model.js"; //import model Playlist

const getUserPlayList = async (req, res) => {
  console.log('getUserPlayList')
  try {
      const UserId = req.body.data;
      const getUser = await User.findOne({ username: UserId.userId });
      let response = []

      if (getUser && getUser.myPlayLists){
          const getpl = async (id) => {
              return await Playlist.findOne({playlistId: id})
          }
          const playlistPromises = getUser.myPlayLists.map((playlist) => {
              return getpl(playlist)
          })
          const playlists = await Promise.all(playlistPromises)
          console.log(playlists)
          res.json(playlists)
      } else {
          res.status(200).send("Undefined")
      }
  } catch (err) {
      return res.status(200).send({ error: err.message });
  }
}

export default getUserPlayList;