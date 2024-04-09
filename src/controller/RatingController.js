const { Nuxtify } = require("nuxtify-api");
const getRating = async (req, res) => {

  const url = await Nuxtify.chart.getHome();
  return res.status(200).json(url);
};


module.exports = {
    getRating,
};
