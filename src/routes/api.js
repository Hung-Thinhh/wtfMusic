import express from "express";
import { checkUserJWT, checkUserPermission } from "../middleware/jwt.js";
const {
    getartist,
    songly,
    songurl,
    gethome,
    getArtist,
   
    search,
} = require("../controller/getData.js");
const { getRating } = require("../controller/RatingController.js");
const { getHome } = require("../controller/homeController.js");
const { fetchPlaylist,getRelatedPlaylist } = require("../controller/playlistController.js");
const { fetchGenres,getGenresbyId } = require("../controller/genresController.js");
const { get100} = require("../controller/getTop100.js");
const {
    fetchclone,
    fetchplaylistclone,
    fetchArtistsClone,
    fetchAutoCloneGenre,
    fetchSongData,
} = require("../controller/clonedata.js");
const { addToHistory, getHistory } = require("../controller/history.js");
const { getRankMonth } = require("../controller/rankingCliend.js");
const {
    handleRegister,
    handleLogin,
    checkAccount,
    handleLogout,
} = require("../controller/Authentication.js");

import {
    Infor,
    editInfor,
    changePass,
    updateBanSongs,
    addLikeSomething,
    unLikeSomething,
    getMyPl,
    createMyPl,
    addToPlaylist,
    getAllUs,
    getAlGenre,
    adminSearch,
    adminHome,
    userGetLikeSongs,
    changeRoleCtrl,
    deleteMyPl
} from "../controller/User.js";
const { adminSong } = require("../controller/admin/listStong.js");
const { adminPlaylist } = require("../controller/admin/listPlaylist.js");
const { adminAr } = require("../controller/admin/listSinger.js");
const { songdetail, songPage } = require("../controller/songController.js");

const {adminS} = require("../controller/admin/song.js");
const {adminG} = require("../controller/admin/genre.js");
const {adminA} = require("../controller/admin/artists.js");
const {adminP} = require("../controller/admin/playlist.js");
const {adminSS} = require("../controller/admin/searchSong.js");


const {getSongRankControl} = require("../controller/rangkingSong.js");
const {getPlaylistRankControl} = require("../controller/rangkingPlaylist.js");

const {getSongRankListenControl} = require("../controller/rangkingSongListen.js");
const {getPlaylistRankListenControl} = require("../controller/rangkingPlaylistListen.js");



const {restComment} = require("../controller/restComment.js");



const {getbanData} = require("../controller/getBan.js");


const router = express.Router();

const initApiRouter = (app) => {
    router.all("*", checkUserJWT);

    //register
    router.post("/register", handleRegister);
    router.post("/login", handleLogin);
    router.get("/account", checkAccount);
    router.post("/logout", handleLogout);

    //user
    router.get("/getInfor",Infor);
    router.post("/editInfor",editInfor);
    router.post("/changepass",changePass);
    router.post("/banSong",updateBanSongs);
    router.post('/addlike', addLikeSomething);
    router.post('/unlike', unLikeSomething);
    router.post('/createplaylist', createMyPl);
    router.post('/getuserplaylist', getMyPl);
    router.post('/getuserlikesong', userGetLikeSongs);
    router.post('/addtoplaylist', addToPlaylist);
    //music
    router.get('/getartist', getartist);
    router.get('/songdetail/:id', songdetail);
    router.get('/songPage/:id', songPage);
    router.get('/songurl/:id', songurl);
    router.get('/songly/:id', songly);
    router.get('/search/:id', search);
    router.get('/home', getHome);
    router.get('/rating', getRating);
    router.get('/artist/:id', getArtist);
    router.get('/get100', get100);
    router.get('/getplaylist/:id', fetchPlaylist);
    router.get('/getRelatedPlaylist/:id', getRelatedPlaylist);
    router.get("/getgenres", fetchGenres);
    router.get("/getGenresbyId/:id", getGenresbyId);
    router.get('/clone', fetchclone);
    router.post('/cloneplaylist', fetchplaylistclone);
    router.post('/clonepArtists', fetchArtistsClone);
    router.post("/restcomment", restComment);
    router.post("/delemyplaylist", deleteMyPl);
    
    router.get('/getrankingservice/:id', getSongRankControl);
    router.get('/getrankingplservice/:id', getPlaylistRankControl);

    router.get('/getrankingservicelisten/:id', getSongRankListenControl);
    router.get('/getrankingplservicelisten/:id', getPlaylistRankListenControl);


    //Bảng xếp hạng
    router.get('/getRankCliend', getRankMonth);



    // history
    router.post('/addnewhistory', addToHistory);
    router.get('/getHistory', getHistory);
    // admin
    router.get("/getallsong", fetchAutoCloneGenre);
    router.post("/postsong", fetchSongData);

    router.get("/admin/song/:id", adminSong);
    router.get("/admin/playlist/:id", adminPlaylist);
    router.get("/admin/artist/:id", adminAr);
    router.get("/admin/user/:id", getAllUs);
    router.get("/admin/genres/:id", getAlGenre);
    router.get("/admin/home/", adminHome);

    router.post("/admin/restsong", adminS);
    router.post("/admin/restgenre", adminG);
    router.post("/admin/restartists", adminA);
    router.post("/admin/restplaylist", adminP);
    router.post("/admin/restuser", changeRoleCtrl);
    router.post("/admin/searchsong", adminSearch);
    router.get("/admin/getbanData", getbanData);

    return app.use("/api", router);
};

export default initApiRouter;
