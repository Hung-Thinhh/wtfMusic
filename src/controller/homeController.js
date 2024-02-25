const BlogPost = require('../models/modles_Test');
const  {Nuxtify}  = require ("nuxtify-api")
const handleHome = async (req, res) => {
    const getSongmp3 = async() => {
        console.log("getSongmp3")
        const url = await Nuxtify.song.getLyrics('Z6709W0Z');
        // const url = await Nuxtify.video.getDetail('Z6ZIBDE6');
        const timestamp = 1708862634884;
        const date1 = new Date(23960);

const startTime = 20500;

const timestampSeconds = Math.floor(timestamp / 1000); // Chuyển đổi timestamp thành giây

const diffSeconds = timestampSeconds - startTime; // Tính hiệu giữa timestamp và startTime

        console.log("Difference in seconds:", diffSeconds);
        const date2 = new Date(diffSeconds);
        // const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hours = date.getHours();
// const minutes = date.getMinutes();
const seconds2 = date2.getSeconds();
const seconds1 = date1.getSeconds();

// console.log("Year:", year);
// console.log("Month:", month);
// console.log("Day:", day);
// console.log("Hours:", hours);
// console.log("Minutes:", minutes);
console.log("Seconds1:", seconds1);
console.log("Seconds2:", seconds2);

console.log(date2);
        return res.json(url);
    }
    getSongmp3()

    //test database
//     BlogPost.find()
//   .then(BlogPost => {
//       return res.json(BlogPost)
//   })
//   .catch(error => {
//     return res.status(400).json({ error: error });
//   });
 
    // const user = await userService.getSongmp3()
    // return res.send(user)
}
module.exports = {
    handleHome,
    
}