
import { restCommentService } from "../services/restComment-service"
const restComment = async (req, res) => {
    const data = req.body.data;
    const userId = req.user.id
    const datas = await restCommentService(data, userId)
    if (datas && datas.EC == "0") {
        return res.status(200).json({
            EM: datas.EM,
            EC: "0",
            DT: datas.DT,
        });
    } else {
        return res.status(200).json({
            EM: datas.EM,
            EC: datas.EC,
            DT: "",
        });
    }
}

module.exports = {
    restComment
}