import { getSongRankListen } from "../services/getdateSongRankListen_service.js";

const getSongRankListenControl = async (req, res) => {
  const songId = req.params.id;
  const range = req.query.range;
  const start = req.query.start;
  const data = await getSongRankListen(songId, range, start);
  if (data.EC == "0") {
    return res.status(200).json({
      EM: data.EM,
      EC: "0",
      DT:  data.DT,
    });
  } else {
    return res.status(400).json({
      EM: data.EM,
      EC: data.EC,
    });
  }
};

module.exports = {
  getSongRankListenControl,
};

