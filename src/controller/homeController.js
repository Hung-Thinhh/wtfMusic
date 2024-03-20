const BlogPost = require("../models/modles_Test");
const { Nuxtify } = require("nuxtify-api");
const handleHome = async (req, res) => {
  console.log("getSongmp3");

  const url = await Nuxtify.getHome();

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
};

const getHome = async (req, res) => {
    console.log('haha')
    const timestamp = 1710867863;
const date = new Date(timestamp * 1000);

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

    console.log(`${day}/${month}/${year} ${hours}:${minutes}:${seconds}`);
    console.log(Math.floor(Date.now() / 1000))
    await fetch("https://zingmp3.vn/api/v2/page/get/home?page=1&count=30&segments=htoppicks_age_young%2Chartisttheme_age_1824_1%2Cuser_region_taynambo%2Climit_download_50_group1%2Climit_playmode%2Cplus_price_increase_control%2Cuser_age_u35%2Cfree_user_exclude_trial_discount%2Cfree_user%2Cuser_viet_rap_trending%2Call_user_login&ctime=1710867863&version=1.10.6&sig=0b00418ef5c2a249d75c17ea9373f729cf43ebb8e8e9217f8ff57517971a91b85b91dbceafaf94d922fb7d3f6888c9a8036c96b6a0272b23e830c3c9dd338aba&apiKey=X5BM3w8N7MKozC0B85o4KMlzLZKhV00y",
        {
            headers: {
                'Cookie': 'zmp3_rqid=MHwxMjUdUngMjM1LjIzNi4xMDd8WeBnVsWeBHwxNzEwODY3OTkzNDQ3',
            
                'User-Agent': 'PostmanRuntime/7.36.3',
                'Accept':'*/*'
              },
        })
        .then(response => response.json())
        .then(data => {
          // Xử lý dữ liệu từ phản hồi
            console.log(data);
            // return data
        })
        .catch(error => {
          // Xử lý lỗi nếu có
          console.error(error);
        });
    // const haha = await home.json()
    // return res.json(haha)
    return 'hahah'


};
module.exports = {
    handleHome,
    getHome
};
