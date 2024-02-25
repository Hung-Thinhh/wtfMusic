const BlogPost = require('../models/modles_Test');
const  {Nuxtify}  = require ("nuxtify-api")
const handleHome = async (req, res) => {
    const getSongmp3 = async() => {
        console.log("getSongmp3")
        const url = await Nuxtify.chart.getWeekly({
            nation: 'vn',
            week: 2,
            year: 2024,
          });
        // const url = await Nuxtify.video.getDetail('Z6ZIBDE6');
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