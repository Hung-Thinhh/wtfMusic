const { Nuxtify } = require("nuxtify-api")

const getartist = async (req, res) => {
    const getSongmp3 = async () => {
        console.log("getSongmp3")
        // const url = await Nuxtify.getArtist('Jisoo');
        const url = await Nuxtify.song.getLyrics('Z690CWC7');
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

const getsong = async (req, res) => {
    const getSongmp3 = async () => {
        console.log("getSongmp3")
        const url = await Nuxtify.song.getLyrics('Z690CWC7');
        
        // const url = await Nuxtify.video.getDetail('Z6ZIBDE6');
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
module.exports = {
    getartist,
    getsong
}