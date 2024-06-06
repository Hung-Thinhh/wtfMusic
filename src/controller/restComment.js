
import {restCommentService} from "../services/restComment-service"
const restComment = async (req, res) => {
    const data = req.body.data;
    const userId = req.user.id
    console.log("sdsdsdsdsdsds",userId)
    const datas = await restCommentService(data,userId)

    if (data.EC == "0") {
        return res.status(200).json({
            EM: data.EM,
            EC: "0",
            DT:datas.DT,
          });
    }
}

module.exports = {
    restComment
}