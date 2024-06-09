const { Nuxtify } = require("nuxtify-api");
import { getPlaylistRankMonth,getPlaylistRankWeek } from "../services/rankCliend.js"
const getRating = async (req, res) => {

  const data = await getPlaylistRankMonth()
  const dataWKorea = await getPlaylistRankWeek('kpop')
  const dataWUs = await getPlaylistRankWeek('us-uk')
  const dataWVi = await getPlaylistRankWeek('vn')
  if (data.EC == "0" && dataWKorea.EC=="0" && dataWVi.EC=="0" && dataWUs.EC=="0") {
    return res.status(200).json({
      EM: data.EM,
      EC: "0",
      DT: { data: {RTChart:data.DT,weekChart:{korea:dataWKorea.DT,us:dataWUs.DT,vn:dataWVi.DT}}},
    });
  }
  // return res.status(200).json(url);
};


module.exports = {
    getRating,
};
