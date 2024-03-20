const { Nuxtify } = require("nuxtify-api");
const getRating = async (req, res) => {

  const url = await Nuxtify.chart.getHome();
  return res.json(url);
};


module.exports = {
    getRating,
};
