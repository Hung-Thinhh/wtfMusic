import Comment from "../models/comment_model";
// import mongoose, { Types } from "mongoose";

const restCommentService = (data, userId) => {
    if (data.status === "create") {
        const datas = Comment.create({
            songId: data.data.id,
            content: data.data.comments,
            userId: userId
        });
        console.log(datas);
        if (!datas) {
            return {
                EM: "thêm vào lịch sử thất bại!",
                EC: "-1",
                DT: datas,
            };
        } else {
            return {
                EM: "thêm vào lịch sử thất bại!",
                EC: "0",
                DT: datas,
            };
        }
    } else if (data.status === "read") {
        return Comment.find({ songId: data.data.songId });
    } else if (data.status === "report") {
        return Comment.findByIdAndUpdate(data.data.commentId, { reportCount: data.data.reportCount });
    }
}


module.exports = { restCommentService };