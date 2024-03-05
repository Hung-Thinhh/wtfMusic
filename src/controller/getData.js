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
    const getSongmp3 = async () => {
        const SongDetail = await Nuxtify.song.getDetail('Z690CWC8');
        return res.json(SongDetail);
    }
    getSongmp3()
}
const songurl = async (req, res) => {
    const getSongmp3 = async () => {
        const songurl = await Nuxtify.song.getUrl('Z690CWC8');

        return res.json(songurl);
    }
    getSongmp3()
}
const songly = async (req, res) => {
    const getSongmp3 = async () => {
        const songly = await Nuxtify.song.getLyrics('Z690CWC8');


        return res.json(songly);
    }
    getSongmp3()
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
        const songly = await Nuxtify.getArtist("Jisoo");
        return res.json(songly);
    }
    getSongmp3()
}
const get100 = async (req, res) => {
    const getSongmp3 = async () => {
        const songly = await Nuxtify.getPlaylist('ZWZB96AB');
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
    get100
}



