import { restCommentService,getComments,editComments,createComments } from "../services/restComment-service";
const getComment = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  

    const datas = await getComments(id);

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
};
const editComment = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  

    const datas = await editComments(req.body.data, req.user.id);

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
};
const createComment = async (req, res) => {
const data = req.body.data
    const datas = await createComments(data,req.user.id);

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
};
const deleteComment = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  

    const datas = await editComments(id);

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
};
const restComment = async (req, res) => {
  const data = req.body.data;
  const userId = data.userId;
  let datas;
    if (data.status === "create") {
        console.log(data.data.userId)
    datas = await restCommentService(data, data.data.userId ? data.data.userId : null);
  } else {
    datas = await restCommentService(data, userId ? userId : null);
  }
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
};

module.exports = {
  restComment,getComment,editComment,createComment,deleteComment
};
