const { Nuxtify } = require("nuxtify-api")

const getartist = async (req, res) => {
    const getSongmp3 = async () => {
        console.log("getSongmp3")
        // const url = await Nuxtify.getArtist('Jisoo');
        const url = await Nuxtify.song.getSongDetail('Z6709W0Z');
        const timestamp = 1708862634884;
        const date1 = new Date(23960);

        const startTime = 20500;

        const timestampSeconds = Math.floor(timestamp / 1000); // Chuyển đổi timestamp thành giây

        const diffSeconds = timestampSeconds - startTime; // Tính hiệu giữa timestamp và startTime

        console.log("Difference in seconds:", diffSeconds);
        const date2 = new Date(diffSeconds);

        const seconds2 = date2.getSeconds();
        const seconds1 = date1.getSeconds();


        console.log("Seconds1:", seconds1);
        console.log("Seconds2:", seconds2);

        console.log(date2);
        return res.json(url);
    }
    getSongmp3()

}

const songdetail = async (req, res) => {
    const songId = req.params.id;
    const SongDetail = await Nuxtify.song.getDetail(songId);
    res.json(SongDetail);
}

const songurl = async (req, res) => {
    const songId = req.params.id;
    const songUrl = await Nuxtify.song.getUrl(songId);
    res.json(songUrl);
}

const songly = async (req, res) => {
    const songId = req.params.id;
    const songLyrics = await Nuxtify.song.getLyrics(songId);
    res.json(songLyrics);
}


const gethome = async (req, res) => {
    const getSongmp3 = async () => {
        const songly = await Nuxtify.getHome();
        return res.json(songly);
    }
    getSongmp3()
}
const getArtist = async (req, res) => {
    const getSongmp3 = async () => {
        const songly = await Nuxtify.getArtist("Rose-BLACKPINK");
        return res.json(songly);
    }
    getSongmp3()
}
const get100 = async (req, res) => {
    const getSongmp3 = async () => {
        const songly = await Nuxtify.getTop100();
        return res.json(songly);
    }
    getSongmp3()
}


const search = async (req, res) => {
    const getSongmp3 = async () => {
        const songId = req.params.id;
        const songly = await Nuxtify.search.getSuggestion(songId);
        return res.json(songly);
    }
    getSongmp3()
}
module.exports = {
    getartist,
    songly,
    songurl,
    songdetail,
    gethome,
    getArtist,
    get100,
    search
}



