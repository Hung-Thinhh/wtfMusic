import express from "express";
import { checkUserJWT, checkUserPermission } from "../middleware/jwt.js";
const {
    getartist,
    songly,
    songurl,
    gethome,
    getArtist,
    get100,
    search,
} = require("../controller/getData.js");
const { getRating } = require("../controller/RatingController.js");
const { getHome } = require("../controller/homeController.js");
const { fetchPlaylist } = require("../controller/playlistController.js");
const { fetchGenres } = require("../controller/genresController.js");
const {
    fetchclone,
    fetchplaylistclone,
    fetchArtistsClone,
    fetchAutoCloneGenre,
    fetchSongData,
} = require("../controller/clonedata.js");
const { addToHistory, getHistory } = require("../controller/history.js");
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


const router = express.Router();

const initApiRouter = (app) => {
    router.all("*", checkUserJWT);

    //register
    router.post("/register", handleRegister);
    router.post("/login", handleLogin);
    router.get("/account", checkAccount);
    router.post("/logout", handleLogout);

    //user
<<<<<<< HEAD
    router.get("/getInfor", Infor);
    router.post("/editInfor", editInfor);
    router.post("/changepass", changePass);
    router.post("/banSong", updateBanSongs);
    router.post("/addlike", addLikeSomething);
    router.post("/unlike", unLikeSomething);
    router.post("/createplaylist", createMyPl);
    router.post("/getuserplaylist", getMyPl);
    router.post("/getuserlikesong", userGetLikeSongs);
    router.post("/addtoplaylist", addToPlaylist);

    //music
    router.get("/getartist", getartist);
    router.get("/songdetail/:id", songdetail);
    router.get("/songPage/:id", songPage);
    router.get("/songurl/:id", songurl);
    router.get("/songly/:id", songly);
    router.get("/search/:id", search);
    router.get("/home", getHome);
    router.get("/rating", getRating);
    router.get("/artist/:id", getArtist);
    router.get("/get100", get100);
    router.get("/getgenres", fetchGenres);
    router.get("/getplaylist/:id", fetchPlaylist);

    router.post("/clone", fetchclone);
    router.post("/cloneplaylist", fetchplaylistclone);
    router.post("/clonepArtists", fetchArtistsClone);

    // history
    router.post("/addnewhistory", addToHistory);
    router.get("/getHistory", getHistory);

=======
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
    router.post('/clone', fetchclone);
    router.post('/cloneplaylist', fetchplaylistclone);
    router.post('/clonepArtists', fetchArtistsClone);
    router.get('/getrankingservice/:id', getSongRankControl);
    router.get('/getrankingplservice/:id', getPlaylistRankControl);
    // history
    router.post('/addnewhistory', addToHistory);
    router.get('/getHistory', getHistory);
>>>>>>> d009b70eae5e1c47206aed510a9cfb5680b72a22
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
    router.post("/admin/searchsong", adminSearch);

    return app.use("/api", router);
};

export default initApiRouter;
