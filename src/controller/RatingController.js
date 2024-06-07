const { Nuxtify } = require("nuxtify-api");
import { getPlaylistRankMonth } from "../services/rankCliend.js"

const getRating = async (req, res) => {

  const url = await Nuxtify.chart.getHome();
  const data = await getPlaylistRankMonth()
  console.log(data.DT)
  return res.status(200).json(url);
};


module.exports = {
    getRating,
};
