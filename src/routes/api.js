const express = require('express')

// import apiController from "../controller/apiController"
// import userController from "../controller/userController"
// import groupController from "../controller/groupController"
// import roleController from "../controller/roleController"
// import {checkUserJWT,checkUserPermission} from '../middleware/jwt'
const router = express.Router();



const initApiRouter = (app) => {
    
// router.all('*',checkUserJWT,checkUserPermission)
router.all('*')

    // router.post("/register", apiController.handleRegister);
   

    return app.use("/api", router);
}

module.exports= initApiRouter;