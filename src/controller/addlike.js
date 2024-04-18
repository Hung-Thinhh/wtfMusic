import User from "../models/user_model.js";
const { v4: uuidv4 } = require('uuid');

const addlike = async (req, res) => {
    try {
        const playListData = req.body.data;
        const getUser = await User.findOne({ username: playListData.user });
        
        if (getUser) {
            getUser.likedPlayLists.push(playListData.playlist);
            await getUser.save();
            console.log('Dữ liệu đã được thêm vào likedPlayLists:', getUser.likedPlayLists);
        } else {
            return res.status(200).send({ error: 'User not found' });
        }
    } catch (err) {
        return res.status(200).send({ error: err.message });
    }
}

export default addlike;