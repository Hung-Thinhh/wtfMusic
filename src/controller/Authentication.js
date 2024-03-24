import Authentication_service from "../services/Authentication_service.js";

const handleRegister = async (req, res) => {
  try {
    if (
      !req.body.username ||
      !req.body.email ||
      !req.body.password
    ) {
      console.log(req.body.username,req.body.email,req.body.password)
      return res.status(200).json({
        EM: "missing required",
        EC: "1",
        DT: "",
      });
    }
    console.log(req.body)
    let data = await Authentication_service.handleRegister(req.body);

    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: "",
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      EM: "error from server",
      EC: "-1",
      DT: "",
    });
  }
};

const handleLogin = async (req, res) => {
  try {
    if (!req.body.valueLogin || !req.body.password) {
      return res.status(200).json({
        EM: "missing required",
        EC: "1",
        DT: "",
      });
    }
    console.log(req.body.valueLogin);
    let data = await Authentication_service.handleLogin(req.body);
    if (data) {
      console.log(data);
      res.cookie("jwt", data.DT.access_token, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
      });
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    }
  } catch (error) {
    console.log("error: >>>>", error);

    return res.status(500).json({
      EM: "error from server",
      EC: "-1",
      DT: "",
    });
  }
};
const handleLogout = async (req, res) => {
    try {
      res.clearCookie('jwt');
    return res.status(200).json({
      EM: "clear cookies",
      EC: "0",
      DT: "",
    });
  } catch (error) {
    console.log("error: >>>>", error);

    return res.status(500).json({
      EM: "error from server",
      EC: "-1",
      DT: "",
    });
  }
};
module.exports = {
  handleRegister,
  handleLogin,
  handleLogout,
};
