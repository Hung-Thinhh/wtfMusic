import express from 'express'
import {checkUserJWT, checkUserPermission} from '../middleware/jwt.js';
const {getartist,songly,songurl,songdetail,gethome,getArtist,get100,search}= require("../controller/getData.js")
const {getRating} = require("../controller/RatingController.js")
const {getHome}= require("../controller/homeController.js");
const {addLikes}= require("../controller/llikeController.js");
const {fetchPlaylist} = require("../controller/getPlaylist.js");
const {fetchclone,fetchplaylistclone,fetchArtistsClone,fetchAutoCloneGenre} = require("../controller/clonedata.js");
const {addToHistory,updateH}=require("../controller/history.js");
const {handleRegister,handleLogin,checkAccount,handleLogout} = require("../controller/Authentication.js")

const router = express.Router();

const initApiRouter = (app) => {

    router.all('*',checkUserJWT,checkUserPermission)
    // router.all('*')

    //register
    router.post("/register", handleRegister);
    router.post("/login", handleLogin);
    router.get("/account",checkAccount);
    router.post("/logout",handleLogout);

    //music
    router.get('/getartist', getartist);
    router.get('/songdetail/:id', songdetail);
    router.get('/songurl/:id', songurl);
    router.get('/songly/:id', songly);
    router.get('/search/:id', search);
    router.get('/home', getHome);
    router.get('/rating', getRating);
    router.get('/artist/:id', getArtist);
    router.get('/get100', get100);
    // router.get('/signup', userctrl.signup);
    // router.get('/login', userctrl.login);
    router.get('/getplaylist/:id', fetchPlaylist);
    // update data
    router.post('/clone', fetchclone);
    router.post('/cloneplaylist', fetchplaylistclone);
    router.post('/clonepArtists', fetchArtistsClone);
    router.get('/genre', fetchAutoCloneGenre);



    router.post('/addnewhistory', addToHistory);
    router.post('/addLikes', addLikes);





    return app.use("/api", router);
}

export default initApiRouter;