const express = require('express')

// import apiController from "../controller/apiController"
// import userController from "../controller/userController"
// import groupController from "../controller/groupController"
// import roleController from "../controller/roleController"
// import {checkUserJWT,checkUserPermission} from '../middleware/jwt'
const getAll= require("../controller/getData")
const router = express.Router();



const initApiRouter = (app) => {
    
    // router.all('*',checkUserJWT,checkUserPermission)
    router.all('*')

    // router.post("/register", apiController.handleRegister);
   router.get('/getartist', getAll.getartist);
   router.get('/songly', getAll.songly);
   router.get('/songurl', getAll.songurl);
   router.get('/SongDetail', getAll.songdetail);
   router.get('/home', getAll.gethome);
   router.get('/artist', getAll.getArtist);
   router.get('/get100', getAll.get100);



    return app.use("/api", router);
}

module.exports= initApiRouter;