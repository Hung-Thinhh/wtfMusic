const likes = require('../models/likes_store_model');
const addLikes = async (req, res) => {
    try {
        const historyData = req.body.data;
        console.log("LỊCH SỬ",historyData)
        // const newHistory = new history(historyData);
        // const savedHistory = await newHistory.save();

        res.json(historyData);
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    addLikes
};