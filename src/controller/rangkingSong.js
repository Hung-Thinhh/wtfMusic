import { getSongRank } from "../services/getdateSongRank_service.js"
const getSongRankControl = async (req, res) => {
  const songId = req.params.id;
  const selectRange = req.params.range;
  const startDay = req.params.start;
  const data = await getSongRank(songId,selectRange,startDay)
  if (data.EC == "0") {
    return res.status(200).json({
      EM: data.EM,
      EC: "0",
      DT: { data: data.DT },
    });
  }
}


module.exports = {
  getSongRankControl
}

