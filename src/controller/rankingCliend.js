import { getPlaylistRankMonth } from "../services/rankCliend.js"
const getRankMonth = async (req, res) => {
  const data = await getPlaylistRankMonth()
  if (data.EC == "0") {
    return res.status(200).json({
      EM: data.EM,
      EC: "0",
      DT: { data: data.DT },
    });
  }
}

module.exports = {
    getRankMonth
}

