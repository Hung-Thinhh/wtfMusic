import express from 'express'
import {checkUserJWT, checkUserPermission} from '../middleware/jwt.js';
const {getartist,songly,songurl,songdetail,gethome,getArtist,get100,search}= require("../controller/getData.js")
const {getRating} = require("../controller/RatingController.js")
const {getHome}= require("../controller/homeController.js");
const {fetchPlaylist} = require("../controller/getPlaylist.js");
const {fetchclone,fetchplaylistclone,fetchArtistsClone,fetchAutoCloneGenre,fetchSongData} = require("../controller/clonedata.js");
const {addToHistory,updateH}=require("../controller/history.js");
const {handleRegister,handleLogin,checkAccount,handleLogout} = require("../controller/Authentication.js")
import addlike from"../controller/addlike.js"
import createPlaylist from"../controller/reatePlayList.js"
import getUserPlayList from"../controller/getUPlayList.js"


import {Infor,editInfor,changePass} from '../controller/User.js'
const {adminSong} = require("../controller/admin/listStong.js");
const router = express.Router();

const initApiRouter = (app) => {

    router.all('*',checkUserJWT)
    // router.all('*',checkUserJWT,checkUserPermission)
    // router.all('*')

    //register
    router.post("/register", handleRegister);
    router.post("/login", handleLogin);
    router.get("/account",checkAccount);
    router.post("/logout",handleLogout);
    router.get("/getInfor",Infor);
    router.post("/editInfor",editInfor);
    router.post("/changepass",changePass);

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

    
    router.get('/getallsong', fetchAutoCloneGenre);
    router.post('/postsong', fetchSongData);




    router.post('/addnewhistory', addToHistory);
    router.post('/addlike', addlike);

    router.post('/createplaylist', createPlaylist);


    router.post('/getuserplaylist', getUserPlayList);





// admin

    router.get('/admin/song',adminSong)

    return app.use("/api", router);
}

export default initApiRouter;