const express = require('express')

// import apiController from "../controller/apiController"
// import userController from "../controller/userController"
// import groupController from "../controller/groupController"
// import roleController from "../controller/roleController"
// import {checkUserJWT,checkUserPermission} from '../middleware/jwt'
const getAll = require("../controller/getData")
const router = express.Router();
const userctrl = require("../controller/auth")
const getRating = require("../controller/RatingController")
const getHome = require("../controller/homeController");
const getPlaylist = require("../controller/getPlaylist");
const clone = require("../controller/clonedata");







const initApiRouter = (app) => {

    // router.all('*',checkUserJWT,checkUserPermission)
    router.all('*')
    // router.post("/register", apiController.handleRegister);
    router.get('/getartist', getAll.getartist);
    router.get('/songdetail/:id', getAll.songdetail);
    router.get('/songurl/:id', getAll.songurl);
    router.get('/songly/:id', getAll.songly);
    router.get('/search/:id', getAll.search);
    router.get('/home', getHome.getHome);
    router.get('/rating', getRating.getRating);
    router.get('/artist', getAll.getArtist);
    router.get('/get100', getAll.get100);
    router.get('/signup', userctrl.signup);
    router.get('/login', userctrl.login);
    router.get('/getplaylist/:id', getPlaylist.fetchPlaylist);
    router.post('/clone', clone.fetchclone);
    router.post('/cloneplaylist', clone.fetchplaylistclone);





    return app.use("/api", router);
}

module.exports = initApiRouter;