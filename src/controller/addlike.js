import User from "../models/user_model.js";
const { v4: uuidv4 } = require("uuid");

const addlike = async (req, res) => {
  try {
    console.log(JSON.stringify(req.body));
    console.log(req.user);
    let data = await addLike(req.body.data, req.user.id);
    if (data && data.EC == "0") {
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    } else {
      return res.status(200).json({
        EM: data.EM,
        EC: "-1",
        DT: "",
      });
    }
  } catch (err) {
    return res.status(200).send({ error: err.message });
  }
};

export default addlike;
