const history = require('../models/history');

const updateH = async (req, res) => {
    try{
        const id = req.body.data.id;
        const songId = req.body.data.songId;
        const historyData = req.body.data;
    
        const foundhistory = await history.findOne({ userId: id });

        if(foundhistory && !foundhistory.songid.includes(songId)) {
            foundhistory.songid.push(songId);
            await foundhistory.save();
        } 
        else if(!foundhistory) {
            const newHistory = new history(historyData);
            await newHistory.save();
        }

        res.json(foundhistory ? foundhistory : newHistory);
    }catch(err){
        console.log(err);
    }
};
const addToHistory = async (req, res) => {
    try {
        const historyData = req.body.data;
        const newHistory = new history(historyData);
        const savedHistory = await newHistory.save();

        res.json(savedHistory);
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    updateH,
    addToHistory
};