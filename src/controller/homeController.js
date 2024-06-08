
// const { Nuxtify } = require("nuxtify-api");
import  {getNewRelease,getSongHot,getSongRemix,getSongChill,getSongTop100,getAlbumHot,getSongRating,getSongSad} from "../services/home-services"




const Song = require("../models/sonng_model");
const Playlist = require("../models/playlist_model");
const Ar = require('../models/artists_model');
const Gr = require('../models/genre_model');
const { Nuxtify } = require("nuxtify-api");


const getRandomIds = (array, count) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const handleHome = async (req, res) => {
  try {
    const haha = await Nuxtify.getPlaylist('ZWZCOE6B');

    // Lấy tất cả các document từ collection
    // const documents = await Gr.find();

    // // Mảng để lưu các document trùng id
    // const duplicateDocuments = [];

    // // Kiểm tra từng document
    // documents.forEach((document, index) => {
    //   // Kiểm tra nếu document có id trùng với các document trước đó
    //   const isDuplicate = documents.slice(0, index).some((prevDocument) => prevDocument.genreId === document.genreId);
    //   if (isDuplicate) {
    //     duplicateDocuments.push(document);
    //   }
    // });

    // // Xoá các document trùng id
    // const result = await Gr.deleteMany({ _id: { $in: duplicateDocuments.map(duplicate => duplicate._id) } });

    // console.log(`${result.deletedCount} document đã được xoá.`);

    // // Tiếp tục xử lý các tác vụ khác trong hàm handleHome

    res.status(200).json(haha);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Gặp lỗi khi xoá các document không đúng định dạng." });
  }
};

const getHome = async (req, res) => {

  const newRelease = await getNewRelease();
  const songHot = await getSongHot()
  const songChill = await getSongChill();
  const songTop100 = await getSongTop100();
  const albumHot = await getAlbumHot();
  const songRating = await getSongRating();
  const songRemix = await getSongRemix();
  const songSad = await getSongSad();
    const url = 
        {
          "items": [
            {
              "sectionType": "banner",
              "viewType": "slider",
              "title": "",
              "link": "",
              "sectionId": "hSlider",
              "items": [
                {
                  "type": 4,
                  "link": "/playlist/Hot-Hits-Vietnam/67IZCUUF.html",
                  "banner": "https://photo-zmp3.zmdcdn.me/banner/c/b/a/9/cba97d45bb1364798710382164772c80.jpg",
                  "cover": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/5/6/3/e/563e9d84f6b05e1753e9c484a4097dfa.jpg",
                  "target": "1",
                  "title": "",
                  "description": "",
                  "ispr": 0,
                  "encodeId": "67IZCUUF"
                },
                {
                  "type": 4,
                  "link": "/playlist/Today-s-V-Pop-Hits/ZWZCOU98.html",
                  "banner": "https://photo-zmp3.zmdcdn.me/banner/4/2/b/e/42be71b2dcc5eb23b1fb04fd7ad8bf5a.jpg",
                  "cover": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/5/b/f/a/5bfa668b2773371bbeb73af42a7ff537.jpg",
                  "target": "1",
                  "title": "",
                  "description": "",
                  "ispr": 0,
                  "encodeId": "ZWZCOU98"
                },
                {
                  "type": 4,
                  "link": "/playlist/US-UK-Gay-Nghien/ZOD8IUEW.html",
                  "banner": "https://photo-zmp3.zmdcdn.me/banner/6/d/6/9/6d693bab998cd7c0296e13d8f33167cf.jpg",
                  "cover": "https://photo-zmp3.zmdcdn.me/default.jpg",
                  "target": "1",
                  "title": "",
                  "description": "",
                  "ispr": 0,
                  "encodeId": "ZOD8IUEW"
                }
              ]
            },
            {
              "sectionId": "hRecent",
              "title": "Gần Đây",
              "sectionType": "recentPlaylist"
            },
            {
              "sectionType": "new-release",
              "title": "Mới phát hành",
              "link": "/new-release/song",
              "items": {
                "all": [
                  {
                    "encodeId": "Z7ZUE88A",
                    "title": "Chỉ là 1, 2 câu",
                    "alias": "Chi-la-1-2-cau-Ronboogz",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Ronboogz",
                    "artists": [
                      {
                        "id": "IW7FUDFD",
                        "name": "Ronboogz",
                        "link": "/nghe-si/Ronboogz",
                        "spotlight": false,
                        "alias": "Ronboogz",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/d/8/5/4d857c8ba21bc9dcaa827f48e6742c68.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/d/8/5/4d857c8ba21bc9dcaa827f48e6742c68.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6B76UUZC"
                      }
                    ],
                    "isWorldWide": true,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/2/b/e/02be3fd5f2f80dec8ff17559c3db6e25.jpg",
                    "link": "/bai-hat/Chi-la-1-2-cau-Ronboogz/Z7ZUE88A.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/0/2/b/e/02be3fd5f2f80dec8ff17559c3db6e25.jpg",
                    "duration": 153,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710907200,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z089"
                    ],
                    "distributor": "DAO Music Entertainment",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "allowAudioAds": true
                  },
                  {
                    "encodeId": "Z7Z6EAZ7",
                    "title": "Team Side",
                    "alias": "Team-Side-Alan-Walker-Sofiloud",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Alan Walker, Sofiloud",
                    "artists": [
                      {
                        "id": "IWZA6CCW",
                        "name": "Alan Walker",
                        "link": "/Alan-Walker",
                        "spotlight": false,
                        "alias": "Alan-Walker",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/a/6/b/ba6b56ca02dd06f37693d945acfcdad9.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/b/a/6/b/ba6b56ca02dd06f37693d945acfcdad9.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZCU89E"
                      },
                      {
                        "id": "IW68CZD8",
                        "name": "Sofiloud",
                        "link": "/nghe-si/Sofiloud-IW68CZD8",
                        "spotlight": false,
                        "alias": "Sofiloud-IW68CZD8",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/a/e/6/5ae6ee31b987d76f21741d820f7cd900.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/a/e/6/5ae6ee31b987d76f21741d820f7cd900.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6BFO8W7Z"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/7/6/2/b762048a895ecc069c10cf59555a462a.jpg",
                    "link": "/bai-hat/Team-Side-Alan-Walker-Sofiloud/Z7Z6EAZ7.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/7/6/2/b762048a895ecc069c10cf59555a462a.jpg",
                    "duration": 181,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710781201,
                    "genreIds": [
                      "IWZ9Z08O",
                      "IWZ9Z09A"
                    ],
                    "distributor": "FUGA",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false
                  },
                  {
                    "encodeId": "Z7Z6I9FI",
                    "title": "Lặng Lẽ Yêu",
                    "alias": "Lang-Le-Yeu-Thuy-Chi",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Thùy Chi",
                    "artists": [
                      {
                        "id": "IWZ9Z87W",
                        "name": "Thùy Chi",
                        "link": "/Thuy-Chi",
                        "spotlight": false,
                        "alias": "Thuy-Chi",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/f/0/f/5/f0f595d415f4d0c13541209c2f3b1381.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/f/0/f/5/f0f595d415f4d0c13541209c2f3b1381.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZBBFI8"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/2/b/1/c/2b1cd38bde48d44d4ffe75d9fbb68e4a.jpg",
                    "link": "/bai-hat/Lang-Le-Yeu-Thuy-Chi/Z7Z6I9FI.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/2/b/1/c/2b1cd38bde48d44d4ffe75d9fbb68e4a.jpg",
                    "duration": 361,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710781200,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z088",
                      "IWZ97FCD"
                    ],
                    "distributor": "Universal Music Group",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": true
                  },
                  {
                    "encodeId": "Z7Z6IABC",
                    "title": "hào quang",
                    "alias": "hao-quang-De-Choat",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Dế Choắt",
                    "artists": [
                      {
                        "id": "IW6W8IBB",
                        "name": "Dế Choắt",
                        "link": "/De-Choat",
                        "spotlight": false,
                        "alias": "De-Choat",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/d/7/3/ad73b29bbe63d11709f743aaa9eee3de.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/d/7/3/ad73b29bbe63d11709f743aaa9eee3de.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "6UW9B7E8"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/1/8/3/a/183a89e06d938a6dd571ce546ed00269.jpg",
                    "link": "/bai-hat/hao-quang-De-Choat/Z7Z6IABC.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/8/3/a/183a89e06d938a6dd571ce546ed00269.jpg",
                    "duration": 213,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710781200,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z088",
                      "IWZ9Z089"
                    ],
                    "distributor": "Believe",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": true
                  },
                  {
                    "encodeId": "Z7UEE808",
                    "title": "người xink người ngố",
                    "alias": "nguoi-xink-nguoi-ngo-Tuan-Viet-Cam",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Tuấn Việt, Cầm",
                    "artists": [
                      {
                        "id": "IW8D0A7O",
                        "name": "Tuấn Việt",
                        "link": "/nghe-si/Tuan-Viet",
                        "spotlight": false,
                        "alias": "Tuan-Viet",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/8/9/9/289927348af15d353c919f4ed1aa0a46.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/8/9/9/289927348af15d353c919f4ed1aa0a46.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6C0I9IAF"
                      },
                      {
                        "id": "IW7CZIII",
                        "name": "Cầm",
                        "link": "/nghe-si/Thu-Cam",
                        "spotlight": false,
                        "alias": "Thu-Cam",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/d/d/6/edd69378f86014194145b975351e33d0.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/e/d/d/6/edd69378f86014194145b975351e33d0.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6BZW66ZO"
                      }
                    ],
                    "isWorldWide": true,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/8/f/7/58f73309f27f91fa8097bde8b39ace52.jpg",
                    "link": "/bai-hat/nguoi-xink-nguoi-ngo-Tuan-Viet-Cam/Z7UEE808.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/5/8/f/7/58f73309f27f91fa8097bde8b39ace52.jpg",
                    "duration": 192,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710766800,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "distributor": "Yin Yang Media",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "mvlink": "/video-clip/nguoi-xink-nguoi-ngo-Tuan-Viet-Cam/Z7UEE808.html",
                    "streamingStatus": 1,
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7Z6UIOO",
                    "title": "Nectar",
                    "alias": "Nectar-THE-BOYZ",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "THE BOYZ",
                    "artists": [
                      {
                        "id": "IWZFFWO7",
                        "name": "THE BOYZ",
                        "link": "/nghe-si/THE-BOYZ-KPop",
                        "spotlight": false,
                        "alias": "THE-BOYZ-KPop",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/f/4/d/b/f4dbd8f2da40f63a76b17898aeb482f2.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/f/4/d/b/f4dbd8f2da40f63a76b17898aeb482f2.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6UW9B7WF"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/d/f/0/9/df09bbdb2ea437f9632805957eb04b28.jpg",
                    "link": "/bai-hat/Nectar-THE-BOYZ/Z7Z6UIOO.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/f/0/9/df09bbdb2ea437f9632805957eb04b28.jpg",
                    "duration": 184,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710694800,
                    "genreIds": [
                      "IWZ9Z08W",
                      "IWZ9Z09O"
                    ],
                    "distributor": "Kakao Entertainment",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZUF0OC",
                    "title": "Tự Em Thương Mình",
                    "alias": "Tu-Em-Thuong-Minh-Huong-Ly",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Hương Ly",
                    "artists": [
                      {
                        "id": "IW6ZO9UB",
                        "name": "Hương Ly",
                        "link": "/Huong-Ly",
                        "spotlight": false,
                        "alias": "Huong-Ly",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/f/3/0/7f30b1a5ea13a558838d9ad09f0a1247.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/f/3/0/7f30b1a5ea13a558838d9ad09f0a1247.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZZ67898D"
                      }
                    ],
                    "isWorldWide": true,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/4/0/a/8/40a850c9056f47e54736e8a956b68650.jpg",
                    "link": "/bai-hat/Tu-Em-Thuong-Minh-Huong-Ly/Z7ZUF0OC.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/4/0/a/8/40a850c9056f47e54736e8a956b68650.jpg",
                    "duration": 325,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710507600,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "distributor": "MIXUS",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7UEF8ID",
                    "title": "+1 ngày bên em",
                    "alias": "1-ngay-ben-em-Trungg-I-U-Rum",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Trungg I.U, Rum",
                    "artists": [
                      {
                        "id": "IW6W8Z89",
                        "name": "Trungg I.U",
                        "link": "/nghe-si/Trungg-IU",
                        "spotlight": false,
                        "alias": "Trungg-IU",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/8/1/2/5812a694a557a9f8c61429214ce174b9.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/8/1/2/5812a694a557a9f8c61429214ce174b9.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6UW9B860"
                      },
                      {
                        "id": "IWZFEEUU",
                        "name": "Rum",
                        "link": "/Rum-Minh-Triet",
                        "spotlight": false,
                        "alias": "Rum-Minh-Triet",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/5/1/3/2513d20382000786aca28d0536615828.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/5/1/3/2513d20382000786aca28d0536615828.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZUO78ZU7"
                      }
                    ],
                    "isWorldWide": true,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/9/4/0/e9407bcf06e084f43a3c930260274f7a.jpg",
                    "link": "/bai-hat/1-ngay-ben-em-Trungg-I-U-Rum/Z7UEF8ID.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/9/4/0/e9407bcf06e084f43a3c930260274f7a.jpg",
                    "duration": 220,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710504000,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "distributor": "LOOPS Music",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "mvlink": "/video-clip/1-ngay-ben-em-Trungg-I-U-Rum/Z7UEF8ID.html",
                    "streamingStatus": 1,
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZUDOFD",
                    "title": "FRI(END)S",
                    "alias": "FRI-END-S-V",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "V",
                    "artists": [
                      {
                        "id": "IWZD7IAZ",
                        "name": "V",
                        "link": "/V-BTS",
                        "spotlight": false,
                        "alias": "V-BTS",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/4/3/8/8438b8afc8289f96da37a693eda1432b.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/4/3/8/8438b8afc8289f96da37a693eda1432b.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "6UW9BUBF"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/f/5/f/6f5f0d33ba64083d3150391171b0ac1d.jpg",
                    "link": "/bai-hat/FRI-END-S-V/Z7ZUDOFD.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/6/f/5/f/6f5f0d33ba64083d3150391171b0ac1d.jpg",
                    "duration": 148,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710435602,
                    "genreIds": [
                      "IWZ9Z08W"
                    ],
                    "distributor": "Ingrooves Music Group",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZI7EEF",
                    "title": "Điều Tuyệt Vời Nhất",
                    "alias": "Dieu-Tuyet-Voi-Nhat-The-Sans",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "The Sans",
                    "artists": [
                      {
                        "id": "IW8ZZ6OE",
                        "name": "The Sans",
                        "link": "/nghe-si/The-Sans-IW8ZZ6OE",
                        "spotlight": false,
                        "alias": "The-Sans-IW8ZZ6OE",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/4/5/8/74581f880887bb5d1a744293d4e287ca.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/4/5/8/74581f880887bb5d1a744293d4e287ca.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6C0IZZ8D"
                      }
                    ],
                    "isWorldWide": false,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/5/6/6/b5662f36a013a7a287ac727728e482fd.jpg",
                    "link": "/bai-hat/Dieu-Tuyet-Voi-Nhat-The-Sans/Z7ZI7EEF.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/5/6/6/b5662f36a013a7a287ac727728e482fd.jpg",
                    "duration": 325,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710435601,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z088",
                      "IWZ97FCD"
                    ],
                    "distributor": "The Orchard",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 2,
                    "streamPrivileges": [
                      2
                    ],
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZI8WD9",
                    "title": "Giọt Sương Và Chiếc Lá (From \"Lưu Hương Giang's Library\")",
                    "alias": "Giot-Suong-Va-Chiec-La-From-Luu-Huong-Giang-s-Library-Luu-Huong-Giang",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Lưu Hương Giang",
                    "artists": [
                      {
                        "id": "IWZ9ZI77",
                        "name": "Lưu Hương Giang",
                        "link": "/Luu-Huong-Giang",
                        "spotlight": false,
                        "alias": "Luu-Huong-Giang",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/8/5/c/c85c3da4be4775dedd81128b1785ebd3.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/8/5/c/c85c3da4be4775dedd81128b1785ebd3.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZOEWEZ7I"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/a/8/f/ba8fef389c63d5dc34d73e39bba01f75.jpg",
                    "link": "/bai-hat/Giot-Suong-Va-Chiec-La-From-Luu-Huong-Giang-s-Library-Luu-Huong-Giang/Z7ZI8WD9.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/a/8/f/ba8fef389c63d5dc34d73e39bba01f75.jpg",
                    "duration": 232,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710435600,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z088",
                      "IWZ97FCD"
                    ],
                    "distributor": "Believe",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZOO690",
                    "title": "No Angels",
                    "alias": "No-Angels-Justin-Timberlake",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Justin Timberlake",
                    "artists": [
                      {
                        "id": "IWZ9ZOI8",
                        "name": "Justin Timberlake",
                        "link": "/Justin-Timberlake-USUK",
                        "spotlight": false,
                        "alias": "Justin-Timberlake-USUK",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/c/1/4/ec1497514947f30d96ba6e7aadf3e8f1.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/e/c/1/4/ec1497514947f30d96ba6e7aadf3e8f1.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZ9AAEE"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/e/a/7/6ea7eb30cf007abc42a6ed1e4d7cb67e.jpg",
                    "link": "/bai-hat/No-Angels-Justin-Timberlake/Z7ZOO690.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/6/e/a/7/6ea7eb30cf007abc42a6ed1e4d7cb67e.jpg",
                    "duration": 208,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710435600,
                    "genreIds": [
                      "IWZ9Z08O",
                      "IWZ9Z097"
                    ],
                    "distributor": "Sony Music Entertainment",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 2,
                    "streamPrivileges": [
                      2
                    ],
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZO6ZZE",
                    "title": "Flowers on the Moon",
                    "alias": "Flowers-on-the-Moon-AJ-Mitchell",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "AJ Mitchell",
                    "artists": [
                      {
                        "id": "IW6W9D0W",
                        "name": "AJ Mitchell",
                        "link": "/nghe-si/AJ-Mitchell",
                        "spotlight": false,
                        "alias": "AJ-Mitchell",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/d/8/9/bd8990f9eadf59bafafc45afcd209a59.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/b/d/8/9/bd8990f9eadf59bafafc45afcd209a59.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6B7W9907"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/7/2/3/9723ab0c3132b2d056ae4e60e043d96f.jpg",
                    "link": "/bai-hat/Flowers-on-the-Moon-AJ-Mitchell/Z7ZO6ZZE.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/9/7/2/3/9723ab0c3132b2d056ae4e60e043d96f.jpg",
                    "duration": 208,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710435600,
                    "genreIds": [
                      "IWZ9Z08O",
                      "IWZ9Z097"
                    ],
                    "distributor": "Sony Music Entertainment",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 2,
                    "streamPrivileges": [
                      2
                    ],
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZU9B0F",
                    "title": "What I Am",
                    "alias": "What-I-Am-ZAYN",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "ZAYN",
                    "artists": [
                      {
                        "id": "IWZ9DC8F",
                        "name": "ZAYN",
                        "link": "/ZAYN",
                        "spotlight": false,
                        "alias": "ZAYN",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/9/2/3/1923dc469379fe11f52c2ae4f7bcf429.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/9/2/3/1923dc469379fe11f52c2ae4f7bcf429.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZOEIUOUW"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/7/c/f/77cf98ef1a111d61b37074867222a58a.jpg",
                    "link": "/bai-hat/What-I-Am-ZAYN/Z7ZU9B0F.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/7/7/c/f/77cf98ef1a111d61b37074867222a58a.jpg",
                    "duration": 211,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710435600,
                    "genreIds": [
                      "IWZ9Z08O",
                      "IWZ9ZIUO"
                    ],
                    "distributor": "Universal Music Group",
                    "indicators": [
                      "explicit"
                    ],
                    "isIndie": false,
                    "streamingStatus": 2,
                    "streamPrivileges": [
                      2
                    ],
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZI8IZZ",
                    "title": "Anh Sẽ Sớm Quên Thôi",
                    "alias": "Anh-Se-Som-Quen-Thoi-Duong-Edward",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Dương Edward",
                    "artists": [
                      {
                        "id": "IWZ97FE0",
                        "name": "Dương Edward",
                        "link": "/Duong-Edward",
                        "spotlight": false,
                        "alias": "Duong-Edward",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/d/7/4/7d741800ca3ae4cacb624fc8d2358678.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/d/7/4/7d741800ca3ae4cacb624fc8d2358678.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZODE9BDC"
                      }
                    ],
                    "isWorldWide": true,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/0/0/3/500343c00da8571f92a294a0f3da9185.jpg",
                    "link": "/bai-hat/Anh-Se-Som-Quen-Thoi-Duong-Edward/Z7ZI8IZZ.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/5/0/0/3/500343c00da8571f92a294a0f3da9185.jpg",
                    "duration": 313,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710421204,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "distributor": "LOOPS Music",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "mvlink": "/video-clip/Anh-Se-Som-Quen-Thoi-Duong-Edward/Z7ZI8IZZ.html",
                    "streamingStatus": 1,
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7UBWAFW",
                    "title": "Nhớ Mang Ô Hôm Nay",
                    "alias": "Nho-Mang-O-Hom-Nay-Jun-Pham-Hamlet-Truong",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Jun Phạm, Hamlet Trương",
                    "artists": [
                      {
                        "id": "IWZA6O8Z",
                        "name": "Jun Phạm",
                        "link": "/Jun-Pham",
                        "spotlight": false,
                        "alias": "Jun-Pham",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/d/c/5/3dc5d2cf607f32db4c7e8fba1e284b86.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/d/c/5/3dc5d2cf607f32db4c7e8fba1e284b86.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZOC9E9UU"
                      },
                      {
                        "id": "IWZ97OOZ",
                        "name": "Hamlet Trương",
                        "link": "/Hamlet-Truong",
                        "spotlight": false,
                        "alias": "Hamlet-Truong",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/9/3/4/6/9346e23f3d6a1f20f82f4420ccf12f56.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/9/3/4/6/9346e23f3d6a1f20f82f4420ccf12f56.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZAECBB"
                      }
                    ],
                    "isWorldWide": true,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/c/3/0/ec30d6775fb108a75b4a5ec3df2ff33b.jpg",
                    "link": "/bai-hat/Nho-Mang-O-Hom-Nay-Jun-Pham-Hamlet-Truong/Z7UBWAFW.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/c/3/0/ec30d6775fb108a75b4a5ec3df2ff33b.jpg",
                    "duration": 329,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710417603,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "distributor": "Yin Yang Media",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7Z6ICD8",
                    "title": "NGỒI BÀN LÀM VIỆC",
                    "alias": "NGOI-BAN-LAM-VIEC-Rtee-Teddy-Chilla-KOHI",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Rtee, Teddy Chilla, KOHI",
                    "artists": [
                      {
                        "id": "IWZAWZOU",
                        "name": "Rtee",
                        "link": "/Rtee-Rap",
                        "spotlight": false,
                        "alias": "Rtee-Rap",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/5/2/a/352af7b2f2aea408a3dea84fe60f876e.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/5/2/a/352af7b2f2aea408a3dea84fe60f876e.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZODEA67E"
                      },
                      {
                        "id": "IW7DCF76",
                        "name": "Teddy Chilla",
                        "link": "/nghe-si/Teddy-Chilla-IW7DCF76",
                        "spotlight": false,
                        "alias": "Teddy-Chilla-IW7DCF76",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/8/a/2/a8a21a54bf9fbfe22281ad9843e57b1f.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/8/a/2/a8a21a54bf9fbfe22281ad9843e57b1f.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6BFZ8WOW"
                      },
                      {
                        "id": "IW79UZF7",
                        "name": "KOHI",
                        "link": "/nghe-si/KOHI.IW79UZF7",
                        "spotlight": false,
                        "alias": "KOHI.IW79UZF7",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/a/2/7/1a27769dccc5d485f84a9b68bd666be0.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/a/2/7/1a27769dccc5d485f84a9b68bd666be0.jpg",
                        "isOA": false,
                        "isOABrand": false
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/8/e/4/b/8e4be7c290e6a04d5281707adec2e1e6.jpg",
                    "link": "/bai-hat/NGOI-BAN-LAM-VIEC-Rtee-Teddy-Chilla-KOHI/Z7Z6ICD8.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/8/e/4/b/8e4be7c290e6a04d5281707adec2e1e6.jpg",
                    "duration": 173,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710349205,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z088",
                      "IWZ9Z089"
                    ],
                    "distributor": "Believe",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": true
                  },
                  {
                    "encodeId": "Z7ZO7OIE",
                    "title": "Trào Dâng",
                    "alias": "Trao-Dang-Hoang-Ton-BeepBeepChild",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Hoàng Tôn, BeepBeepChild",
                    "artists": [
                      {
                        "id": "IWZ97ZZC",
                        "name": "Hoàng Tôn",
                        "link": "/Hoang-Ton",
                        "spotlight": false,
                        "alias": "Hoang-Ton",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/e/1/f/ee1faaf62fb8b2c2882d25bbaa6a851d.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/e/e/1/f/ee1faaf62fb8b2c2882d25bbaa6a851d.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZAC6AE"
                      },
                      {
                        "id": "IW6BZIIO",
                        "name": "BeepBeepChild",
                        "link": "/nghe-si/BeepBeepChild-IW6BZIIO",
                        "spotlight": false,
                        "alias": "BeepBeepChild-IW6BZIIO",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/3/d/1/e3d121f80c02f760cd9b87e2474dd8b6.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/e/3/d/1/e3d121f80c02f760cd9b87e2474dd8b6.jpg",
                        "isOA": false,
                        "isOABrand": false
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/8/c/0/08c02836fc0d0915efc231e81481d568.jpg",
                    "link": "/bai-hat/Trao-Dang-Hoang-Ton-BeepBeepChild/Z7ZO7OIE.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/0/8/c/0/08c02836fc0d0915efc231e81481d568.jpg",
                    "duration": 181,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710349202,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z088",
                      "IWZ9Z0C8"
                    ],
                    "distributor": "Believe",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZWFIDI",
                    "title": "Không Đáng Phải Nghĩ",
                    "alias": "Khong-Dang-Phai-Nghi-Khac-Viet",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Khắc Việt",
                    "artists": [
                      {
                        "id": "IWZ9ZB76",
                        "name": "Khắc Việt",
                        "link": "/Khac-Viet",
                        "spotlight": false,
                        "alias": "Khac-Viet",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/c/9/6/8c96fac570c9fae10a2f257026d65efa.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/c/9/6/8c96fac570c9fae10a2f257026d65efa.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZ9CFD8"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/2/b/9/7/2b97127293fd43b149c0c26f96488582.jpg",
                    "link": "/bai-hat/Khong-Dang-Phai-Nghi-Khac-Viet/Z7ZWFIDI.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/2/b/9/7/2b97127293fd43b149c0c26f96488582.jpg",
                    "duration": 235,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710349201,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z088",
                      "IWZ97FCD"
                    ],
                    "distributor": "Sony Music Entertainment",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 2,
                    "streamPrivileges": [
                      2
                    ],
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZOUOWC",
                    "title": "Been Like This",
                    "alias": "Been-Like-This-Meghan-Trainor-T-Pain",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Meghan Trainor, T-Pain",
                    "artists": [
                      {
                        "id": "IWZAW760",
                        "name": "Meghan Trainor",
                        "link": "/nghe-si/Meghan-Trainor",
                        "spotlight": false,
                        "alias": "Meghan-Trainor",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/9/9/1/b991d3e7919a4804d83a55c81aeef42d.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/b/9/9/1/b991d3e7919a4804d83a55c81aeef42d.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "ZOEWF9EI"
                      },
                      {
                        "id": "IWZ9ZOUB",
                        "name": "T-Pain",
                        "link": "/nghe-si/T-Pain.IWZ9ZOUB",
                        "spotlight": false,
                        "alias": "T-Pain.IWZ9ZOUB",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/4/647691ca57cb89c63b2b7c5f9a6c8277_1335091051.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/6/4/647691ca57cb89c63b2b7c5f9a6c8277_1335091051.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6UAEWECW"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/5/a/8/b5a8c9e27c9a5d00294fed1c2fc25f1d.jpg",
                    "link": "/bai-hat/Been-Like-This-Meghan-Trainor-T-Pain/Z7ZOUOWC.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/5/a/8/b5a8c9e27c9a5d00294fed1c2fc25f1d.jpg",
                    "duration": 146,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710349200,
                    "genreIds": [
                      "IWZ9Z08O",
                      "IWZ9Z097"
                    ],
                    "distributor": "Sony Music Entertainment",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 2,
                    "streamPrivileges": [
                      2
                    ],
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZIEIWZ",
                    "title": "Wish You Hell",
                    "alias": "Wish-You-Hell-WENDY",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "WENDY",
                    "artists": [
                      {
                        "id": "IWZ9ZFFU",
                        "name": "WENDY",
                        "link": "/nghe-si/Wendy-KPOP",
                        "spotlight": false,
                        "alias": "Wendy-KPOP",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/f/e/8/1fe8458cc632af49c71f320d8bf436bb.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/f/e/8/1fe8458cc632af49c71f320d8bf436bb.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6UW99UO9"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/5/f/e/65fe4890e6ea9137b34c75b0c82ae3fc.jpg",
                    "link": "/bai-hat/Wish-You-Hell-WENDY/Z7ZIEIWZ.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/6/5/f/e/65fe4890e6ea9137b34c75b0c82ae3fc.jpg",
                    "duration": 170,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710176400,
                    "genreIds": [
                      "IWZ9Z08W",
                      "IWZ9Z09W"
                    ],
                    "distributor": "FUGA",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZWFAUU",
                    "title": "EENIE MEENIE (Feat. Hongjoong of ATEEZ)",
                    "alias": "EENIE-MEENIE-Feat-Hongjoong-of-ATEEZ-CHUNG-HA-Hongjoong-of-ATEEZ",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "CHUNG HA, Hongjoong of ATEEZ",
                    "artists": [
                      {
                        "id": "IWZFDOW6",
                        "name": "CHUNG HA",
                        "link": "/Chung-Ha",
                        "spotlight": false,
                        "alias": "Chung-Ha",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/d/1/5/dd150a1a2f3649ad3abd6e0cdb830622.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/d/1/5/dd150a1a2f3649ad3abd6e0cdb830622.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZOEUZ6ZD"
                      },
                      {
                        "id": "IW8CE7F8",
                        "name": "Hongjoong of ATEEZ",
                        "link": "/nghe-si/Hongjoong-of-ATEEZ-IW8CE7F8",
                        "spotlight": false,
                        "alias": "Hongjoong-of-ATEEZ-IW8CE7F8",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/7/3/9/77392df45dbc26d1e0755b739b1b260d.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/7/3/9/77392df45dbc26d1e0755b739b1b260d.jpg",
                        "isOA": false,
                        "isOABrand": false
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/d/b/5/5db5e9c127ec9ff11593e4ff0fec10c5.jpg",
                    "link": "/bai-hat/EENIE-MEENIE-Feat-Hongjoong-of-ATEEZ-CHUNG-HA-Hongjoong-of-ATEEZ/Z7ZWFAUU.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/5/d/b/5/5db5e9c127ec9ff11593e4ff0fec10c5.jpg",
                    "duration": 170,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710090002,
                    "genreIds": [
                      "IWZ9Z08W",
                      "IWZ9Z09O"
                    ],
                    "distributor": "Kakao Entertainment",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7UFAA0F",
                    "title": "LIGHTHOUSE",
                    "alias": "LIGHTHOUSE-TEMPEST",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "TEMPEST",
                    "artists": [
                      {
                        "id": "IW66BDBE",
                        "name": "TEMPEST",
                        "link": "/nghe-si/Tempest-IW66BDBE",
                        "spotlight": false,
                        "alias": "Tempest-IW66BDBE",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/e/9/7/7e974574852766ad02ada1b5b10c8260.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/e/9/7/7e974574852766ad02ada1b5b10c8260.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6B7WAW7E"
                      }
                    ],
                    "isWorldWide": false,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/3/a/4/f3a4491155142e0832ce11335a44fe2f.jpg",
                    "link": "/bai-hat/LIGHTHOUSE-TEMPEST/Z7UFAA0F.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/3/a/4/f3a4491155142e0832ce11335a44fe2f.jpg",
                    "duration": 206,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710090000,
                    "genreIds": [
                      "IWZ9Z08W"
                    ],
                    "distributor": "Ingrooves Music Group",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZWZ780",
                    "title": "supernatural",
                    "alias": "supernatural-Ariana-Grande-Troye-Sivan",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Ariana Grande, Troye Sivan",
                    "artists": [
                      {
                        "id": "IWZ98ABB",
                        "name": "Ariana Grande",
                        "link": "/nghe-si/Ariana-Grande",
                        "spotlight": false,
                        "alias": "Ariana-Grande",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/b/a/8/cba8282bb865166714a7ae77fab322d8.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/b/a/8/cba8282bb865166714a7ae77fab322d8.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "ZWZCZICU"
                      },
                      {
                        "id": "IWZAWD00",
                        "name": "Troye Sivan",
                        "link": "/nghe-si/Troye-Sivan",
                        "spotlight": false,
                        "alias": "Troye-Sivan",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/2/4/e/524e69bd5a76ed11bb7cc1c4563ae189.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/2/4/e/524e69bd5a76ed11bb7cc1c4563ae189.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "ZOEWEZO0"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/3/9/0/5390d6f4b4cbab3604eb4e2c3e2650c8.jpg",
                    "link": "/bai-hat/supernatural-Ariana-Grande-Troye-Sivan/Z7ZWZ780.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/5/3/9/0/5390d6f4b4cbab3604eb4e2c3e2650c8.jpg",
                    "duration": 163,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710090000,
                    "genreIds": [
                      "IWZ9Z08O",
                      "IWZ9Z097"
                    ],
                    "distributor": "Universal Music Group",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 2,
                    "streamPrivileges": [
                      2
                    ],
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7UBE6ID",
                    "title": "Chẳng Sao Cả",
                    "alias": "Chang-Sao-Ca-Cao-Thai-Son-Dong-Thien-Duc",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Cao Thái Sơn, Đông Thiên Đức",
                    "artists": [
                      {
                        "id": "IWZ9Z09D",
                        "name": "Cao Thái Sơn",
                        "link": "/Cao-Thai-Son",
                        "spotlight": false,
                        "alias": "Cao-Thai-Son",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/8/5/9/a8591e9fd1c6711f6d0b6b371862cf0a.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/8/5/9/a8591e9fd1c6711f6d0b6b371862cf0a.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZ9A8CI"
                      },
                      {
                        "id": "IWZ976Z7",
                        "name": "Đông Thiên Đức",
                        "link": "/nghe-si/Dong-Thien-Duc",
                        "spotlight": false,
                        "alias": "Dong-Thien-Duc",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/8/1/6/8816636cac9cd7824b6625c5139459e3.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/8/1/6/8816636cac9cd7824b6625c5139459e3.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6UW99DWW"
                      }
                    ],
                    "isWorldWide": true,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/banner/2/f/5/3/2f536cc839823cc568fecb0a63072d8e.jpg",
                    "link": "/bai-hat/Chang-Sao-Ca-Cao-Thai-Son-Dong-Thien-Duc/Z7UBE6ID.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/banner/2/f/5/3/2f536cc839823cc568fecb0a63072d8e.jpg",
                    "duration": 336,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1709902800,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "distributor": "MIXUS",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7Z0DCU9",
                    "title": "Nâng Chén Tiêu Sầu",
                    "alias": "Nang-Chen-Tieu-Sau-Bich-Phuong",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Bích Phương",
                    "artists": [
                      {
                        "id": "IWZ96C86",
                        "name": "Bích Phương",
                        "link": "/Bich-Phuong",
                        "spotlight": false,
                        "alias": "Bich-Phuong",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/e/7/3/7e736bd660db22b75110df5605c180fe.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/e/7/3/7e736bd660db22b75110df5605c180fe.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZADD7O"
                      }
                    ],
                    "isWorldWide": true,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/d/1/e/d/d1ede336883f38e8a4081f18731202ec.jpg",
                    "link": "/bai-hat/Nang-Chen-Tieu-Sau-Bich-Phuong/Z7Z0DCU9.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/1/e/d/d1ede336883f38e8a4081f18731202ec.jpg",
                    "duration": 185,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1709830803,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "distributor": "Yin Yang Media",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZI77CF",
                    "title": "we can't be friends (wait for your love)",
                    "alias": "we-can-t-be-friends-wait-for-your-love-Ariana-Grande",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Ariana Grande",
                    "artists": [
                      {
                        "id": "IWZ98ABB",
                        "name": "Ariana Grande",
                        "link": "/nghe-si/Ariana-Grande",
                        "spotlight": false,
                        "alias": "Ariana-Grande",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/b/a/8/cba8282bb865166714a7ae77fab322d8.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/b/a/8/cba8282bb865166714a7ae77fab322d8.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "ZWZCZICU"
                      }
                    ],
                    "isWorldWide": false,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/a/d/e/fade7f1741b9c39ba39d3175fe2a4a88.jpg",
                    "link": "/bai-hat/we-can-t-be-friends-wait-for-your-love-Ariana-Grande/Z7ZI77CF.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/a/d/e/fade7f1741b9c39ba39d3175fe2a4a88.jpg",
                    "duration": 229,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1709830802,
                    "genreIds": [
                      "IWZ9Z08O",
                      "IWZ9Z097"
                    ],
                    "distributor": "Universal Music Group",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "mvlink": "/video-clip/we-can-t-be-friends-wait-for-your-love-Ariana-Grande/Z7ZI77CF.html",
                    "streamingStatus": 2,
                    "streamPrivileges": [
                      2
                    ],
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7Z0BA7W",
                    "title": "Không Thể Say (Live Band Version)",
                    "alias": "Khong-The-Say-Live-Band-Version-HIEUTHUHAI",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "HIEUTHUHAI",
                    "artists": [
                      {
                        "id": "IW6ZZ690",
                        "name": "HIEUTHUHAI",
                        "link": "/nghe-si/HIEUTHUHAI",
                        "spotlight": false,
                        "alias": "HIEUTHUHAI",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/2/a/1/c2a154106353063625c9412ed20443a0.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/2/a/1/c2a154106353063625c9412ed20443a0.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6UW9BFUW"
                      }
                    ],
                    "isWorldWide": false,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/d/5/d/9d5d27e9c38bf48be039a5f00448685a.jpg",
                    "link": "/bai-hat/Khong-The-Say-Live-Band-Version-HIEUTHUHAI/Z7Z0BA7W.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/9/d/5/d/9d5d27e9c38bf48be039a5f00448685a.jpg",
                    "duration": 188,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1709830801,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z088",
                      "IWZ97FCD"
                    ],
                    "distributor": "Ingrooves Music Group",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": true,
                    "hasLyric": true
                  }
                ],
                "vPop": [
                  {
                    "encodeId": "Z7ZUE88A",
                    "title": "Chỉ là 1, 2 câu",
                    "alias": "Chi-la-1-2-cau-Ronboogz",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Ronboogz",
                    "artists": [
                      {
                        "id": "IW7FUDFD",
                        "name": "Ronboogz",
                        "link": "/nghe-si/Ronboogz",
                        "spotlight": false,
                        "alias": "Ronboogz",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/d/8/5/4d857c8ba21bc9dcaa827f48e6742c68.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/d/8/5/4d857c8ba21bc9dcaa827f48e6742c68.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6B76UUZC"
                      }
                    ],
                    "isWorldWide": true,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/2/b/e/02be3fd5f2f80dec8ff17559c3db6e25.jpg",
                    "link": "/bai-hat/Chi-la-1-2-cau-Ronboogz/Z7ZUE88A.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/0/2/b/e/02be3fd5f2f80dec8ff17559c3db6e25.jpg",
                    "duration": 153,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710907200,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z089"
                    ],
                    "distributor": "DAO Music Entertainment",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "allowAudioAds": true
                  },
                  {
                    "encodeId": "Z7Z6I9FI",
                    "title": "Lặng Lẽ Yêu",
                    "alias": "Lang-Le-Yeu-Thuy-Chi",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Thùy Chi",
                    "artists": [
                      {
                        "id": "IWZ9Z87W",
                        "name": "Thùy Chi",
                        "link": "/Thuy-Chi",
                        "spotlight": false,
                        "alias": "Thuy-Chi",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/f/0/f/5/f0f595d415f4d0c13541209c2f3b1381.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/f/0/f/5/f0f595d415f4d0c13541209c2f3b1381.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZBBFI8"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/2/b/1/c/2b1cd38bde48d44d4ffe75d9fbb68e4a.jpg",
                    "link": "/bai-hat/Lang-Le-Yeu-Thuy-Chi/Z7Z6I9FI.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/2/b/1/c/2b1cd38bde48d44d4ffe75d9fbb68e4a.jpg",
                    "duration": 361,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710781200,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z088",
                      "IWZ97FCD"
                    ],
                    "distributor": "Universal Music Group",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": true
                  },
                  {
                    "encodeId": "Z7Z6IABC",
                    "title": "hào quang",
                    "alias": "hao-quang-De-Choat",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Dế Choắt",
                    "artists": [
                      {
                        "id": "IW6W8IBB",
                        "name": "Dế Choắt",
                        "link": "/De-Choat",
                        "spotlight": false,
                        "alias": "De-Choat",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/d/7/3/ad73b29bbe63d11709f743aaa9eee3de.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/d/7/3/ad73b29bbe63d11709f743aaa9eee3de.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "6UW9B7E8"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/1/8/3/a/183a89e06d938a6dd571ce546ed00269.jpg",
                    "link": "/bai-hat/hao-quang-De-Choat/Z7Z6IABC.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/8/3/a/183a89e06d938a6dd571ce546ed00269.jpg",
                    "duration": 213,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710781200,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z088",
                      "IWZ9Z089"
                    ],
                    "distributor": "Believe",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": true
                  },
                  {
                    "encodeId": "Z7UEE808",
                    "title": "người xink người ngố",
                    "alias": "nguoi-xink-nguoi-ngo-Tuan-Viet-Cam",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Tuấn Việt, Cầm",
                    "artists": [
                      {
                        "id": "IW8D0A7O",
                        "name": "Tuấn Việt",
                        "link": "/nghe-si/Tuan-Viet",
                        "spotlight": false,
                        "alias": "Tuan-Viet",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/8/9/9/289927348af15d353c919f4ed1aa0a46.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/8/9/9/289927348af15d353c919f4ed1aa0a46.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6C0I9IAF"
                      },
                      {
                        "id": "IW7CZIII",
                        "name": "Cầm",
                        "link": "/nghe-si/Thu-Cam",
                        "spotlight": false,
                        "alias": "Thu-Cam",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/d/d/6/edd69378f86014194145b975351e33d0.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/e/d/d/6/edd69378f86014194145b975351e33d0.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6BZW66ZO"
                      }
                    ],
                    "isWorldWide": true,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/8/f/7/58f73309f27f91fa8097bde8b39ace52.jpg",
                    "link": "/bai-hat/nguoi-xink-nguoi-ngo-Tuan-Viet-Cam/Z7UEE808.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/5/8/f/7/58f73309f27f91fa8097bde8b39ace52.jpg",
                    "duration": 192,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710766800,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "distributor": "Yin Yang Media",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "mvlink": "/video-clip/nguoi-xink-nguoi-ngo-Tuan-Viet-Cam/Z7UEE808.html",
                    "streamingStatus": 1,
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZUF0OC",
                    "title": "Tự Em Thương Mình",
                    "alias": "Tu-Em-Thuong-Minh-Huong-Ly",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Hương Ly",
                    "artists": [
                      {
                        "id": "IW6ZO9UB",
                        "name": "Hương Ly",
                        "link": "/Huong-Ly",
                        "spotlight": false,
                        "alias": "Huong-Ly",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/f/3/0/7f30b1a5ea13a558838d9ad09f0a1247.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/f/3/0/7f30b1a5ea13a558838d9ad09f0a1247.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZZ67898D"
                      }
                    ],
                    "isWorldWide": true,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/4/0/a/8/40a850c9056f47e54736e8a956b68650.jpg",
                    "link": "/bai-hat/Tu-Em-Thuong-Minh-Huong-Ly/Z7ZUF0OC.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/4/0/a/8/40a850c9056f47e54736e8a956b68650.jpg",
                    "duration": 325,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710507600,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "distributor": "MIXUS",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7UEF8ID",
                    "title": "+1 ngày bên em",
                    "alias": "1-ngay-ben-em-Trungg-I-U-Rum",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Trungg I.U, Rum",
                    "artists": [
                      {
                        "id": "IW6W8Z89",
                        "name": "Trungg I.U",
                        "link": "/nghe-si/Trungg-IU",
                        "spotlight": false,
                        "alias": "Trungg-IU",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/8/1/2/5812a694a557a9f8c61429214ce174b9.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/8/1/2/5812a694a557a9f8c61429214ce174b9.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6UW9B860"
                      },
                      {
                        "id": "IWZFEEUU",
                        "name": "Rum",
                        "link": "/Rum-Minh-Triet",
                        "spotlight": false,
                        "alias": "Rum-Minh-Triet",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/5/1/3/2513d20382000786aca28d0536615828.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/5/1/3/2513d20382000786aca28d0536615828.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZUO78ZU7"
                      }
                    ],
                    "isWorldWide": true,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/9/4/0/e9407bcf06e084f43a3c930260274f7a.jpg",
                    "link": "/bai-hat/1-ngay-ben-em-Trungg-I-U-Rum/Z7UEF8ID.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/9/4/0/e9407bcf06e084f43a3c930260274f7a.jpg",
                    "duration": 220,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710504000,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "distributor": "LOOPS Music",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "mvlink": "/video-clip/1-ngay-ben-em-Trungg-I-U-Rum/Z7UEF8ID.html",
                    "streamingStatus": 1,
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZI7EEF",
                    "title": "Điều Tuyệt Vời Nhất",
                    "alias": "Dieu-Tuyet-Voi-Nhat-The-Sans",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "The Sans",
                    "artists": [
                      {
                        "id": "IW8ZZ6OE",
                        "name": "The Sans",
                        "link": "/nghe-si/The-Sans-IW8ZZ6OE",
                        "spotlight": false,
                        "alias": "The-Sans-IW8ZZ6OE",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/4/5/8/74581f880887bb5d1a744293d4e287ca.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/4/5/8/74581f880887bb5d1a744293d4e287ca.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6C0IZZ8D"
                      }
                    ],
                    "isWorldWide": false,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/5/6/6/b5662f36a013a7a287ac727728e482fd.jpg",
                    "link": "/bai-hat/Dieu-Tuyet-Voi-Nhat-The-Sans/Z7ZI7EEF.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/5/6/6/b5662f36a013a7a287ac727728e482fd.jpg",
                    "duration": 325,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710435601,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z088",
                      "IWZ97FCD"
                    ],
                    "distributor": "The Orchard",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 2,
                    "streamPrivileges": [
                      2
                    ],
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZI8WD9",
                    "title": "Giọt Sương Và Chiếc Lá (From \"Lưu Hương Giang's Library\")",
                    "alias": "Giot-Suong-Va-Chiec-La-From-Luu-Huong-Giang-s-Library-Luu-Huong-Giang",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Lưu Hương Giang",
                    "artists": [
                      {
                        "id": "IWZ9ZI77",
                        "name": "Lưu Hương Giang",
                        "link": "/Luu-Huong-Giang",
                        "spotlight": false,
                        "alias": "Luu-Huong-Giang",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/8/5/c/c85c3da4be4775dedd81128b1785ebd3.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/8/5/c/c85c3da4be4775dedd81128b1785ebd3.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZOEWEZ7I"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/a/8/f/ba8fef389c63d5dc34d73e39bba01f75.jpg",
                    "link": "/bai-hat/Giot-Suong-Va-Chiec-La-From-Luu-Huong-Giang-s-Library-Luu-Huong-Giang/Z7ZI8WD9.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/a/8/f/ba8fef389c63d5dc34d73e39bba01f75.jpg",
                    "duration": 232,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710435600,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z088",
                      "IWZ97FCD"
                    ],
                    "distributor": "Believe",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZI8IZZ",
                    "title": "Anh Sẽ Sớm Quên Thôi",
                    "alias": "Anh-Se-Som-Quen-Thoi-Duong-Edward",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Dương Edward",
                    "artists": [
                      {
                        "id": "IWZ97FE0",
                        "name": "Dương Edward",
                        "link": "/Duong-Edward",
                        "spotlight": false,
                        "alias": "Duong-Edward",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/d/7/4/7d741800ca3ae4cacb624fc8d2358678.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/d/7/4/7d741800ca3ae4cacb624fc8d2358678.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZODE9BDC"
                      }
                    ],
                    "isWorldWide": true,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/0/0/3/500343c00da8571f92a294a0f3da9185.jpg",
                    "link": "/bai-hat/Anh-Se-Som-Quen-Thoi-Duong-Edward/Z7ZI8IZZ.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/5/0/0/3/500343c00da8571f92a294a0f3da9185.jpg",
                    "duration": 313,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710421204,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "distributor": "LOOPS Music",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "mvlink": "/video-clip/Anh-Se-Som-Quen-Thoi-Duong-Edward/Z7ZI8IZZ.html",
                    "streamingStatus": 1,
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7UBWAFW",
                    "title": "Nhớ Mang Ô Hôm Nay",
                    "alias": "Nho-Mang-O-Hom-Nay-Jun-Pham-Hamlet-Truong",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Jun Phạm, Hamlet Trương",
                    "artists": [
                      {
                        "id": "IWZA6O8Z",
                        "name": "Jun Phạm",
                        "link": "/Jun-Pham",
                        "spotlight": false,
                        "alias": "Jun-Pham",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/d/c/5/3dc5d2cf607f32db4c7e8fba1e284b86.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/d/c/5/3dc5d2cf607f32db4c7e8fba1e284b86.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZOC9E9UU"
                      },
                      {
                        "id": "IWZ97OOZ",
                        "name": "Hamlet Trương",
                        "link": "/Hamlet-Truong",
                        "spotlight": false,
                        "alias": "Hamlet-Truong",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/9/3/4/6/9346e23f3d6a1f20f82f4420ccf12f56.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/9/3/4/6/9346e23f3d6a1f20f82f4420ccf12f56.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZAECBB"
                      }
                    ],
                    "isWorldWide": true,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/c/3/0/ec30d6775fb108a75b4a5ec3df2ff33b.jpg",
                    "link": "/bai-hat/Nho-Mang-O-Hom-Nay-Jun-Pham-Hamlet-Truong/Z7UBWAFW.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/c/3/0/ec30d6775fb108a75b4a5ec3df2ff33b.jpg",
                    "duration": 329,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710417603,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "distributor": "Yin Yang Media",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7Z6ICD8",
                    "title": "NGỒI BÀN LÀM VIỆC",
                    "alias": "NGOI-BAN-LAM-VIEC-Rtee-Teddy-Chilla-KOHI",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Rtee, Teddy Chilla, KOHI",
                    "artists": [
                      {
                        "id": "IWZAWZOU",
                        "name": "Rtee",
                        "link": "/Rtee-Rap",
                        "spotlight": false,
                        "alias": "Rtee-Rap",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/5/2/a/352af7b2f2aea408a3dea84fe60f876e.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/5/2/a/352af7b2f2aea408a3dea84fe60f876e.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZODEA67E"
                      },
                      {
                        "id": "IW7DCF76",
                        "name": "Teddy Chilla",
                        "link": "/nghe-si/Teddy-Chilla-IW7DCF76",
                        "spotlight": false,
                        "alias": "Teddy-Chilla-IW7DCF76",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/8/a/2/a8a21a54bf9fbfe22281ad9843e57b1f.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/8/a/2/a8a21a54bf9fbfe22281ad9843e57b1f.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6BFZ8WOW"
                      },
                      {
                        "id": "IW79UZF7",
                        "name": "KOHI",
                        "link": "/nghe-si/KOHI.IW79UZF7",
                        "spotlight": false,
                        "alias": "KOHI.IW79UZF7",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/a/2/7/1a27769dccc5d485f84a9b68bd666be0.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/a/2/7/1a27769dccc5d485f84a9b68bd666be0.jpg",
                        "isOA": false,
                        "isOABrand": false
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/8/e/4/b/8e4be7c290e6a04d5281707adec2e1e6.jpg",
                    "link": "/bai-hat/NGOI-BAN-LAM-VIEC-Rtee-Teddy-Chilla-KOHI/Z7Z6ICD8.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/8/e/4/b/8e4be7c290e6a04d5281707adec2e1e6.jpg",
                    "duration": 173,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710349205,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z088",
                      "IWZ9Z089"
                    ],
                    "distributor": "Believe",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": true
                  },
                  {
                    "encodeId": "Z7ZO7OIE",
                    "title": "Trào Dâng",
                    "alias": "Trao-Dang-Hoang-Ton-BeepBeepChild",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Hoàng Tôn, BeepBeepChild",
                    "artists": [
                      {
                        "id": "IWZ97ZZC",
                        "name": "Hoàng Tôn",
                        "link": "/Hoang-Ton",
                        "spotlight": false,
                        "alias": "Hoang-Ton",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/e/1/f/ee1faaf62fb8b2c2882d25bbaa6a851d.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/e/e/1/f/ee1faaf62fb8b2c2882d25bbaa6a851d.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZAC6AE"
                      },
                      {
                        "id": "IW6BZIIO",
                        "name": "BeepBeepChild",
                        "link": "/nghe-si/BeepBeepChild-IW6BZIIO",
                        "spotlight": false,
                        "alias": "BeepBeepChild-IW6BZIIO",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/3/d/1/e3d121f80c02f760cd9b87e2474dd8b6.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/e/3/d/1/e3d121f80c02f760cd9b87e2474dd8b6.jpg",
                        "isOA": false,
                        "isOABrand": false
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/8/c/0/08c02836fc0d0915efc231e81481d568.jpg",
                    "link": "/bai-hat/Trao-Dang-Hoang-Ton-BeepBeepChild/Z7ZO7OIE.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/0/8/c/0/08c02836fc0d0915efc231e81481d568.jpg",
                    "duration": 181,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710349202,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z088",
                      "IWZ9Z0C8"
                    ],
                    "distributor": "Believe",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZWFIDI",
                    "title": "Không Đáng Phải Nghĩ",
                    "alias": "Khong-Dang-Phai-Nghi-Khac-Viet",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Khắc Việt",
                    "artists": [
                      {
                        "id": "IWZ9ZB76",
                        "name": "Khắc Việt",
                        "link": "/Khac-Viet",
                        "spotlight": false,
                        "alias": "Khac-Viet",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/c/9/6/8c96fac570c9fae10a2f257026d65efa.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/c/9/6/8c96fac570c9fae10a2f257026d65efa.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZ9CFD8"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/2/b/9/7/2b97127293fd43b149c0c26f96488582.jpg",
                    "link": "/bai-hat/Khong-Dang-Phai-Nghi-Khac-Viet/Z7ZWFIDI.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/2/b/9/7/2b97127293fd43b149c0c26f96488582.jpg",
                    "duration": 235,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710349201,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z088",
                      "IWZ97FCD"
                    ],
                    "distributor": "Sony Music Entertainment",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 2,
                    "streamPrivileges": [
                      2
                    ],
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7UBE6ID",
                    "title": "Chẳng Sao Cả",
                    "alias": "Chang-Sao-Ca-Cao-Thai-Son-Dong-Thien-Duc",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Cao Thái Sơn, Đông Thiên Đức",
                    "artists": [
                      {
                        "id": "IWZ9Z09D",
                        "name": "Cao Thái Sơn",
                        "link": "/Cao-Thai-Son",
                        "spotlight": false,
                        "alias": "Cao-Thai-Son",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/8/5/9/a8591e9fd1c6711f6d0b6b371862cf0a.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/8/5/9/a8591e9fd1c6711f6d0b6b371862cf0a.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZ9A8CI"
                      },
                      {
                        "id": "IWZ976Z7",
                        "name": "Đông Thiên Đức",
                        "link": "/nghe-si/Dong-Thien-Duc",
                        "spotlight": false,
                        "alias": "Dong-Thien-Duc",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/8/1/6/8816636cac9cd7824b6625c5139459e3.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/8/1/6/8816636cac9cd7824b6625c5139459e3.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6UW99DWW"
                      }
                    ],
                    "isWorldWide": true,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/banner/2/f/5/3/2f536cc839823cc568fecb0a63072d8e.jpg",
                    "link": "/bai-hat/Chang-Sao-Ca-Cao-Thai-Son-Dong-Thien-Duc/Z7UBE6ID.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/banner/2/f/5/3/2f536cc839823cc568fecb0a63072d8e.jpg",
                    "duration": 336,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1709902800,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "distributor": "MIXUS",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7Z0DCU9",
                    "title": "Nâng Chén Tiêu Sầu",
                    "alias": "Nang-Chen-Tieu-Sau-Bich-Phuong",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Bích Phương",
                    "artists": [
                      {
                        "id": "IWZ96C86",
                        "name": "Bích Phương",
                        "link": "/Bich-Phuong",
                        "spotlight": false,
                        "alias": "Bich-Phuong",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/e/7/3/7e736bd660db22b75110df5605c180fe.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/e/7/3/7e736bd660db22b75110df5605c180fe.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZADD7O"
                      }
                    ],
                    "isWorldWide": true,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/d/1/e/d/d1ede336883f38e8a4081f18731202ec.jpg",
                    "link": "/bai-hat/Nang-Chen-Tieu-Sau-Bich-Phuong/Z7Z0DCU9.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/1/e/d/d1ede336883f38e8a4081f18731202ec.jpg",
                    "duration": 185,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1709830803,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "distributor": "Yin Yang Media",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7Z0BA7W",
                    "title": "Không Thể Say (Live Band Version)",
                    "alias": "Khong-The-Say-Live-Band-Version-HIEUTHUHAI",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "HIEUTHUHAI",
                    "artists": [
                      {
                        "id": "IW6ZZ690",
                        "name": "HIEUTHUHAI",
                        "link": "/nghe-si/HIEUTHUHAI",
                        "spotlight": false,
                        "alias": "HIEUTHUHAI",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/2/a/1/c2a154106353063625c9412ed20443a0.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/2/a/1/c2a154106353063625c9412ed20443a0.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6UW9BFUW"
                      }
                    ],
                    "isWorldWide": false,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/d/5/d/9d5d27e9c38bf48be039a5f00448685a.jpg",
                    "link": "/bai-hat/Khong-The-Say-Live-Band-Version-HIEUTHUHAI/Z7Z0BA7W.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/9/d/5/d/9d5d27e9c38bf48be039a5f00448685a.jpg",
                    "duration": 188,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1709830801,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z088",
                      "IWZ97FCD"
                    ],
                    "distributor": "Ingrooves Music Group",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7UABUW8",
                    "title": "Yêu Em 2 Ngày",
                    "alias": "Yeu-Em-2-Ngay-Duong-Domic",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Dương Domic",
                    "artists": [
                      {
                        "id": "IW76C8FU",
                        "name": "Dương Domic",
                        "link": "/nghe-si/Duong-Domic",
                        "spotlight": false,
                        "alias": "Duong-Domic",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/e/8/f/2e8f578a2b1a1d9814d0fc8ed3b95649.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/e/8/f/2e8f578a2b1a1d9814d0fc8ed3b95649.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "69DDA9WC"
                      }
                    ],
                    "isWorldWide": true,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/a/f/1/5/af152de4001ed5ef4e90e45041c29a90.jpg",
                    "link": "/bai-hat/Yeu-Em-2-Ngay-Duong-Domic/Z7UABUW8.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/f/1/5/af152de4001ed5ef4e90e45041c29a90.jpg",
                    "duration": 224,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1709830800,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "distributor": "DAO Music Entertainment",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7UCU66W",
                    "title": "Dâu Thiên Hạ",
                    "alias": "Dau-Thien-Ha-Suboi",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Suboi",
                    "artists": [
                      {
                        "id": "IWZ9Z6U9",
                        "name": "Suboi",
                        "link": "/Suboi",
                        "spotlight": false,
                        "alias": "Suboi",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/5/5/3/1553186bf93e8126bd434db04bb3ce47.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/5/5/3/1553186bf93e8126bd434db04bb3ce47.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZ9EW7W"
                      }
                    ],
                    "isWorldWide": false,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/5/d/0/75d0fa45367c44520e623c205215d133.jpg",
                    "link": "/bai-hat/Dau-Thien-Ha-Suboi/Z7UCU66W.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/7/5/d/0/75d0fa45367c44520e623c205215d133.jpg",
                    "duration": 169,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1709830800,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z088",
                      "IWZ9Z089"
                    ],
                    "distributor": "Believe",
                    "indicators": [
                      "explicit"
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7Z0U808",
                    "title": "Đỏ Là Dấu Ấn",
                    "alias": "Do-La-Dau-An-Orange-Liu-Grace",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Orange, Liu Grace",
                    "artists": [
                      {
                        "id": "IWZFFWB7",
                        "name": "Orange",
                        "link": "/Orange",
                        "spotlight": false,
                        "alias": "Orange",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/1/6/3/0163e5f6bc297ea051e3efacd27ac7d7.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/0/1/6/3/0163e5f6bc297ea051e3efacd27ac7d7.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZUO78ZO7"
                      },
                      {
                        "id": "IW780UEC",
                        "name": "Liu Grace",
                        "link": "/nghe-si/Liu-Grace",
                        "spotlight": false,
                        "alias": "Liu-Grace",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/b/5/6/6b5605c32423944da2e52bb7a1f28eea.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/6/b/5/6/6b5605c32423944da2e52bb7a1f28eea.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6BW6809O"
                      }
                    ],
                    "isWorldWide": false,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/2/4/e/724eb935b9a068b07f17c72e39241d95.jpg",
                    "link": "/bai-hat/Do-La-Dau-An-Orange-Liu-Grace/Z7Z0U808.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/7/2/4/e/724eb935b9a068b07f17c72e39241d95.jpg",
                    "duration": 245,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1709830800,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z088",
                      "IWZ97FCD"
                    ],
                    "distributor": "Believe",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7UEE7FE",
                    "title": "trốn tìm",
                    "alias": "tron-tim-Sweet-Liquor",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Sweet Liquor",
                    "artists": [
                      {
                        "id": "IW77WWBD",
                        "name": "Sweet Liquor",
                        "link": "/nghe-si/Sweet-Liquor",
                        "spotlight": false,
                        "alias": "Sweet-Liquor",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/c/7/4/8c74cdafbbe3959f90259280d67a3c87.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/c/7/4/8c74cdafbbe3959f90259280d67a3c87.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6AC870IO"
                      }
                    ],
                    "isWorldWide": true,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/8/8/8/98884ebb849c593d5e29ee81deda2a17.jpg",
                    "link": "/bai-hat/tron-tim-Sweet-Liquor/Z7UEE7FE.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/9/8/8/8/98884ebb849c593d5e29ee81deda2a17.jpg",
                    "duration": 206,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1709816402,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z0C8"
                    ],
                    "distributor": "DAO Music Entertainment",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7UF8F0W",
                    "title": "Say",
                    "alias": "Say-Hoang-Ton-BeepBeepChild",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Hoàng Tôn, BeepBeepChild",
                    "artists": [
                      {
                        "id": "IWZ97ZZC",
                        "name": "Hoàng Tôn",
                        "link": "/Hoang-Ton",
                        "spotlight": false,
                        "alias": "Hoang-Ton",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/e/1/f/ee1faaf62fb8b2c2882d25bbaa6a851d.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/e/e/1/f/ee1faaf62fb8b2c2882d25bbaa6a851d.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZAC6AE"
                      },
                      {
                        "id": "IW6BZIIO",
                        "name": "BeepBeepChild",
                        "link": "/nghe-si/BeepBeepChild-IW6BZIIO",
                        "spotlight": false,
                        "alias": "BeepBeepChild-IW6BZIIO",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/3/d/1/e3d121f80c02f760cd9b87e2474dd8b6.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/e/3/d/1/e3d121f80c02f760cd9b87e2474dd8b6.jpg",
                        "isOA": false,
                        "isOABrand": false
                      }
                    ],
                    "isWorldWide": false,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/d/a/e/c/daecc182d96588186d717b7dabd1ac5a.jpg",
                    "link": "/bai-hat/Say-Hoang-Ton-BeepBeepChild/Z7UF8F0W.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/a/e/c/daecc182d96588186d717b7dabd1ac5a.jpg",
                    "duration": 206,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1709744400,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z088",
                      "IWZ9Z0C8"
                    ],
                    "distributor": "Believe",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": true,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7UCZ767",
                    "title": "Để cho anh cưa",
                    "alias": "De-cho-anh-cua-Phuc-Du",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Phúc Du",
                    "artists": [
                      {
                        "id": "IW6U8EWE",
                        "name": "Phúc Du",
                        "link": "/nghe-si/Phuc-Du",
                        "spotlight": false,
                        "alias": "Phuc-Du",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/3/8/e/738e7bf4492dcc9a6bf7f3c13a23ff73.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/3/8/e/738e7bf4492dcc9a6bf7f3c13a23ff73.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6UW9BCAZ"
                      }
                    ],
                    "isWorldWide": true,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/1/7/a/e17ab1a67ea8a92b9425282a17e3cf07.jpg",
                    "link": "/bai-hat/De-cho-anh-cua-Phuc-Du/Z7UCZ767.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/1/7/a/e17ab1a67ea8a92b9425282a17e3cf07.jpg",
                    "duration": 173,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1709730003,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "distributor": "LOOPS Music",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "mvlink": "/video-clip/De-cho-anh-cua-Phuc-Du/Z7UCZ767.html",
                    "streamingStatus": 1,
                    "allowAudioAds": true,
                    "hasLyric": true
                  }
                ],
                "others": [
                  {
                    "encodeId": "Z7Z6EAZ7",
                    "title": "Team Side",
                    "alias": "Team-Side-Alan-Walker-Sofiloud",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Alan Walker, Sofiloud",
                    "artists": [
                      {
                        "id": "IWZA6CCW",
                        "name": "Alan Walker",
                        "link": "/Alan-Walker",
                        "spotlight": false,
                        "alias": "Alan-Walker",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/a/6/b/ba6b56ca02dd06f37693d945acfcdad9.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/b/a/6/b/ba6b56ca02dd06f37693d945acfcdad9.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZCU89E"
                      },
                      {
                        "id": "IW68CZD8",
                        "name": "Sofiloud",
                        "link": "/nghe-si/Sofiloud-IW68CZD8",
                        "spotlight": false,
                        "alias": "Sofiloud-IW68CZD8",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/a/e/6/5ae6ee31b987d76f21741d820f7cd900.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/a/e/6/5ae6ee31b987d76f21741d820f7cd900.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6BFO8W7Z"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/7/6/2/b762048a895ecc069c10cf59555a462a.jpg",
                    "link": "/bai-hat/Team-Side-Alan-Walker-Sofiloud/Z7Z6EAZ7.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/7/6/2/b762048a895ecc069c10cf59555a462a.jpg",
                    "duration": 181,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710781201,
                    "genreIds": [
                      "IWZ9Z08O",
                      "IWZ9Z09A"
                    ],
                    "distributor": "FUGA",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false
                  },
                  {
                    "encodeId": "Z7Z6UIOO",
                    "title": "Nectar",
                    "alias": "Nectar-THE-BOYZ",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "THE BOYZ",
                    "artists": [
                      {
                        "id": "IWZFFWO7",
                        "name": "THE BOYZ",
                        "link": "/nghe-si/THE-BOYZ-KPop",
                        "spotlight": false,
                        "alias": "THE-BOYZ-KPop",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/f/4/d/b/f4dbd8f2da40f63a76b17898aeb482f2.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/f/4/d/b/f4dbd8f2da40f63a76b17898aeb482f2.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6UW9B7WF"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/d/f/0/9/df09bbdb2ea437f9632805957eb04b28.jpg",
                    "link": "/bai-hat/Nectar-THE-BOYZ/Z7Z6UIOO.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/f/0/9/df09bbdb2ea437f9632805957eb04b28.jpg",
                    "duration": 184,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710694800,
                    "genreIds": [
                      "IWZ9Z08W",
                      "IWZ9Z09O"
                    ],
                    "distributor": "Kakao Entertainment",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZUDOFD",
                    "title": "FRI(END)S",
                    "alias": "FRI-END-S-V",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "V",
                    "artists": [
                      {
                        "id": "IWZD7IAZ",
                        "name": "V",
                        "link": "/V-BTS",
                        "spotlight": false,
                        "alias": "V-BTS",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/4/3/8/8438b8afc8289f96da37a693eda1432b.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/4/3/8/8438b8afc8289f96da37a693eda1432b.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "6UW9BUBF"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/f/5/f/6f5f0d33ba64083d3150391171b0ac1d.jpg",
                    "link": "/bai-hat/FRI-END-S-V/Z7ZUDOFD.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/6/f/5/f/6f5f0d33ba64083d3150391171b0ac1d.jpg",
                    "duration": 148,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710435602,
                    "genreIds": [
                      "IWZ9Z08W"
                    ],
                    "distributor": "Ingrooves Music Group",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZOO690",
                    "title": "No Angels",
                    "alias": "No-Angels-Justin-Timberlake",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Justin Timberlake",
                    "artists": [
                      {
                        "id": "IWZ9ZOI8",
                        "name": "Justin Timberlake",
                        "link": "/Justin-Timberlake-USUK",
                        "spotlight": false,
                        "alias": "Justin-Timberlake-USUK",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/c/1/4/ec1497514947f30d96ba6e7aadf3e8f1.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/e/c/1/4/ec1497514947f30d96ba6e7aadf3e8f1.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZ9AAEE"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/e/a/7/6ea7eb30cf007abc42a6ed1e4d7cb67e.jpg",
                    "link": "/bai-hat/No-Angels-Justin-Timberlake/Z7ZOO690.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/6/e/a/7/6ea7eb30cf007abc42a6ed1e4d7cb67e.jpg",
                    "duration": 208,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710435600,
                    "genreIds": [
                      "IWZ9Z08O",
                      "IWZ9Z097"
                    ],
                    "distributor": "Sony Music Entertainment",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 2,
                    "streamPrivileges": [
                      2
                    ],
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZO6ZZE",
                    "title": "Flowers on the Moon",
                    "alias": "Flowers-on-the-Moon-AJ-Mitchell",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "AJ Mitchell",
                    "artists": [
                      {
                        "id": "IW6W9D0W",
                        "name": "AJ Mitchell",
                        "link": "/nghe-si/AJ-Mitchell",
                        "spotlight": false,
                        "alias": "AJ-Mitchell",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/d/8/9/bd8990f9eadf59bafafc45afcd209a59.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/b/d/8/9/bd8990f9eadf59bafafc45afcd209a59.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6B7W9907"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/7/2/3/9723ab0c3132b2d056ae4e60e043d96f.jpg",
                    "link": "/bai-hat/Flowers-on-the-Moon-AJ-Mitchell/Z7ZO6ZZE.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/9/7/2/3/9723ab0c3132b2d056ae4e60e043d96f.jpg",
                    "duration": 208,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710435600,
                    "genreIds": [
                      "IWZ9Z08O",
                      "IWZ9Z097"
                    ],
                    "distributor": "Sony Music Entertainment",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 2,
                    "streamPrivileges": [
                      2
                    ],
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZU9B0F",
                    "title": "What I Am",
                    "alias": "What-I-Am-ZAYN",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "ZAYN",
                    "artists": [
                      {
                        "id": "IWZ9DC8F",
                        "name": "ZAYN",
                        "link": "/ZAYN",
                        "spotlight": false,
                        "alias": "ZAYN",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/9/2/3/1923dc469379fe11f52c2ae4f7bcf429.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/9/2/3/1923dc469379fe11f52c2ae4f7bcf429.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZOEIUOUW"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/7/c/f/77cf98ef1a111d61b37074867222a58a.jpg",
                    "link": "/bai-hat/What-I-Am-ZAYN/Z7ZU9B0F.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/7/7/c/f/77cf98ef1a111d61b37074867222a58a.jpg",
                    "duration": 211,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710435600,
                    "genreIds": [
                      "IWZ9Z08O",
                      "IWZ9ZIUO"
                    ],
                    "distributor": "Universal Music Group",
                    "indicators": [
                      "explicit"
                    ],
                    "isIndie": false,
                    "streamingStatus": 2,
                    "streamPrivileges": [
                      2
                    ],
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZOUOWC",
                    "title": "Been Like This",
                    "alias": "Been-Like-This-Meghan-Trainor-T-Pain",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Meghan Trainor, T-Pain",
                    "artists": [
                      {
                        "id": "IWZAW760",
                        "name": "Meghan Trainor",
                        "link": "/nghe-si/Meghan-Trainor",
                        "spotlight": false,
                        "alias": "Meghan-Trainor",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/9/9/1/b991d3e7919a4804d83a55c81aeef42d.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/b/9/9/1/b991d3e7919a4804d83a55c81aeef42d.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "ZOEWF9EI"
                      },
                      {
                        "id": "IWZ9ZOUB",
                        "name": "T-Pain",
                        "link": "/nghe-si/T-Pain.IWZ9ZOUB",
                        "spotlight": false,
                        "alias": "T-Pain.IWZ9ZOUB",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/4/647691ca57cb89c63b2b7c5f9a6c8277_1335091051.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/6/4/647691ca57cb89c63b2b7c5f9a6c8277_1335091051.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6UAEWECW"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/5/a/8/b5a8c9e27c9a5d00294fed1c2fc25f1d.jpg",
                    "link": "/bai-hat/Been-Like-This-Meghan-Trainor-T-Pain/Z7ZOUOWC.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/5/a/8/b5a8c9e27c9a5d00294fed1c2fc25f1d.jpg",
                    "duration": 146,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710349200,
                    "genreIds": [
                      "IWZ9Z08O",
                      "IWZ9Z097"
                    ],
                    "distributor": "Sony Music Entertainment",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 2,
                    "streamPrivileges": [
                      2
                    ],
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZIEIWZ",
                    "title": "Wish You Hell",
                    "alias": "Wish-You-Hell-WENDY",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "WENDY",
                    "artists": [
                      {
                        "id": "IWZ9ZFFU",
                        "name": "WENDY",
                        "link": "/nghe-si/Wendy-KPOP",
                        "spotlight": false,
                        "alias": "Wendy-KPOP",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/f/e/8/1fe8458cc632af49c71f320d8bf436bb.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/f/e/8/1fe8458cc632af49c71f320d8bf436bb.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6UW99UO9"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/5/f/e/65fe4890e6ea9137b34c75b0c82ae3fc.jpg",
                    "link": "/bai-hat/Wish-You-Hell-WENDY/Z7ZIEIWZ.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/6/5/f/e/65fe4890e6ea9137b34c75b0c82ae3fc.jpg",
                    "duration": 170,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710176400,
                    "genreIds": [
                      "IWZ9Z08W",
                      "IWZ9Z09W"
                    ],
                    "distributor": "FUGA",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZWFAUU",
                    "title": "EENIE MEENIE (Feat. Hongjoong of ATEEZ)",
                    "alias": "EENIE-MEENIE-Feat-Hongjoong-of-ATEEZ-CHUNG-HA-Hongjoong-of-ATEEZ",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "CHUNG HA, Hongjoong of ATEEZ",
                    "artists": [
                      {
                        "id": "IWZFDOW6",
                        "name": "CHUNG HA",
                        "link": "/Chung-Ha",
                        "spotlight": false,
                        "alias": "Chung-Ha",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/d/1/5/dd150a1a2f3649ad3abd6e0cdb830622.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/d/1/5/dd150a1a2f3649ad3abd6e0cdb830622.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZOEUZ6ZD"
                      },
                      {
                        "id": "IW8CE7F8",
                        "name": "Hongjoong of ATEEZ",
                        "link": "/nghe-si/Hongjoong-of-ATEEZ-IW8CE7F8",
                        "spotlight": false,
                        "alias": "Hongjoong-of-ATEEZ-IW8CE7F8",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/7/3/9/77392df45dbc26d1e0755b739b1b260d.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/7/3/9/77392df45dbc26d1e0755b739b1b260d.jpg",
                        "isOA": false,
                        "isOABrand": false
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/d/b/5/5db5e9c127ec9ff11593e4ff0fec10c5.jpg",
                    "link": "/bai-hat/EENIE-MEENIE-Feat-Hongjoong-of-ATEEZ-CHUNG-HA-Hongjoong-of-ATEEZ/Z7ZWFAUU.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/5/d/b/5/5db5e9c127ec9ff11593e4ff0fec10c5.jpg",
                    "duration": 170,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710090002,
                    "genreIds": [
                      "IWZ9Z08W",
                      "IWZ9Z09O"
                    ],
                    "distributor": "Kakao Entertainment",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7UFAA0F",
                    "title": "LIGHTHOUSE",
                    "alias": "LIGHTHOUSE-TEMPEST",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "TEMPEST",
                    "artists": [
                      {
                        "id": "IW66BDBE",
                        "name": "TEMPEST",
                        "link": "/nghe-si/Tempest-IW66BDBE",
                        "spotlight": false,
                        "alias": "Tempest-IW66BDBE",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/e/9/7/7e974574852766ad02ada1b5b10c8260.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/e/9/7/7e974574852766ad02ada1b5b10c8260.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6B7WAW7E"
                      }
                    ],
                    "isWorldWide": false,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/3/a/4/f3a4491155142e0832ce11335a44fe2f.jpg",
                    "link": "/bai-hat/LIGHTHOUSE-TEMPEST/Z7UFAA0F.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/3/a/4/f3a4491155142e0832ce11335a44fe2f.jpg",
                    "duration": 206,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710090000,
                    "genreIds": [
                      "IWZ9Z08W"
                    ],
                    "distributor": "Ingrooves Music Group",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZWZ780",
                    "title": "supernatural",
                    "alias": "supernatural-Ariana-Grande-Troye-Sivan",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Ariana Grande, Troye Sivan",
                    "artists": [
                      {
                        "id": "IWZ98ABB",
                        "name": "Ariana Grande",
                        "link": "/nghe-si/Ariana-Grande",
                        "spotlight": false,
                        "alias": "Ariana-Grande",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/b/a/8/cba8282bb865166714a7ae77fab322d8.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/b/a/8/cba8282bb865166714a7ae77fab322d8.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "ZWZCZICU"
                      },
                      {
                        "id": "IWZAWD00",
                        "name": "Troye Sivan",
                        "link": "/nghe-si/Troye-Sivan",
                        "spotlight": false,
                        "alias": "Troye-Sivan",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/2/4/e/524e69bd5a76ed11bb7cc1c4563ae189.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/2/4/e/524e69bd5a76ed11bb7cc1c4563ae189.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "ZOEWEZO0"
                      }
                    ],
                    "isWorldWide": false,
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/3/9/0/5390d6f4b4cbab3604eb4e2c3e2650c8.jpg",
                    "link": "/bai-hat/supernatural-Ariana-Grande-Troye-Sivan/Z7ZWZ780.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/5/3/9/0/5390d6f4b4cbab3604eb4e2c3e2650c8.jpg",
                    "duration": 163,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1710090000,
                    "genreIds": [
                      "IWZ9Z08O",
                      "IWZ9Z097"
                    ],
                    "distributor": "Universal Music Group",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 2,
                    "streamPrivileges": [
                      2
                    ],
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7ZI77CF",
                    "title": "we can't be friends (wait for your love)",
                    "alias": "we-can-t-be-friends-wait-for-your-love-Ariana-Grande",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Ariana Grande",
                    "artists": [
                      {
                        "id": "IWZ98ABB",
                        "name": "Ariana Grande",
                        "link": "/nghe-si/Ariana-Grande",
                        "spotlight": false,
                        "alias": "Ariana-Grande",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/b/a/8/cba8282bb865166714a7ae77fab322d8.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/b/a/8/cba8282bb865166714a7ae77fab322d8.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "ZWZCZICU"
                      }
                    ],
                    "isWorldWide": false,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/a/d/e/fade7f1741b9c39ba39d3175fe2a4a88.jpg",
                    "link": "/bai-hat/we-can-t-be-friends-wait-for-your-love-Ariana-Grande/Z7ZI77CF.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/a/d/e/fade7f1741b9c39ba39d3175fe2a4a88.jpg",
                    "duration": 229,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1709830802,
                    "genreIds": [
                      "IWZ9Z08O",
                      "IWZ9Z097"
                    ],
                    "distributor": "Universal Music Group",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "mvlink": "/video-clip/we-can-t-be-friends-wait-for-your-love-Ariana-Grande/Z7ZI77CF.html",
                    "streamingStatus": 2,
                    "streamPrivileges": [
                      2
                    ],
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7Z0WDZA",
                    "title": "Alley Rose",
                    "alias": "Alley-Rose-Conan-Gray",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Conan Gray",
                    "artists": [
                      {
                        "id": "IW6WB70A",
                        "name": "Conan Gray",
                        "link": "/nghe-si/Conan-Gray",
                        "spotlight": false,
                        "alias": "Conan-Gray",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/1/0/6/81069685c70817df7e453e2b1686f5b4.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/1/0/6/81069685c70817df7e453e2b1686f5b4.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "689U9COB"
                      }
                    ],
                    "isWorldWide": false,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/6/3/9/66391069dff14a2f18c28bf33bc27838.jpg",
                    "link": "/bai-hat/Alley-Rose-Conan-Gray/Z7Z0WDZA.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/6/6/3/9/66391069dff14a2f18c28bf33bc27838.jpg",
                    "duration": 209,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1709830800,
                    "genreIds": [
                      "IWZ9Z08O",
                      "IWZ9Z097"
                    ],
                    "distributor": "Universal Music Group",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 2,
                    "streamPrivileges": [
                      2
                    ],
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7UB0FA6",
                    "title": "Doctor (Work It Out)",
                    "alias": "Doctor-Work-It-Out-Pharrell-Williams-Miley-Cyrus",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Pharrell Williams, Miley Cyrus",
                    "artists": [
                      {
                        "id": "IWZ9ZDFU",
                        "name": "Pharrell Williams",
                        "link": "/nghe-si/Pharrell-Williams-USUK",
                        "spotlight": false,
                        "alias": "Pharrell-Williams-USUK",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/e/2/b/7e2bb06d88b45d11647f988100ec159b.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/e/2/b/7e2bb06d88b45d11647f988100ec159b.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "ZOEUU98O"
                      },
                      {
                        "id": "IWZ9ZO96",
                        "name": "Miley Cyrus",
                        "link": "/Miley-Cyrus",
                        "spotlight": false,
                        "alias": "Miley-Cyrus",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/8/a/0/b8a03e4111b611fedfec6346559d96c9.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/b/8/a/0/b8a03e4111b611fedfec6346559d96c9.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZAE9OD"
                      }
                    ],
                    "isWorldWide": false,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/b/8/6/0b86ff69fc8f5d295fdf73874b0291ba.jpg",
                    "link": "/bai-hat/Doctor-Work-It-Out-Pharrell-Williams-Miley-Cyrus/Z7UB0FA6.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/0/b/8/6/0b86ff69fc8f5d295fdf73874b0291ba.jpg",
                    "duration": 182,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1709226000,
                    "genreIds": [
                      "IWZ9Z08O",
                      "IWZ9Z097"
                    ],
                    "distributor": "Sony Music Entertainment",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 2,
                    "streamPrivileges": [
                      2
                    ],
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7WUU798",
                    "title": "Who I Am",
                    "alias": "Who-I-Am-Alan-Walker-Putri-Ariani-Peder-Elias",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Alan Walker, Putri Ariani, Peder Elias",
                    "artists": [
                      {
                        "id": "IWZA6CCW",
                        "name": "Alan Walker",
                        "link": "/Alan-Walker",
                        "spotlight": false,
                        "alias": "Alan-Walker",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/a/6/b/ba6b56ca02dd06f37693d945acfcdad9.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/b/a/6/b/ba6b56ca02dd06f37693d945acfcdad9.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZCU89E"
                      },
                      {
                        "id": "IW8AE68B",
                        "name": "Putri Ariani",
                        "link": "/nghe-si/Putri-Ariani-IW8AE68B",
                        "spotlight": false,
                        "alias": "Putri-Ariani-IW8AE68B",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/f/4/2/bf4295aefffdf0ff26f527d194a60778.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/b/f/4/2/bf4295aefffdf0ff26f527d194a60778.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6BFD9AIB"
                      },
                      {
                        "id": "IW6WA6ED",
                        "name": "Peder Elias",
                        "link": "/nghe-si/Peder-Elias",
                        "spotlight": false,
                        "alias": "Peder-Elias",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/5/f/8/85f85ddfd7a1e1eab50e411b56b4c623.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/5/f/8/85f85ddfd7a1e1eab50e411b56b4c623.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6B7W9976"
                      }
                    ],
                    "isWorldWide": false,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/b/8/c/0b8cfefa8311ff225a63ccc1a19c5ca7.jpg",
                    "link": "/bai-hat/Who-I-Am-Alan-Walker-Putri-Ariani-Peder-Elias/Z7WUU798.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/0/b/8/c/0b8cfefa8311ff225a63ccc1a19c5ca7.jpg",
                    "duration": 194,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1709139600,
                    "genreIds": [
                      "IWZ9Z08O",
                      "IWZ9Z09A"
                    ],
                    "distributor": "FUGA",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "mvlink": "/video-clip/Who-I-Am-Alan-Walker-Putri-Ariani-Peder-Elias/Z7WUU798.html",
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7U8ZE6D",
                    "title": "WAY 4 LUV",
                    "alias": "WAY-4-LUV-PLAVE",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "PLAVE",
                    "artists": [
                      {
                        "id": "IW8W7OF9",
                        "name": "PLAVE",
                        "link": "/nghe-si/PLAVE-IW8W7OF9",
                        "spotlight": false,
                        "alias": "PLAVE-IW8W7OF9",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/9/4/c/b/94cb2a0d942f3febc945d7bd5030767c.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/9/4/c/b/94cb2a0d942f3febc945d7bd5030767c.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6BEUIIUU"
                      }
                    ],
                    "isWorldWide": false,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/a/f/7/5af7cd1132890051de3ac8ea62f028df.jpg",
                    "link": "/bai-hat/WAY-4-LUV-PLAVE/Z7U8ZE6D.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/5/a/f/7/5af7cd1132890051de3ac8ea62f028df.jpg",
                    "duration": 219,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1708880400,
                    "genreIds": [
                      "IWZ9Z08W"
                    ],
                    "distributor": "YG PLUS",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7U90IUO",
                    "title": "ONE SPARK",
                    "alias": "ONE-SPARK-TWICE",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "TWICE",
                    "artists": [
                      {
                        "id": "IWZA6W70",
                        "name": "TWICE",
                        "link": "/TWICE",
                        "spotlight": false,
                        "alias": "TWICE",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/d/2/5/bd25429930348b6f292f451af7a757c8.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/b/d/2/5/bd25429930348b6f292f451af7a757c8.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZOZ9OUWE"
                      }
                    ],
                    "isWorldWide": false,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/8/1/1/6/811673d8468a29d97e2967ad625b8ca7.jpg",
                    "link": "/bai-hat/ONE-SPARK-TWICE/Z7U90IUO.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/8/1/1/6/811673d8468a29d97e2967ad625b8ca7.jpg",
                    "duration": 184,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1708621202,
                    "genreIds": [
                      "IWZ9Z08W",
                      "IWZ9Z09O"
                    ],
                    "distributor": "Ingrooves Music Group",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 1,
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7UZCZWC",
                    "title": "Drown",
                    "alias": "Drown-Justin-Timberlake",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Justin Timberlake",
                    "artists": [
                      {
                        "id": "IWZ9ZOI8",
                        "name": "Justin Timberlake",
                        "link": "/Justin-Timberlake-USUK",
                        "spotlight": false,
                        "alias": "Justin-Timberlake-USUK",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/c/1/4/ec1497514947f30d96ba6e7aadf3e8f1.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/e/c/1/4/ec1497514947f30d96ba6e7aadf3e8f1.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZ9AAEE"
                      }
                    ],
                    "isWorldWide": false,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/3/4/b/8/34b837fcdf3eb47eac629fb52f48b513.jpg",
                    "link": "/bai-hat/Drown-Justin-Timberlake/Z7UZCZWC.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/4/b/8/34b837fcdf3eb47eac629fb52f48b513.jpg",
                    "duration": 260,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1708621201,
                    "genreIds": [
                      "IWZ9Z08O",
                      "IWZ9Z097"
                    ],
                    "distributor": "Sony Music Entertainment",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 2,
                    "streamPrivileges": [
                      2
                    ],
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7UOOUAE",
                    "title": "SLEEP TONIGHT (THIS IS THE LIFE)",
                    "alias": "SLEEP-TONIGHT-THIS-IS-THE-LIFE-Switch-Disco-R3hab-Sam-Feldt",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Switch Disco, R3hab, Sam Feldt",
                    "artists": [
                      {
                        "id": "IW6F6UFU",
                        "name": "Switch Disco",
                        "link": "/nghe-si/Switch-Disco-IW6F6UFU",
                        "spotlight": false,
                        "alias": "Switch-Disco-IW6F6UFU",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/9/e/b/d/9ebd8137eb026837248dce9342b21909.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/9/e/b/d/9ebd8137eb026837248dce9342b21909.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6BBUDZ9D"
                      },
                      {
                        "id": "IWZ99OEF",
                        "name": "R3hab",
                        "link": "/nghe-si/R3hab",
                        "spotlight": false,
                        "alias": "R3hab",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/6/3/3/1633a911475102f69a13e8c773489a5d.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/6/3/3/1633a911475102f69a13e8c773489a5d.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "ZOU7FO68"
                      },
                      {
                        "id": "IWZAZBOZ",
                        "name": "Sam Feldt",
                        "link": "/nghe-si/Sam-Feldt",
                        "spotlight": false,
                        "alias": "Sam-Feldt",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/2/7/e/a27e5c5779a0f23d138d8664b0795a24.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/2/7/e/a27e5c5779a0f23d138d8664b0795a24.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "ZO69U8WB"
                      }
                    ],
                    "isWorldWide": false,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 40
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/3/2/9/1/329144b1b4b39bdbd005a7ef83226646.jpg",
                    "link": "/bai-hat/SLEEP-TONIGHT-THIS-IS-THE-LIFE-Switch-Disco-R3hab-Sam-Feldt/Z7UOOUAE.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/2/9/1/329144b1b4b39bdbd005a7ef83226646.jpg",
                    "duration": 136,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1708621200,
                    "genreIds": [
                      "IWZ9Z08O",
                      "IWZ9Z09A"
                    ],
                    "distributor": "Sony Music Entertainment",
                    "indicators": [
                      "explicit"
                    ],
                    "isIndie": false,
                    "streamingStatus": 2,
                    "streamPrivileges": [
                      2
                    ],
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7U8DCC6",
                    "title": "Love On",
                    "alias": "Love-On-Selena-Gomez",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Selena Gomez",
                    "artists": [
                      {
                        "id": "IWZ9ZO9Z",
                        "name": "Selena Gomez",
                        "link": "/Selena-Gomez",
                        "spotlight": false,
                        "alias": "Selena-Gomez",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/1/9/0/71906d773da1705208f962b58ddd7b4c.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/1/9/0/71906d773da1705208f962b58ddd7b4c.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZOU99CFU"
                      }
                    ],
                    "isWorldWide": false,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 60
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/8/8/7/b/887be9a3aa75e1bae555ded79598cf4f.jpg",
                    "link": "/bai-hat/Love-On-Selena-Gomez/Z7U8DCC6.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/8/8/7/b/887be9a3aa75e1bae555ded79598cf4f.jpg",
                    "duration": 182,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1708534802,
                    "genreIds": [
                      "IWZ9Z08O",
                      "IWZ9Z097"
                    ],
                    "distributor": "Universal Music Group",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "mvlink": "/video-clip/Love-On-Selena-Gomez/Z7U8DCC6.html",
                    "streamingStatus": 2,
                    "streamPrivileges": [
                      2
                    ],
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7UOB8OU",
                    "title": "Space in My Heart",
                    "alias": "Space-in-My-Heart-Enrique-Iglesias-Miranda-Lambert",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Enrique Iglesias, Miranda Lambert",
                    "artists": [
                      {
                        "id": "IWZ9ZOC7",
                        "name": "Enrique Iglesias",
                        "link": "/Enrique-Iglesias",
                        "spotlight": false,
                        "alias": "Enrique-Iglesias",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/9/5970b428b3c2c88b9fc964aa14012574_1394696406.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/9/5970b428b3c2c88b9fc964aa14012574_1394696406.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZBOD6W"
                      },
                      {
                        "id": "IWZ9ZBFO",
                        "name": "Miranda Lambert",
                        "link": "/nghe-si/Miranda-Lambert",
                        "spotlight": false,
                        "alias": "Miranda-Lambert",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/b/1/0/4b1036ca494fab34262a5cdcdedc23cd.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/b/1/0/4b1036ca494fab34262a5cdcdedc23cd.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "ZOEUZ7I8"
                      }
                    ],
                    "isWorldWide": false,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/f/1/d/6f1de3edf7614433b250c64f8deafd78.jpg",
                    "link": "/bai-hat/Space-in-My-Heart-Enrique-Iglesias-Miranda-Lambert/Z7UOB8OU.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/6/f/1/d/6f1de3edf7614433b250c64f8deafd78.jpg",
                    "duration": 179,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1708534800,
                    "genreIds": [
                      "IWZ9Z08O",
                      "IWZ97797"
                    ],
                    "distributor": "Sony Music Entertainment",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 2,
                    "streamPrivileges": [
                      2
                    ],
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7U8U6DI",
                    "title": "Saturn",
                    "alias": "Saturn-SZA",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "SZA",
                    "artists": [
                      {
                        "id": "IWZAZ00Z",
                        "name": "SZA",
                        "link": "/nghe-si/SZA",
                        "spotlight": false,
                        "alias": "SZA",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/7/9/a/279a391af4107610977011d29d5f7cec.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/7/9/a/279a391af4107610977011d29d5f7cec.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "ZOEW6DEO"
                      }
                    ],
                    "isWorldWide": false,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 45
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/2/1/d/a/21da73ba6194edb8af6092f17db0db6f.jpg",
                    "link": "/bai-hat/Saturn-SZA/Z7U8U6DI.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/2/1/d/a/21da73ba6194edb8af6092f17db0db6f.jpg",
                    "duration": 186,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1708534800,
                    "genreIds": [
                      "IWZ9Z08O",
                      "IWZ9Z09D"
                    ],
                    "distributor": "Sony Music Entertainment",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 2,
                    "streamPrivileges": [
                      2
                    ],
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  },
                  {
                    "encodeId": "Z7UD780A",
                    "title": "SLEEP TONIGHT (THIS IS THE LIFE)",
                    "alias": "SLEEP-TONIGHT-THIS-IS-THE-LIFE-Switch-Disco-R3hab-Sam-Feldt",
                    "isOffical": true,
                    "username": "",
                    "artistsNames": "Switch Disco, R3hab, Sam Feldt",
                    "artists": [
                      {
                        "id": "IW6F6UFU",
                        "name": "Switch Disco",
                        "link": "/nghe-si/Switch-Disco-IW6F6UFU",
                        "spotlight": false,
                        "alias": "Switch-Disco-IW6F6UFU",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/9/e/b/d/9ebd8137eb026837248dce9342b21909.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/9/e/b/d/9ebd8137eb026837248dce9342b21909.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6BBUDZ9D"
                      },
                      {
                        "id": "IWZ99OEF",
                        "name": "R3hab",
                        "link": "/nghe-si/R3hab",
                        "spotlight": false,
                        "alias": "R3hab",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/6/3/3/1633a911475102f69a13e8c773489a5d.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/6/3/3/1633a911475102f69a13e8c773489a5d.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "ZOU7FO68"
                      },
                      {
                        "id": "IWZAZBOZ",
                        "name": "Sam Feldt",
                        "link": "/nghe-si/Sam-Feldt",
                        "spotlight": false,
                        "alias": "Sam-Feldt",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/2/7/e/a27e5c5779a0f23d138d8664b0795a24.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/2/7/e/a27e5c5779a0f23d138d8664b0795a24.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "ZO69U8WB"
                      }
                    ],
                    "isWorldWide": false,
                    "previewInfo": {
                      "startTime": 0,
                      "endTime": 40
                    },
                    "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/1/a/8/9/1a89085b5ee9febdbd3963c478c52b39.jpg",
                    "link": "/bai-hat/SLEEP-TONIGHT-THIS-IS-THE-LIFE-Switch-Disco-R3hab-Sam-Feldt/Z7UD780A.html",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/a/8/9/1a89085b5ee9febdbd3963c478c52b39.jpg",
                    "duration": 136,
                    "zingChoice": false,
                    "isPrivate": false,
                    "preRelease": false,
                    "releaseDate": 1708534800,
                    "genreIds": [
                      "IWZ9Z08O",
                      "IWZ9Z09A"
                    ],
                    "distributor": "Sony Music Entertainment",
                    "indicators": [
                      
                    ],
                    "isIndie": false,
                    "streamingStatus": 2,
                    "streamPrivileges": [
                      2
                    ],
                    "downloadPrivileges": [
                      3
                    ],
                    "allowAudioAds": false,
                    "hasLyric": true
                  }
                ]
              }
            },
            {
              "title": "Chill",
              "sectionType": "playlist",
              "viewType": "slider",
              "items": [
                {
                  "encodeId": "ZB08FIBW",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/3/1/0/8/31082798fe3fc6fdcfc34330b7403dc8.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/3/1/0/8/31082798fe3fc6fdcfc34330b7403dc8.jpg",
                  "link": "/album/Chill-Cung-R-B-Viet-Phuong-Ly-Wren-Evans-Pay-My-Anh/ZB08FIBW.html",
                  "title": "Chill Cùng R&B Việt",
                  "sortDescription": "Nâng niu đôi tai cùng R&B Việt",
                  "artists": [
                    {
                      "id": "IWZAUDWA",
                      "name": "Phương Ly",
                      "link": "/Phuong-Ly",
                      "spotlight": false,
                      "alias": "Phuong-Ly",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/a/d/f/2adfd0537b3fb586fbe70e6fe82b0d6a.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/a/d/f/2adfd0537b3fb586fbe70e6fe82b0d6a.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZUO78Z9O",
                      "totalFollow": 116681
                    },
                    {
                      "id": "IW6BCICZ",
                      "name": "Wren Evans",
                      "link": "/Wren-Evans-IW6BCICZ",
                      "spotlight": false,
                      "alias": "Wren-Evans-IW6BCICZ",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/c/6/0/ac60ef152ce6f20e84ccc27d5eb4ceda.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/c/6/0/ac60ef152ce6f20e84ccc27d5eb4ceda.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "68BZI9C7",
                      "totalFollow": 16993
                    },
                    {
                      "id": "IW6ZZZCF",
                      "name": "Pay",
                      "link": "/nghe-si/Pay",
                      "spotlight": false,
                      "alias": "Pay",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/4/0/f/d40ff79ba3a708c60a7b765d8030352d.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/4/0/f/d40ff79ba3a708c60a7b765d8030352d.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6UW9BFWW",
                      "totalFollow": 855
                    },
                    {
                      "id": "IWZAEAC0",
                      "name": "Mỹ Anh",
                      "link": "/My-Anh-Singer",
                      "spotlight": false,
                      "alias": "My-Anh-Singer",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/d/9/e/cd9e4812cc2c094aa0b1a2bb081f9f87.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/d/9/e/cd9e4812cc2c094aa0b1a2bb081f9f87.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "6UW9BWA7",
                      "totalFollow": 4414
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ"
                },
                {
                  "encodeId": "6IACDA86",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg",
                  "link": "/album/Lofi-Mot-Chut-Thoi-Freak-D-W-N-Khai-Dang-Quang-Hung-MasterD/6IACDA86.html",
                  "title": "Lofi Một Chút Thôi",
                  "sortDescription": "Nhạc Việt \"lâu phai\" và gây nghiện hoài hoài",
                  "artists": [
                    {
                      "id": "IW67DFAE",
                      "name": "Freak D",
                      "link": "/nghe-si/Freak-D",
                      "spotlight": false,
                      "alias": "Freak-D",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/f/6/c/0/f6c025f38df30e99583f17d81dd0cb54.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/f/6/c/0/f6c025f38df30e99583f17d81dd0cb54.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6UW9CZOI",
                      "totalFollow": 28624
                    },
                    {
                      "id": "IW688WW0",
                      "name": "W/N",
                      "link": "/nghe-si/W-n",
                      "spotlight": false,
                      "alias": "W-n",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/a/a/e/7aae3be0b7eccc2e4b34e58379d13f3f.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/a/a/e/7aae3be0b7eccc2e4b34e58379d13f3f.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6ZU6EO89",
                      "totalFollow": 41687
                    },
                    {
                      "id": "IWZA76EE",
                      "name": "Khải Đăng",
                      "link": "/Khai-Dang",
                      "spotlight": false,
                      "alias": "Khai-Dang",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/9/0/7/7/907799a310b3404f46d43b9899ebd5e4.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/9/0/7/7/907799a310b3404f46d43b9899ebd5e4.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZOEWEZCO",
                      "totalFollow": 56740
                    },
                    {
                      "id": "IWZAZFCO",
                      "name": "Quang Hùng MasterD",
                      "link": "/Quang-Hung-MasterD",
                      "spotlight": false,
                      "alias": "Quang-Hung-MasterD",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/7/9/a/479ad4670fa083908fcc0c88c0f05e5c.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/7/9/a/479ad4670fa083908fcc0c88c0f05e5c.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZOEIUO67",
                      "totalFollow": 42794
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ"
                },
                {
                  "encodeId": "ZOUWE9EO",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/7/3/c/173ce5cfc42b83b9ebe59d4441fbae60.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/7/3/c/173ce5cfc42b83b9ebe59d4441fbae60.jpg",
                  "link": "/album/Acoustic-Thu-Gian-Thinh-Suy-AMEE-Pham-Nguyen-Ngoc-Hoang-Dung/ZOUWE9EO.html",
                  "title": "Acoustic Thư Giãn",
                  "sortDescription": "Không ồn ã, không vội vàng, cùng thư giãn với âm nhạc Acoustic ngay tại đây",
                  "artists": [
                    {
                      "id": "IW6UZIBU",
                      "name": "Thịnh Suy",
                      "link": "/Thinh-Suy",
                      "spotlight": false,
                      "alias": "Thinh-Suy",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/1/4/b/814bd489b26a00c14c4931d10b302afd.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/1/4/b/814bd489b26a00c14c4931d10b302afd.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "6UW9BC8B",
                      "totalFollow": 53468
                    },
                    {
                      "id": "IW6WBZWO",
                      "name": "AMEE",
                      "link": "/AMEE",
                      "spotlight": false,
                      "alias": "AMEE",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/f/d/a/2fda5f39b5adca3bad9c4bfc6d586f68.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/f/d/a/2fda5f39b5adca3bad9c4bfc6d586f68.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZZ7F60I7",
                      "totalFollow": 410705
                    },
                    {
                      "id": "IW6ZZIO9",
                      "name": "Phạm Nguyên Ngọc",
                      "link": "/Pham-Nguyen-Ngoc",
                      "spotlight": false,
                      "alias": "Pham-Nguyen-Ngoc",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/5/a/e/45aeae03ef8f70d313a4d65601cb2072.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/5/a/e/45aeae03ef8f70d313a4d65601cb2072.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "6UW9BEC0",
                      "totalFollow": 30725
                    },
                    {
                      "id": "IWZAZ8U6",
                      "name": "Hoàng Dũng",
                      "link": "/Nguyen-Hoang-Dung",
                      "spotlight": false,
                      "alias": "Nguyen-Hoang-Dung",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/7/b/3/87b38ebfba352aceab25d24f196003b0.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/7/b/3/87b38ebfba352aceab25d24f196003b0.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZODFZIBZ",
                      "totalFollow": 87479
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ"
                },
                {
                  "encodeId": "ZUDW9B78",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/4/b/6/b4b6bd20a64350ee7bee0a124db509ac.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/4/b/6/b4b6bd20a64350ee7bee0a124db509ac.jpg",
                  "link": "/album/Playlist-Nay-Chill-Phet-Hoang-Dung-JustaTee-JSOL-Orange/ZUDW9B78.html",
                  "title": "Playlist Này Chill Phết",
                  "sortDescription": "Va vào những giai điệu thư giãn của V-Pop",
                  "artists": [
                    {
                      "id": "IWZAZ8U6",
                      "name": "Hoàng Dũng",
                      "link": "/Nguyen-Hoang-Dung",
                      "spotlight": false,
                      "alias": "Nguyen-Hoang-Dung",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/7/b/3/87b38ebfba352aceab25d24f196003b0.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/7/b/3/87b38ebfba352aceab25d24f196003b0.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZODFZIBZ",
                      "totalFollow": 87479
                    },
                    {
                      "id": "IWZ96FZE",
                      "name": "JustaTee",
                      "link": "/JustaTee",
                      "spotlight": true,
                      "alias": "JustaTee",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/3/b/5/33b54115d5b1149f5ac51b4038ef62c7.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/3/b/5/33b54115d5b1149f5ac51b4038ef62c7.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZBOC6B",
                      "totalFollow": 256614
                    },
                    {
                      "id": "IWZFE9AI",
                      "name": "JSOL",
                      "link": "/JSOL",
                      "spotlight": false,
                      "alias": "JSOL",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/9/6/0/e960d4b865046715cad8b034bfec7985.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/e/9/6/0/e960d4b865046715cad8b034bfec7985.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZOCDBB0U",
                      "totalFollow": 43612
                    },
                    {
                      "id": "IWZFFWB7",
                      "name": "Orange",
                      "link": "/Orange",
                      "spotlight": false,
                      "alias": "Orange",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/1/6/3/0163e5f6bc297ea051e3efacd27ac7d7.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/0/1/6/3/0163e5f6bc297ea051e3efacd27ac7d7.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZUO78ZO7",
                      "totalFollow": 82993
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ"
                },
                {
                  "encodeId": "6BC7Z8EC",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/b/e/6/9be6f892a7f95ef25632752dd2a319c2.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/b/e/6/9be6f892a7f95ef25632752dd2a319c2.jpg",
                  "link": "/album/Nhac-Hoa-Loi-Viet-Nhe-Nhang-Duong-Edward-Bao-Anh-Vicky-Nhung-Juky-San/6BC7Z8EC.html",
                  "title": "Nhạc Hoa Lời Việt Nhẹ Nhàng",
                  "sortDescription": "Lắng nghe những giai điệu nhạc Hoa lời Việt nhẹ nhàng như những cánh hoa rơi",
                  "artists": [
                    {
                      "id": "IWZ97FE0",
                      "name": "Dương Edward",
                      "link": "/Duong-Edward",
                      "spotlight": false,
                      "alias": "Duong-Edward",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/d/7/4/7d741800ca3ae4cacb624fc8d2358678.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/d/7/4/7d741800ca3ae4cacb624fc8d2358678.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZODE9BDC",
                      "totalFollow": 26552
                    },
                    {
                      "id": "IWZ99B00",
                      "name": "Bảo Anh",
                      "link": "/Bao-Anh",
                      "spotlight": false,
                      "alias": "Bao-Anh",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/9/9/b/799b387d346a819ece784725f7d81aa3.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/9/9/b/799b387d346a819ece784725f7d81aa3.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZBIBB0",
                      "totalFollow": 313808
                    },
                    {
                      "id": "IWZAZOO6",
                      "name": "Vicky Nhung",
                      "link": "/Vicky-Nhung",
                      "spotlight": false,
                      "alias": "Vicky-Nhung",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/b/a/b/3bab370d1efab18c57cd959e38b611d2.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/b/a/b/3bab370d1efab18c57cd959e38b611d2.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZODFZI8B",
                      "totalFollow": 43587
                    },
                    {
                      "id": "IW6UZW08",
                      "name": "Juky San",
                      "link": "/Juky-San",
                      "spotlight": false,
                      "alias": "Juky-San",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/0/f/e/60fe20be7aa9f406b37b8b6934e6fef1.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/6/0/f/e/60fe20be7aa9f406b37b8b6934e6fef1.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "6UW9BC8E",
                      "totalFollow": 47028
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ"
                },
                {
                  "encodeId": "6BC8ODZ6",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/8/2/4/88247ce8f0f1aadb7062a7c9fda9292f.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/8/2/4/88247ce8f0f1aadb7062a7c9fda9292f.jpg",
                  "link": "/album/Remake-Viet-Nhe-Nhang-Duong-Edward-Juky-San-Ha-Nhi-Vicky-Nhung/6BC8ODZ6.html",
                  "title": "Remake Việt Nhẹ Nhàng",
                  "sortDescription": "Khi những bản nhạc cũ được làm mới một cách đầy thi vị",
                  "artists": [
                    {
                      "id": "IWZ97FE0",
                      "name": "Dương Edward",
                      "link": "/Duong-Edward",
                      "spotlight": false,
                      "alias": "Duong-Edward",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/d/7/4/7d741800ca3ae4cacb624fc8d2358678.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/d/7/4/7d741800ca3ae4cacb624fc8d2358678.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZODE9BDC",
                      "totalFollow": 26552
                    },
                    {
                      "id": "IW6UZW08",
                      "name": "Juky San",
                      "link": "/Juky-San",
                      "spotlight": false,
                      "alias": "Juky-San",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/0/f/e/60fe20be7aa9f406b37b8b6934e6fef1.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/6/0/f/e/60fe20be7aa9f406b37b8b6934e6fef1.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "6UW9BC8E",
                      "totalFollow": 47028
                    },
                    {
                      "id": "IWZA6806",
                      "name": "Hà Nhi",
                      "link": "/Ha-Nhi",
                      "spotlight": false,
                      "alias": "Ha-Nhi",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/7/f/9/c7f96bbea347cea9c5db6b1e6ff1e9ac.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/7/f/9/c7f96bbea347cea9c5db6b1e6ff1e9ac.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "6UW9B008",
                      "totalFollow": 46631
                    },
                    {
                      "id": "IWZAZOO6",
                      "name": "Vicky Nhung",
                      "link": "/Vicky-Nhung",
                      "spotlight": false,
                      "alias": "Vicky-Nhung",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/b/a/b/3bab370d1efab18c57cd959e38b611d2.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/b/a/b/3bab370d1efab18c57cd959e38b611d2.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZODFZI8B",
                      "totalFollow": 43587
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ"
                },
                {
                  "encodeId": "6BCAUIEO",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/5/4/9/45493e859cde749c75fb4377c14d0db3.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/5/4/9/45493e859cde749c75fb4377c14d0db3.jpg",
                  "link": "/album/Nhac-Lofi-Chill-Gay-Nghien-Khai-Dang-Hoai-Lam-Freak-D-Phan-Duy-Anh/6BCAUIEO.html",
                  "title": "Nhạc Lofi Chill Gây Nghiện",
                  "sortDescription": "Thả mình vào những giai điệu Lofi Chill nghe là nghiện",
                  "artists": [
                    {
                      "id": "IWZA76EE",
                      "name": "Khải Đăng",
                      "link": "/Khai-Dang",
                      "spotlight": false,
                      "alias": "Khai-Dang",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/9/0/7/7/907799a310b3404f46d43b9899ebd5e4.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/9/0/7/7/907799a310b3404f46d43b9899ebd5e4.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZOEWEZCO",
                      "totalFollow": 56740
                    },
                    {
                      "id": "IWZ97D7C",
                      "name": "Hoài Lâm",
                      "link": "/Hoai-Lam",
                      "spotlight": false,
                      "alias": "Hoai-Lam",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/c/3/2/6c32d58de86a0414e5ab4d0d74728d30.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/6/c/3/2/6c32d58de86a0414e5ab4d0d74728d30.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZBBFI9",
                      "totalFollow": 196102
                    },
                    {
                      "id": "IW67DFAE",
                      "name": "Freak D",
                      "link": "/nghe-si/Freak-D",
                      "spotlight": false,
                      "alias": "Freak-D",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/f/6/c/0/f6c025f38df30e99583f17d81dd0cb54.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/f/6/c/0/f6c025f38df30e99583f17d81dd0cb54.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6UW9CZOI",
                      "totalFollow": 28624
                    },
                    {
                      "id": "IWZ99IO9",
                      "name": "Phan Duy Anh",
                      "link": "/Phan-Duy-Anh",
                      "spotlight": false,
                      "alias": "Phan-Duy-Anh",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/7/7/a/b77ac5aec77b7df5c628293f9e1d6232.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/b/7/7/a/b77ac5aec77b7df5c628293f9e1d6232.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZODEFA66",
                      "totalFollow": 103163
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ"
                },
                {
                  "encodeId": "SBCFF9CC",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/c/8/b/1c8bcc5d85e2093dcdd9189be7d16293.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/c/8/b/1c8bcc5d85e2093dcdd9189be7d16293.jpg",
                  "link": "/album/Dong-Dua-Theo-Tieng-Nhac-TRANG-Hoang-Dung-Tien-Tien-Vu-Cat-Tuong/SBCFF9CC.html",
                  "title": "Đong Đưa Theo Tiếng Nhạc",
                  "sortDescription": "Nhẹ nhàng đong đưa theo nhịp điệu của Jazz Việt",
                  "artists": [
                    {
                      "id": "IWZAW98Z",
                      "name": "TRANG",
                      "link": "/TRANG-VN",
                      "spotlight": false,
                      "alias": "TRANG-VN",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/1/1/7/e117be1b2a2741977b5ed6a853be4567.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/e/1/1/7/e117be1b2a2741977b5ed6a853be4567.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZO698UBB",
                      "totalFollow": 16769
                    },
                    {
                      "id": "IWZAZ8U6",
                      "name": "Hoàng Dũng",
                      "link": "/Nguyen-Hoang-Dung",
                      "spotlight": false,
                      "alias": "Nguyen-Hoang-Dung",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/7/b/3/87b38ebfba352aceab25d24f196003b0.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/7/b/3/87b38ebfba352aceab25d24f196003b0.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZODFZIBZ",
                      "totalFollow": 87479
                    },
                    {
                      "id": "IWZAOAIC",
                      "name": "Tiên Tiên",
                      "link": "/nghe-si/Tien-Tien",
                      "spotlight": false,
                      "alias": "Tien-Tien",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/4/5/a/d45a6d2bdf4894b2249b45d16f31c7a1.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/4/5/a/d45a6d2bdf4894b2249b45d16f31c7a1.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "ZWZBF0OA",
                      "totalFollow": 96757
                    },
                    {
                      "id": "IWZ98UA9",
                      "name": "Vũ Cát Tường",
                      "link": "/Vu-Cat-Tuong",
                      "spotlight": false,
                      "alias": "Vu-Cat-Tuong",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/8/7/3/d87392e24ee10b99988fcea608194751.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/8/7/3/d87392e24ee10b99988fcea608194751.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZOU8DC8Z",
                      "totalFollow": 268540
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ"
                }
              ],
              "link": "/hub/Chill/IWZ9Z0CI.html",
              "itemType": "description",
              "options": {
                "hideTitle": true
              },
              "sectionId": "hEditorTheme"
            },
            {
              "title": "Nhạc Remix Cực Bốc",
              "sectionType": "playlist",
              "viewType": "slider",
              "items": [
                {
                  "encodeId": "Z6BZW0DD",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/c/e/9/8ce9abbbdb04cd95262082d923a0f7dd.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/c/e/9/8ce9abbbdb04cd95262082d923a0f7dd.jpg",
                  "link": "/album/EDM-Viet-Gay-Nghien-Masew-Touliver-K-ICM-Phong-Max/Z6BZW0DD.html",
                  "title": "EDM Việt Gây Nghiện",
                  "sortDescription": "Đặc sản EDM của làng nhạc Việt",
                  "artists": [
                    {
                      "id": "IWZFD77I",
                      "name": "Masew",
                      "link": "/Masew",
                      "spotlight": false,
                      "alias": "Masew",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/e/5/f/2e5ff23e09b1dacccbbd1c6f1ffb4a7b.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/e/5/f/2e5ff23e09b1dacccbbd1c6f1ffb4a7b.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZO697IEW",
                      "totalFollow": 422606
                    },
                    {
                      "id": "IWZ986AE",
                      "name": "Touliver",
                      "link": "/Touliver",
                      "spotlight": false,
                      "alias": "Touliver",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/4/d/3/64d31b03975da6697a6f75a10571b06d.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/6/4/d/3/64d31b03975da6697a6f75a10571b06d.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZBCZCB",
                      "totalFollow": 105897
                    },
                    {
                      "id": "IWZFFOWB",
                      "name": "K-ICM",
                      "link": "/K-ICM",
                      "spotlight": false,
                      "alias": "K-ICM",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/c/e/a/4ceac8b6c213bcaf2841f5afa0709beb.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/c/e/a/4ceac8b6c213bcaf2841f5afa0709beb.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZODE97IC",
                      "totalFollow": 757602
                    },
                    {
                      "id": "IW67EOAU",
                      "name": "Phong Max",
                      "link": "/nghe-si/Phong-Max",
                      "spotlight": false,
                      "alias": "Phong-Max",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/3/6/7/c3676f7ce826bb30d15184d46064de5f.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/3/6/7/c3676f7ce826bb30d15184d46064de5f.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6UW9CZ6I",
                      "totalFollow": 31522
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ"
                },
                {
                  "encodeId": "60DWC7D8",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/1/3/9/0139b1f71ed807473a500a6a37695c65.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/1/3/9/0139b1f71ed807473a500a6a37695c65.jpg",
                  "link": "/album/Ballad-Viet-Remix-Le-Bao-Binh-Quan-A-P-Yen-Tattoo-Chau-Khai-Phong/60DWC7D8.html",
                  "title": "Ballad Việt Remix",
                  "sortDescription": "Ballad Việt được remix đầy mới lạ và cuốn hút",
                  "artists": [
                    {
                      "id": "IWZ9B08F",
                      "name": "Lê Bảo Bình",
                      "link": "/Le-Bao-Binh",
                      "spotlight": false,
                      "alias": "Le-Bao-Binh",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/0/2/3/50235e81f0314d3bcf96633fe2f7665a.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/0/2/3/50235e81f0314d3bcf96633fe2f7665a.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZO6989OW",
                      "totalFollow": 1025708
                    },
                    {
                      "id": "IW6ZUZI8",
                      "name": "Quân A.P",
                      "link": "/Quan-A-P",
                      "spotlight": false,
                      "alias": "Quan-A-P",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/5/c/3/65c36b8d4965ed39880d480df406408b.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/6/5/c/3/65c36b8d4965ed39880d480df406408b.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "6IOWDE70",
                      "totalFollow": 426718
                    },
                    {
                      "id": "IWZA80I8",
                      "name": "Yến Tattoo",
                      "link": "/Yen-Tattoo",
                      "spotlight": false,
                      "alias": "Yen-Tattoo",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/5/1/c/851cecdcfd1680709556fc012e20bf5d.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/5/1/c/851cecdcfd1680709556fc012e20bf5d.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "6UW9BWOO",
                      "totalFollow": 39400
                    },
                    {
                      "id": "IWZ976C7",
                      "name": "Châu Khải Phong",
                      "link": "/Chau-Khai-Phong",
                      "spotlight": false,
                      "alias": "Chau-Khai-Phong",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/9/a/e/c9aecf4e016a9f4f325251c05c4cda03.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/9/a/e/c9aecf4e016a9f4f325251c05c4cda03.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZBOD66",
                      "totalFollow": 578654
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ"
                },
                {
                  "encodeId": "6BDCO907",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/e/6/c/4e6cea49a6cf2f1073858a49aeb2a8b2.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/e/6/c/4e6cea49a6cf2f1073858a49aeb2a8b2.jpg",
                  "link": "/album/House-Lak-Masew-Phao-Tang-Duy-Tan-Phong-Max/6BDCO907.html",
                  "title": "House Lak",
                  "sortDescription": "Lắc lư cùng những giai điệu cực cuốn",
                  "artists": [
                    {
                      "id": "IWZFD77I",
                      "name": "Masew",
                      "link": "/Masew",
                      "spotlight": false,
                      "alias": "Masew",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/e/5/f/2e5ff23e09b1dacccbbd1c6f1ffb4a7b.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/e/5/f/2e5ff23e09b1dacccbbd1c6f1ffb4a7b.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZO697IEW",
                      "totalFollow": 422606
                    },
                    {
                      "id": "IW6Z87FU",
                      "name": "Pháo",
                      "link": "/Phao",
                      "spotlight": false,
                      "alias": "Phao",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/2/e/b/d2eb54141a77ef263640d735d565615d.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/2/e/b/d2eb54141a77ef263640d735d565615d.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "6UW9CWZO",
                      "totalFollow": 78682
                    },
                    {
                      "id": "IW6W8FO8",
                      "name": "Tăng Duy Tân",
                      "link": "/Tang-Duy-Tan",
                      "spotlight": false,
                      "alias": "Tang-Duy-Tan",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/7/1/7/5717ff675b04fe5d6c619b92a0b98916.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/7/1/7/5717ff675b04fe5d6c619b92a0b98916.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "6UW9B9UA",
                      "totalFollow": 73879
                    },
                    {
                      "id": "IW67EOAU",
                      "name": "Phong Max",
                      "link": "/nghe-si/Phong-Max",
                      "spotlight": false,
                      "alias": "Phong-Max",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/3/6/7/c3676f7ce826bb30d15184d46064de5f.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/3/6/7/c3676f7ce826bb30d15184d46064de5f.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6UW9CZ6I",
                      "totalFollow": 31522
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ"
                },
                {
                  "encodeId": "ZUAZ97OC",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/c/3/e/1c3e229dcfd13ee46b634e93bcf4aa62.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/c/3/e/1c3e229dcfd13ee46b634e93bcf4aa62.jpg",
                  "link": "/album/Remix-Thinh-Hanh-Hoang-Thuy-Linh-Dat-Long-Vinh-Phao-Dunghoangpham/ZUAZ97OC.html",
                  "title": "Remix Thịnh Hành",
                  "sortDescription": "Lắc lư với những bản Remix hot nhất mạng xã hội",
                  "artists": [
                    {
                      "id": "IWZ9ZZB6",
                      "name": "Hoàng Thùy Linh",
                      "link": "/Hoang-Thuy-Linh",
                      "spotlight": false,
                      "alias": "Hoang-Thuy-Linh",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/b/e/a/bbea30c997bf82ee4f90882734fdf17a.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/b/b/e/a/bbea30c997bf82ee4f90882734fdf17a.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZOZ9678O",
                      "totalFollow": 146995
                    },
                    {
                      "id": "IW76FDO7",
                      "name": "Đạt Long Vinh",
                      "link": "/nghe-si/Dat-Long-Vinh",
                      "spotlight": false,
                      "alias": "Dat-Long-Vinh",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/5/9/c/d59cd1511d89f889030de8a63dfa07ab.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/5/9/c/d59cd1511d89f889030de8a63dfa07ab.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6ACWIBZ0",
                      "totalFollow": 17326
                    },
                    {
                      "id": "IW6Z87FU",
                      "name": "Pháo",
                      "link": "/Phao",
                      "spotlight": false,
                      "alias": "Phao",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/2/e/b/d2eb54141a77ef263640d735d565615d.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/2/e/b/d2eb54141a77ef263640d735d565615d.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "6UW9CWZO",
                      "totalFollow": 78682
                    },
                    {
                      "id": "IW76EDEC",
                      "name": "Dunghoangpham",
                      "link": "/nghe-si/Dunghoangpham",
                      "spotlight": false,
                      "alias": "Dunghoangpham",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/0/5/6/7056cb2ccbef8dc5048eacbb24d91ca1.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/0/5/6/7056cb2ccbef8dc5048eacbb24d91ca1.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6ABFC9AO",
                      "totalFollow": 31081
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ"
                },
                {
                  "encodeId": "ZU6CO990",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/6/f/4/d6f41c070ea65121adf0e800704ff471.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/6/f/4/d6f41c070ea65121adf0e800704ff471.jpg",
                  "link": "/album/Dance-Viet-Hay-Nhat-Masew-K-ICM-SlimV-Hoaprox/ZU6CO990.html",
                  "title": "Dance Việt Hay Nhất",
                  "sortDescription": "Quẩy mạnh cùng những bản Dance hay nhất đến từ các nghệ sĩ Việt",
                  "artists": [
                    {
                      "id": "IWZFD77I",
                      "name": "Masew",
                      "link": "/Masew",
                      "spotlight": false,
                      "alias": "Masew",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/e/5/f/2e5ff23e09b1dacccbbd1c6f1ffb4a7b.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/e/5/f/2e5ff23e09b1dacccbbd1c6f1ffb4a7b.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZO697IEW",
                      "totalFollow": 422606
                    },
                    {
                      "id": "IWZFFOWB",
                      "name": "K-ICM",
                      "link": "/K-ICM",
                      "spotlight": false,
                      "alias": "K-ICM",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/c/e/a/4ceac8b6c213bcaf2841f5afa0709beb.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/c/e/a/4ceac8b6c213bcaf2841f5afa0709beb.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZODE97IC",
                      "totalFollow": 757602
                    },
                    {
                      "id": "IWZAWEBU",
                      "name": "SlimV",
                      "link": "/SlimV",
                      "spotlight": false,
                      "alias": "SlimV",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/2/6/2/a2624d8eeaad58872c65cd8a3c38b25e.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/2/6/2/a2624d8eeaad58872c65cd8a3c38b25e.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZOD7ZIU0",
                      "totalFollow": 61707
                    },
                    {
                      "id": "IWZAZU8B",
                      "name": "Hoaprox",
                      "link": "/Hoaprox",
                      "spotlight": false,
                      "alias": "Hoaprox",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/f/3/f/df3f9ee068a40c996b46d7b0c62f24f6.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/f/3/f/df3f9ee068a40c996b46d7b0c62f24f6.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZCW7EW",
                      "totalFollow": 55298
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ"
                },
                {
                  "encodeId": "Z6BO9EOA",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/2/5/6/8256c9aa218bb5a3d99edc6e193b5a31.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/2/5/6/8256c9aa218bb5a3d99edc6e193b5a31.jpg",
                  "link": "/album/Nhac-Tre-Remix-Chau-Khai-Phong-Huong-Ly-Thanh-Dat-Khang-Viet/Z6BO9EOA.html",
                  "title": "Nhạc Trẻ Remix",
                  "sortDescription": "Nhạc trẻ Remix cực bốc cực hay",
                  "artists": [
                    {
                      "id": "IWZ976C7",
                      "name": "Châu Khải Phong",
                      "link": "/Chau-Khai-Phong",
                      "spotlight": false,
                      "alias": "Chau-Khai-Phong",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/9/a/e/c9aecf4e016a9f4f325251c05c4cda03.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/9/a/e/c9aecf4e016a9f4f325251c05c4cda03.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZBOD66",
                      "totalFollow": 578654
                    },
                    {
                      "id": "IW6ZO9UB",
                      "name": "Hương Ly",
                      "link": "/Huong-Ly",
                      "spotlight": false,
                      "alias": "Huong-Ly",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/f/3/0/7f30b1a5ea13a558838d9ad09f0a1247.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/f/3/0/7f30b1a5ea13a558838d9ad09f0a1247.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZZ67898D",
                      "totalFollow": 701270
                    },
                    {
                      "id": "IW6BZA76",
                      "name": "Thành Đạt",
                      "link": "/nghe-si/Thanh-Dat",
                      "spotlight": false,
                      "alias": "Thanh-Dat",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/7/9/b/379b2d8ae929245c1ef83a83c6cb3dec.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/7/9/b/379b2d8ae929245c1ef83a83c6cb3dec.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "S7FB9EF6",
                      "totalFollow": 19948
                    },
                    {
                      "id": "IWZ9ZB7D",
                      "name": "Khang Việt",
                      "link": "/Khang-Viet",
                      "spotlight": false,
                      "alias": "Khang-Viet",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/9/5/0/8950a629935a57c1a31ed8148cbb51e6.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/9/5/0/8950a629935a57c1a31ed8148cbb51e6.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZB0IAO",
                      "totalFollow": 68575
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ"
                },
                {
                  "encodeId": "ZBZ99U77",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/d/1/7/fd1721227e98b8241b1e64565927d9a1.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/d/1/7/fd1721227e98b8241b1e64565927d9a1.jpg",
                  "link": "/album/V-Pop-Remix-Son-Tung-M-TP-Wren-Evans-HIEUTHUHAI-Hoa-Minzy/ZBZ99U77.html",
                  "title": "V-Pop Remix",
                  "sortDescription": "Lên là lên là lên với các bản V-Pop Remix sôi động",
                  "artists": [
                    {
                      "id": "IWZ97DB0",
                      "name": "Sơn Tùng M-TP",
                      "link": "/Son-Tung-M-TP",
                      "spotlight": false,
                      "alias": "Son-Tung-M-TP",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/f/b/f/1/fbf16d7352a3eea6be8cf5d4b217516d.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/f/b/f/1/fbf16d7352a3eea6be8cf5d4b217516d.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZAC9BF",
                      "totalFollow": 2469999
                    },
                    {
                      "id": "IW6BCICZ",
                      "name": "Wren Evans",
                      "link": "/Wren-Evans-IW6BCICZ",
                      "spotlight": false,
                      "alias": "Wren-Evans-IW6BCICZ",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/c/6/0/ac60ef152ce6f20e84ccc27d5eb4ceda.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/c/6/0/ac60ef152ce6f20e84ccc27d5eb4ceda.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "68BZI9C7",
                      "totalFollow": 16993
                    },
                    {
                      "id": "IW6ZZ690",
                      "name": "HIEUTHUHAI",
                      "link": "/nghe-si/HIEUTHUHAI",
                      "spotlight": false,
                      "alias": "HIEUTHUHAI",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/2/a/1/c2a154106353063625c9412ed20443a0.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/2/a/1/c2a154106353063625c9412ed20443a0.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6UW9BFUW",
                      "totalFollow": 88714
                    },
                    {
                      "id": "IWZ9DDFI",
                      "name": "Hòa Minzy",
                      "link": "/Hoa-Minzy",
                      "spotlight": true,
                      "alias": "Hoa-Minzy",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/5/6/a/156a2f8d8876bfd76afd83b16ae4427e.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/5/6/a/156a2f8d8876bfd76afd83b16ae4427e.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZCU80C",
                      "totalFollow": 272646
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ"
                },
                {
                  "encodeId": "ZODEA78Z",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/d/5/c/fd5cc75f10ef7e068d299b91ba16e5e5.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/d/5/c/fd5cc75f10ef7e068d299b91ba16e5e5.jpg",
                  "link": "/album/Nhac-Tre-Vinahouse-Chau-Khai-Phong-Phan-Duy-Anh-Thuong-Vo-Nhat-Phong/ZODEA78Z.html",
                  "title": "Nhạc Trẻ Vinahouse",
                  "sortDescription": "Thuốc đắng giã tật, nhạc giựt lên luôn!",
                  "artists": [
                    {
                      "id": "IWZ976C7",
                      "name": "Châu Khải Phong",
                      "link": "/Chau-Khai-Phong",
                      "spotlight": false,
                      "alias": "Chau-Khai-Phong",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/9/a/e/c9aecf4e016a9f4f325251c05c4cda03.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/9/a/e/c9aecf4e016a9f4f325251c05c4cda03.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZBOD66",
                      "totalFollow": 578654
                    },
                    {
                      "id": "IWZ99IO9",
                      "name": "Phan Duy Anh",
                      "link": "/Phan-Duy-Anh",
                      "spotlight": false,
                      "alias": "Phan-Duy-Anh",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/7/7/a/b77ac5aec77b7df5c628293f9e1d6232.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/b/7/7/a/b77ac5aec77b7df5c628293f9e1d6232.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZODEFA66",
                      "totalFollow": 103163
                    },
                    {
                      "id": "IWZFEZIC",
                      "name": "Thương Võ",
                      "link": "/Thuong-Vo",
                      "spotlight": false,
                      "alias": "Thuong-Vo",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/d/3/c/8d3cd512d25619c27c320e2808745d05.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/d/3/c/8d3cd512d25619c27c320e2808745d05.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "6UW9B6OD",
                      "totalFollow": 164037
                    },
                    {
                      "id": "IW6W7AZD",
                      "name": "Nhật Phong",
                      "link": "/Nhat-Phong",
                      "spotlight": false,
                      "alias": "Nhat-Phong",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/c/2/1/4c21ee2fdbf40b1cb9090d6eda4151ef.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/c/2/1/4c21ee2fdbf40b1cb9090d6eda4151ef.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "60IZFEFU",
                      "totalFollow": 226227
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ"
                }
              ],
              "link": "/hub/Remix/IWZ9Z0BO.html",
              "itemType": "description",
              "options": {
                "hideTitle": true
              },
              "sectionId": "hEditorTheme3"
            },
            {
              "title": "Tâm trạng tan chậm",
              "sectionType": "playlist",
              "viewType": "slider",
              "items": [
                {
                  "encodeId": "ZO6I99E8",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/6/7/3/e67343b69f8297ec456d164d52abdb82.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/6/7/3/e67343b69f8297ec456d164d52abdb82.jpg",
                  "link": "/album/dieu-buon-nhat-Van-Mai-Huong-Toc-Tien-Quan-A-P-Trung-Quan/ZO6I99E8.html",
                  "title": "điều buồn nhất",
                  "sortDescription": "Có những nỗi buồn không biết chia sẻ cùng ai...",
                  "artists": [
                    {
                      "id": "IWZ96C8U",
                      "name": "Văn Mai Hương",
                      "link": "/Van-Mai-Huong",
                      "spotlight": false,
                      "alias": "Van-Mai-Huong",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/a/c/b/1acb526eb801e6a4e1579ff4c4a2e872.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/a/c/b/1acb526eb801e6a4e1579ff4c4a2e872.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZ9DAD6",
                      "totalFollow": 64622
                    },
                    {
                      "id": "IWZ9ZUCI",
                      "name": "Tóc Tiên",
                      "link": "/Toc-Tien",
                      "spotlight": false,
                      "alias": "Toc-Tien",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/2/0/9/2209495c8a8ad13a01f13fb60a5769d1.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/2/0/9/2209495c8a8ad13a01f13fb60a5769d1.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZBCIZ7",
                      "totalFollow": 93938
                    },
                    {
                      "id": "IW6ZUZI8",
                      "name": "Quân A.P",
                      "link": "/Quan-A-P",
                      "spotlight": false,
                      "alias": "Quan-A-P",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/5/c/3/65c36b8d4965ed39880d480df406408b.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/6/5/c/3/65c36b8d4965ed39880d480df406408b.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "6IOWDE70",
                      "totalFollow": 426718
                    },
                    {
                      "id": "IWZ96C8Z",
                      "name": "Trung Quân",
                      "link": "/Trung-Quan",
                      "spotlight": false,
                      "alias": "Trung-Quan",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/c/e/3/8ce309a5b67a0b044f60bee2f8372707.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/c/e/3/8ce309a5b67a0b044f60bee2f8372707.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZBIBBI",
                      "totalFollow": 166282
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ"
                },
                {
                  "encodeId": "6IOE89CF",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/6/1/e/e61e02571410b153d445067f22f39d36.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/6/1/e/e61e02571410b153d445067f22f39d36.jpg",
                  "link": "/album/tam-tinh-lau-phai-Orange-Emcee-L-Da-LAB-T-R-I-Duong-Edward/6IOE89CF.html",
                  "title": "tâm tình lâu phai",
                  "sortDescription": "Chút tâm tình này xin phép được lâu phai",
                  "artists": [
                    {
                      "id": "IWZFFWB7",
                      "name": "Orange",
                      "link": "/Orange",
                      "spotlight": false,
                      "alias": "Orange",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/1/6/3/0163e5f6bc297ea051e3efacd27ac7d7.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/0/1/6/3/0163e5f6bc297ea051e3efacd27ac7d7.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZUO78ZO7",
                      "totalFollow": 82993
                    },
                    {
                      "id": "IW6W88E8",
                      "name": "T.R.I",
                      "link": "/T-R-I",
                      "spotlight": false,
                      "alias": "T-R-I",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/9/d/8/c/9d8cebbdd8a96e9267699b0d0828616b.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/9/d/8/c/9d8cebbdd8a96e9267699b0d0828616b.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "6UW9B8BB",
                      "totalFollow": 32472
                    },
                    {
                      "id": "IWZ97FE0",
                      "name": "Dương Edward",
                      "link": "/Duong-Edward",
                      "spotlight": false,
                      "alias": "Duong-Edward",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/d/7/4/7d741800ca3ae4cacb624fc8d2358678.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/d/7/4/7d741800ca3ae4cacb624fc8d2358678.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZODE9BDC",
                      "totalFollow": 26552
                    }
                  ],
                  "artistsNames": "Orange, Emcee L (Da LAB), T.R.I, Dương Edward"
                },
                {
                  "encodeId": "6I68ZWEA",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/0/1/1/101112c380993dacfd37836080b463dc.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/0/1/1/101112c380993dacfd37836080b463dc.jpg",
                  "link": "/album/them-mot-ai-cung-du-thua-JUUN-D-Bao-Anh-ERIK-Miu-Le/6I68ZWEA.html",
                  "title": "thêm một ai cũng dư thừa",
                  "sortDescription": "Người ấy làm trái tim bạn tan vỡ, ấy vậy mà bạn vẫn yêu người ấy với từng mảnh vỡ nhỏ",
                  "artists": [
                    {
                      "id": "IWZAZBOC",
                      "name": "JUUN D",
                      "link": "/JUUN-D",
                      "spotlight": false,
                      "alias": "JUUN-D",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/6/c/4/d6c4eb1b358a7b7a0795e26c62f7d988.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/6/c/4/d6c4eb1b358a7b7a0795e26c62f7d988.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZOAD0FUE",
                      "totalFollow": 33215
                    },
                    {
                      "id": "IWZ99B00",
                      "name": "Bảo Anh",
                      "link": "/Bao-Anh",
                      "spotlight": false,
                      "alias": "Bao-Anh",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/9/9/b/799b387d346a819ece784725f7d81aa3.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/9/9/b/799b387d346a819ece784725f7d81aa3.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZBIBB0",
                      "totalFollow": 313808
                    },
                    {
                      "id": "IWZA6CIZ",
                      "name": "ERIK",
                      "link": "/ERIK",
                      "spotlight": true,
                      "alias": "ERIK",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/f/1/c/0/f1c046a525a1b3894afa2f397cb2ed42.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/f/1/c/0/f1c046a525a1b3894afa2f397cb2ed42.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZOZ9FWW7",
                      "totalFollow": 501448
                    },
                    {
                      "id": "IWZ96IAC",
                      "name": "Miu Lê",
                      "link": "/Miu-Le",
                      "spotlight": false,
                      "alias": "Miu-Le",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/4/f/e/1/4fe14d271ac0030b7c5cf2461529c637.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/cover/4/f/e/1/4fe14d271ac0030b7c5cf2461529c637.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZACAOI",
                      "totalFollow": 165451
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ"
                },
                {
                  "encodeId": "ZOBIW6UZ",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/b/7/a/ab7aec69a53caaa0225097e2a4495dcb.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/b/7/a/ab7aec69a53caaa0225097e2a4495dcb.jpg",
                  "link": "/album/tinh-dau-co-phai-tinh-dau-Andiez-T-R-I-Kai-Dinh-SOOBIN/ZOBIW6UZ.html",
                  "title": "tình đầu có phải tình đau?",
                  "sortDescription": "Dành cả thanh xuân bên nhau, vậy mà chẳng thể cùng nhau đi đến cuối con đường",
                  "artists": [
                    {
                      "id": "IWZ98O8W",
                      "name": "Andiez",
                      "link": "/Andiez",
                      "spotlight": false,
                      "alias": "Andiez",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/5/a/e/75ae579a51cfa505932f59397eac8d69.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/5/a/e/75ae579a51cfa505932f59397eac8d69.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZO698C98",
                      "totalFollow": 54539
                    },
                    {
                      "id": "IW6W88E8",
                      "name": "T.R.I",
                      "link": "/T-R-I",
                      "spotlight": false,
                      "alias": "T-R-I",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/9/d/8/c/9d8cebbdd8a96e9267699b0d0828616b.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/9/d/8/c/9d8cebbdd8a96e9267699b0d0828616b.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "6UW9B8BB",
                      "totalFollow": 32472
                    },
                    {
                      "id": "IWZ9FFE0",
                      "name": "Kai Đinh",
                      "link": "/Kai-Dinh",
                      "spotlight": false,
                      "alias": "Kai-Dinh",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/5/7/a/357a7b5f363a27d11a52ac5a2826e1c4.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/5/7/a/357a7b5f363a27d11a52ac5a2826e1c4.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZOZAOIEU",
                      "totalFollow": 12748
                    },
                    {
                      "id": "IWZ997CU",
                      "name": "SOOBIN",
                      "link": "/nghe-si/SOOBIN",
                      "spotlight": true,
                      "alias": "SOOBIN",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/5/b/d/25bd8e70180cbf5714c3c8b0a3b57834.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/5/b/d/25bd8e70180cbf5714c3c8b0a3b57834.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "ZWZAEAD9",
                      "totalFollow": 510117
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ"
                },
                {
                  "encodeId": "ZOB9UBI0",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/b/b/b/8bbbad6894b04a0283aa1400edcdc537.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/b/b/b/8bbbad6894b04a0283aa1400edcdc537.jpg",
                  "link": "/album/hoa-tan-tinh-tan-Tang-Phuc-Truong-Thao-Nhi-Barry-Nam-Bao-Huong-Ly/ZOB9UBI0.html",
                  "title": "hoa tàn, tình tan",
                  "sortDescription": "Dù rằng đã hết lòng mà tình vẫn hóa hư không",
                  "artists": [
                    {
                      "id": "IWZAEC86",
                      "name": "Tăng Phúc",
                      "link": "/Tang-Phuc",
                      "spotlight": false,
                      "alias": "Tang-Phuc",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/c/c/2/2cc280cd1612b15670f2f6e91523cfa7.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/c/c/2/2cc280cd1612b15670f2f6e91523cfa7.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZOEIZOWF",
                      "totalFollow": 108632
                    },
                    {
                      "id": "IWZ9EDAE",
                      "name": "Trương Thảo Nhi",
                      "link": "/Truong-Thao-Nhi",
                      "spotlight": false,
                      "alias": "Truong-Thao-Nhi",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/9/2/c/8/92c8a57cdff1e44fa0543345e8e233a8.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/9/2/c/8/92c8a57cdff1e44fa0543345e8e233a8.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZOZAOIA7",
                      "totalFollow": 35625
                    },
                    {
                      "id": "IW6BAU08",
                      "name": "Barry Nam Bảo",
                      "link": "/nghe-si/Barry-Nam-Bao",
                      "spotlight": false,
                      "alias": "Barry-Nam-Bao",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/8/0/4/b8043c92828167cbcbe9818ddb7ab0ed.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/b/8/0/4/b8043c92828167cbcbe9818ddb7ab0ed.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "68IB8F7F",
                      "totalFollow": 627
                    },
                    {
                      "id": "IW6ZO9UB",
                      "name": "Hương Ly",
                      "link": "/Huong-Ly",
                      "spotlight": false,
                      "alias": "Huong-Ly",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/f/3/0/7f30b1a5ea13a558838d9ad09f0a1247.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/f/3/0/7f30b1a5ea13a558838d9ad09f0a1247.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZZ67898D",
                      "totalFollow": 701270
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ"
                },
                {
                  "encodeId": "ZU8UBW90",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/c/6/b/ac6b3af3ede5d32775ece42ed14b26bf.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/c/6/b/ac6b3af3ede5d32775ece42ed14b26bf.jpg",
                  "link": "/album/mot-chut-vo-nat-mot-chut-co-don-Bui-Anh-Tuan-Trung-Quan-Vu-Cat-Tuong-Ha-Nhi/ZU8UBW90.html",
                  "title": "một chút vỡ nát một chút cô đơn",
                  "sortDescription": "Hát có thể làm vơi đi bớt nỗi lòng, nhưng liệu có khỏa lấp được vỡ nát trong tim?",
                  "artists": [
                    {
                      "id": "IWZ9708Z",
                      "name": "Bùi Anh Tuấn",
                      "link": "/Bui-Anh-Tuan",
                      "spotlight": false,
                      "alias": "Bui-Anh-Tuan",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/1/41f229e867c3787ed1ddee90a4bd2bbb_1506073807.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/1/41f229e867c3787ed1ddee90a4bd2bbb_1506073807.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZAWEZB",
                      "totalFollow": 162252
                    },
                    {
                      "id": "IWZ96C8Z",
                      "name": "Trung Quân",
                      "link": "/Trung-Quan",
                      "spotlight": false,
                      "alias": "Trung-Quan",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/c/e/3/8ce309a5b67a0b044f60bee2f8372707.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/c/e/3/8ce309a5b67a0b044f60bee2f8372707.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZBIBBI",
                      "totalFollow": 166282
                    },
                    {
                      "id": "IWZ98UA9",
                      "name": "Vũ Cát Tường",
                      "link": "/Vu-Cat-Tuong",
                      "spotlight": false,
                      "alias": "Vu-Cat-Tuong",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/8/7/3/d87392e24ee10b99988fcea608194751.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/8/7/3/d87392e24ee10b99988fcea608194751.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZOU8DC8Z",
                      "totalFollow": 268540
                    },
                    {
                      "id": "IWZA6806",
                      "name": "Hà Nhi",
                      "link": "/Ha-Nhi",
                      "spotlight": false,
                      "alias": "Ha-Nhi",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/7/f/9/c7f96bbea347cea9c5db6b1e6ff1e9ac.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/7/f/9/c7f96bbea347cea9c5db6b1e6ff1e9ac.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "6UW9B008",
                      "totalFollow": 46631
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ"
                },
                {
                  "encodeId": "60CDWOEC",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/e/a/c/6eac9818f03e98b4e0cf5009109121dc.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/e/a/c/6eac9818f03e98b4e0cf5009109121dc.jpg",
                  "link": "/album/tam-trang-tan-cham-GREY-D-Bao-Anh-W-N-Orange/60CDWOEC.html",
                  "title": "tâm trạng tan chậm",
                  "sortDescription": "Đóng băng thời gian, tan chầm chậm theo những cảm xúc",
                  "artists": [
                    {
                      "id": "IWZCOUW8",
                      "name": "GREY D",
                      "link": "/GREY-D-Doan-The-Lan",
                      "spotlight": false,
                      "alias": "GREY-D-Doan-The-Lan",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/e/b/8/eeb8663fb09e5b1f32491352e252495b.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/e/e/b/8/eeb8663fb09e5b1f32491352e252495b.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "6UW9BUUU",
                      "totalFollow": 16607
                    },
                    {
                      "id": "IWZ99B00",
                      "name": "Bảo Anh",
                      "link": "/Bao-Anh",
                      "spotlight": false,
                      "alias": "Bao-Anh",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/9/9/b/799b387d346a819ece784725f7d81aa3.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/9/9/b/799b387d346a819ece784725f7d81aa3.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZBIBB0",
                      "totalFollow": 313808
                    },
                    {
                      "id": "IW688WW0",
                      "name": "W/N",
                      "link": "/nghe-si/W-n",
                      "spotlight": false,
                      "alias": "W-n",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/a/a/e/7aae3be0b7eccc2e4b34e58379d13f3f.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/a/a/e/7aae3be0b7eccc2e4b34e58379d13f3f.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6ZU6EO89",
                      "totalFollow": 41687
                    },
                    {
                      "id": "IWZFFWB7",
                      "name": "Orange",
                      "link": "/Orange",
                      "spotlight": false,
                      "alias": "Orange",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/1/6/3/0163e5f6bc297ea051e3efacd27ac7d7.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/0/1/6/3/0163e5f6bc297ea051e3efacd27ac7d7.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZUO78ZO7",
                      "totalFollow": 82993
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ"
                },
                {
                  "encodeId": "67IZCU08",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/8/f/b/28fb7d05259b4724f5ec8aa4e0467b5e.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/8/f/b/28fb7d05259b4724f5ec8aa4e0467b5e.jpg",
                  "link": "/album/nhac-buon-cho-nguoi-co-don-Mr-Siro-Hien-Ho-Vuong-Anh-Tu-Bao-Anh/67IZCU08.html",
                  "title": "nhạc buồn cho người cô đơn",
                  "sortDescription": "Chẳng có nơi nào yên bình được như ta bên nhau",
                  "artists": [
                    {
                      "id": "IWZ98609",
                      "name": "Mr. Siro",
                      "link": "/Mr-Siro",
                      "spotlight": true,
                      "alias": "Mr-Siro",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/d/d/c/dddc859b6759898ee13efe2627230ec3.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/d/d/c/dddc859b6759898ee13efe2627230ec3.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZAEZZD",
                      "totalFollow": 830101
                    },
                    {
                      "id": "IWZFDDF6",
                      "name": "Hiền Hồ",
                      "link": "/Hien-Ho",
                      "spotlight": false,
                      "alias": "Hien-Ho",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/9/e/e/8/9ee86aab68b14a3618de03c31aee6127.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/9/e/e/8/9ee86aab68b14a3618de03c31aee6127.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZODE9BE0",
                      "totalFollow": 254761
                    },
                    {
                      "id": "IWZ9FE6A",
                      "name": "Vương Anh Tú",
                      "link": "/Vuong-Anh-Tu",
                      "spotlight": false,
                      "alias": "Vuong-Anh-Tu",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/9/b/a/79ba26ddd8a7d4cdbee481a947e1861f.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/9/b/a/79ba26ddd8a7d4cdbee481a947e1861f.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZOZAOI8A",
                      "totalFollow": 93445
                    },
                    {
                      "id": "IWZ99B00",
                      "name": "Bảo Anh",
                      "link": "/Bao-Anh",
                      "spotlight": false,
                      "alias": "Bao-Anh",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/9/9/b/799b387d346a819ece784725f7d81aa3.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/9/9/b/799b387d346a819ece784725f7d81aa3.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZBIBB0",
                      "totalFollow": 313808
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ"
                }
              ],
              "link": "/hub/Giai-Dieu-Buon/IWZ9Z099.html",
              "itemType": "description",
              "options": {
                "hideTitle": true
              },
              "sectionId": "hEditorTheme4"
            },
            {
              "banner": "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/chart-new-release-vn.png",
              "type": "song",
              "link": "/moi-phat-hanh",
              "title": "BXH Nhạc Mới",
              "sectionType": "newReleaseChart",
              "sectionId": "hNewrelease",
              "viewType": "slider",
              "items": [
                {
                  "encodeId": "Z7ZUF0OC",
                  "title": "Tự Em Thương Mình",
                  "alias": "Tu-Em-Thuong-Minh-Huong-Ly",
                  "isOffical": true,
                  "username": "",
                  "artistsNames": "Hương Ly",
                  "artists": [
                    {
                      "id": "IW6ZO9UB",
                      "name": "Hương Ly",
                      "link": "/Huong-Ly",
                      "spotlight": false,
                      "alias": "Huong-Ly",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/f/3/0/7f30b1a5ea13a558838d9ad09f0a1247.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/f/3/0/7f30b1a5ea13a558838d9ad09f0a1247.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZZ67898D"
                    }
                  ],
                  "isWorldWide": true,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/4/0/a/8/40a850c9056f47e54736e8a956b68650.jpg",
                  "link": "/bai-hat/Tu-Em-Thuong-Minh-Huong-Ly/Z7ZUF0OC.html",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/4/0/a/8/40a850c9056f47e54736e8a956b68650.jpg",
                  "duration": 325,
                  "zingChoice": false,
                  "isPrivate": false,
                  "preRelease": false,
                  "releaseDate": 1710507600,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ97FCD"
                  ],
                  "album": {
                    "encodeId": "SC00FA80",
                    "title": "Tự Em Thương Mình (Single)",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/4/0/a/8/40a850c9056f47e54736e8a956b68650.jpg",
                    "isoffical": true,
                    "link": "/album/Tu-Em-Thuong-Minh-Single-Huong-Ly/SC00FA80.html",
                    "isIndie": false,
                    "releaseDate": "15/03/2024",
                    "sortDescription": "",
                    "releasedAt": 1710507600000,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "PR": false,
                    "artists": [
                      {
                        "id": "IW6ZO9UB",
                        "name": "Hương Ly",
                        "link": "/Huong-Ly",
                        "spotlight": false,
                        "alias": "Huong-Ly",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/f/3/0/7f30b1a5ea13a558838d9ad09f0a1247.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/f/3/0/7f30b1a5ea13a558838d9ad09f0a1247.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZZ67898D",
                        "totalFollow": 701270
                      }
                    ],
                    "artistsNames": "Hương Ly"
                  },
                  "distributor": "MIXUS",
                  "indicators": [
                    
                  ],
                  "isIndie": false,
                  "streamingStatus": 1,
                  "allowAudioAds": true,
                  "hasLyric": true,
                  "rakingStatus": 0,
                  "releasedAt": 1710507600
                },
                {
                  "encodeId": "Z7Z0DCU9",
                  "title": "Nâng Chén Tiêu Sầu",
                  "alias": "Nang-Chen-Tieu-Sau-Bich-Phuong",
                  "isOffical": true,
                  "username": "",
                  "artistsNames": "Bích Phương",
                  "artists": [
                    {
                      "id": "IWZ96C86",
                      "name": "Bích Phương",
                      "link": "/Bich-Phuong",
                      "spotlight": false,
                      "alias": "Bich-Phuong",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/e/7/3/7e736bd660db22b75110df5605c180fe.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/e/7/3/7e736bd660db22b75110df5605c180fe.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZADD7O"
                    }
                  ],
                  "isWorldWide": true,
                  "previewInfo": {
                    "startTime": 0,
                    "endTime": 45
                  },
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/d/1/e/d/d1ede336883f38e8a4081f18731202ec.jpg",
                  "link": "/bai-hat/Nang-Chen-Tieu-Sau-Bich-Phuong/Z7Z0DCU9.html",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/1/e/d/d1ede336883f38e8a4081f18731202ec.jpg",
                  "duration": 185,
                  "zingChoice": false,
                  "isPrivate": false,
                  "preRelease": false,
                  "releaseDate": 1709830800,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ97FCD"
                  ],
                  "album": {
                    "encodeId": "6BFFW9UZ",
                    "title": "Nâng Chén Tiêu Sầu (Single)",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/d/1/e/d/d1ede336883f38e8a4081f18731202ec.jpg",
                    "isoffical": true,
                    "link": "/album/Nang-Chen-Tieu-Sau-Single-Bich-Phuong/6BFFW9UZ.html",
                    "isIndie": false,
                    "releaseDate": "08/03/2024",
                    "sortDescription": "",
                    "releasedAt": 1709830800000,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "PR": false,
                    "artists": [
                      {
                        "id": "IWZ96C86",
                        "name": "Bích Phương",
                        "link": "/Bich-Phuong",
                        "spotlight": false,
                        "alias": "Bich-Phuong",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/e/7/3/7e736bd660db22b75110df5605c180fe.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/e/7/3/7e736bd660db22b75110df5605c180fe.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZADD7O",
                        "totalFollow": 414031
                      }
                    ],
                    "artistsNames": "Bích Phương"
                  },
                  "distributor": "Yin Yang Media",
                  "indicators": [
                    
                  ],
                  "isIndie": false,
                  "streamingStatus": 1,
                  "allowAudioAds": true,
                  "hasLyric": true,
                  "rakingStatus": 1,
                  "releasedAt": 1709830800
                },
                {
                  "encodeId": "Z7ZI8IZZ",
                  "title": "Anh Sẽ Sớm Quên Thôi",
                  "alias": "Anh-Se-Som-Quen-Thoi-Duong-Edward",
                  "isOffical": true,
                  "username": "",
                  "artistsNames": "Dương Edward",
                  "artists": [
                    {
                      "id": "IWZ97FE0",
                      "name": "Dương Edward",
                      "link": "/Duong-Edward",
                      "spotlight": false,
                      "alias": "Duong-Edward",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/d/7/4/7d741800ca3ae4cacb624fc8d2358678.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/d/7/4/7d741800ca3ae4cacb624fc8d2358678.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZODE9BDC"
                    }
                  ],
                  "isWorldWide": true,
                  "previewInfo": {
                    "startTime": 0,
                    "endTime": 45
                  },
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/0/0/3/500343c00da8571f92a294a0f3da9185.jpg",
                  "link": "/bai-hat/Anh-Se-Som-Quen-Thoi-Duong-Edward/Z7ZI8IZZ.html",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/5/0/0/3/500343c00da8571f92a294a0f3da9185.jpg",
                  "duration": 313,
                  "zingChoice": false,
                  "isPrivate": false,
                  "preRelease": false,
                  "releaseDate": 1710421200,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ97FCD"
                  ],
                  "album": {
                    "encodeId": "SBFF68CF",
                    "title": "Anh Sẽ Sớm Quên Thôi (Single)",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/5/0/0/3/500343c00da8571f92a294a0f3da9185.jpg",
                    "isoffical": true,
                    "link": "/album/Anh-Se-Som-Quen-Thoi-Single-Duong-Edward/SBFF68CF.html",
                    "isIndie": false,
                    "releaseDate": "14/03/2024",
                    "sortDescription": "",
                    "releasedAt": 1710421200000,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "PR": false,
                    "artists": [
                      {
                        "id": "IWZ97FE0",
                        "name": "Dương Edward",
                        "link": "/Duong-Edward",
                        "spotlight": false,
                        "alias": "Duong-Edward",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/d/7/4/7d741800ca3ae4cacb624fc8d2358678.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/d/7/4/7d741800ca3ae4cacb624fc8d2358678.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZODE9BDC",
                        "totalFollow": 26552
                      }
                    ],
                    "artistsNames": "Dương Edward"
                  },
                  "distributor": "LOOPS Music",
                  "indicators": [
                    
                  ],
                  "isIndie": false,
                  "mvlink": "/video-clip/Anh-Se-Som-Quen-Thoi-Duong-Edward/Z7ZI8IZZ.html",
                  "streamingStatus": 1,
                  "allowAudioAds": true,
                  "hasLyric": true,
                  "rakingStatus": 3,
                  "releasedAt": 1710421200
                },
                {
                  "encodeId": "Z7UEF8ID",
                  "title": "+1 ngày bên em",
                  "alias": "1-ngay-ben-em-Trungg-I-U-Rum",
                  "isOffical": true,
                  "username": "",
                  "artistsNames": "Trungg I.U, Rum",
                  "artists": [
                    {
                      "id": "IW6W8Z89",
                      "name": "Trungg I.U",
                      "link": "/nghe-si/Trungg-IU",
                      "spotlight": false,
                      "alias": "Trungg-IU",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/8/1/2/5812a694a557a9f8c61429214ce174b9.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/8/1/2/5812a694a557a9f8c61429214ce174b9.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6UW9B860"
                    },
                    {
                      "id": "IWZFEEUU",
                      "name": "Rum",
                      "link": "/Rum-Minh-Triet",
                      "spotlight": false,
                      "alias": "Rum-Minh-Triet",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/5/1/3/2513d20382000786aca28d0536615828.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/5/1/3/2513d20382000786aca28d0536615828.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZUO78ZU7"
                    }
                  ],
                  "isWorldWide": true,
                  "previewInfo": {
                    "startTime": 0,
                    "endTime": 45
                  },
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/9/4/0/e9407bcf06e084f43a3c930260274f7a.jpg",
                  "link": "/bai-hat/1-ngay-ben-em-Trungg-I-U-Rum/Z7UEF8ID.html",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/9/4/0/e9407bcf06e084f43a3c930260274f7a.jpg",
                  "duration": 220,
                  "zingChoice": false,
                  "isPrivate": false,
                  "preRelease": false,
                  "releaseDate": 1710504000,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ97FCD"
                  ],
                  "album": {
                    "encodeId": "6BFEZDCO",
                    "title": "+1 ngày bên em (Single)",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/e/9/4/0/e9407bcf06e084f43a3c930260274f7a.jpg",
                    "isoffical": true,
                    "link": "/album/1-ngay-ben-em-Single-Trungg-I-U-Rum/6BFEZDCO.html",
                    "isIndie": false,
                    "releaseDate": "15/03/2024",
                    "sortDescription": "",
                    "releasedAt": 1710504000000,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "PR": false,
                    "artists": [
                      {
                        "id": "IW6W8Z89",
                        "name": "Trungg I.U",
                        "link": "/nghe-si/Trungg-IU",
                        "spotlight": false,
                        "alias": "Trungg-IU",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/8/1/2/5812a694a557a9f8c61429214ce174b9.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/8/1/2/5812a694a557a9f8c61429214ce174b9.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6UW9B860",
                        "totalFollow": 1460
                      },
                      {
                        "id": "IWZFEEUU",
                        "name": "Rum",
                        "link": "/Rum-Minh-Triet",
                        "spotlight": false,
                        "alias": "Rum-Minh-Triet",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/5/1/3/2513d20382000786aca28d0536615828.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/5/1/3/2513d20382000786aca28d0536615828.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZUO78ZU7",
                        "totalFollow": 125159
                      }
                    ],
                    "artistsNames": "Trungg I.U, Rum"
                  },
                  "distributor": "LOOPS Music",
                  "indicators": [
                    
                  ],
                  "isIndie": false,
                  "mvlink": "/video-clip/1-ngay-ben-em-Trungg-I-U-Rum/Z7UEF8ID.html",
                  "streamingStatus": 1,
                  "allowAudioAds": true,
                  "hasLyric": true,
                  "rakingStatus": -2,
                  "releasedAt": 1710504000
                },
                {
                  "encodeId": "Z7ZWEACA",
                  "title": "Trả Cho Nhau",
                  "alias": "Tra-Cho-Nhau-Bach-Cong-Khanh",
                  "isOffical": true,
                  "username": "",
                  "artistsNames": "Bạch Công Khanh",
                  "artists": [
                    {
                      "id": "IWZ97006",
                      "name": "Bạch Công Khanh",
                      "link": "/Bach-Cong-Khanh",
                      "spotlight": false,
                      "alias": "Bach-Cong-Khanh",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/3/a/5/c3a5dd044d6fdf19802d655b1c4622c0.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/3/a/5/c3a5dd044d6fdf19802d655b1c4622c0.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZOADOZDO"
                    }
                  ],
                  "isWorldWide": true,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/3/c/0/2/3c02b53b768aee23c4cc841f45011393.jpg",
                  "link": "/bai-hat/Tra-Cho-Nhau-Bach-Cong-Khanh/Z7ZWEACA.html",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/c/0/2/3c02b53b768aee23c4cc841f45011393.jpg",
                  "duration": 289,
                  "zingChoice": false,
                  "isPrivate": false,
                  "preRelease": false,
                  "releaseDate": 1710507600,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ97FCD"
                  ],
                  "album": {
                    "encodeId": "6C00I0C0",
                    "title": "Trả Cho Nhau (Single)",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/3/c/0/2/3c02b53b768aee23c4cc841f45011393.jpg",
                    "isoffical": true,
                    "link": "/album/Tra-Cho-Nhau-Single-Bach-Cong-Khanh/6C00I0C0.html",
                    "isIndie": false,
                    "releaseDate": "15/03/2024",
                    "sortDescription": "",
                    "releasedAt": 1710507600000,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "PR": false,
                    "artists": [
                      {
                        "id": "IWZ97006",
                        "name": "Bạch Công Khanh",
                        "link": "/Bach-Cong-Khanh",
                        "spotlight": false,
                        "alias": "Bach-Cong-Khanh",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/3/a/5/c3a5dd044d6fdf19802d655b1c4622c0.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/3/a/5/c3a5dd044d6fdf19802d655b1c4622c0.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZOADOZDO",
                        "totalFollow": 22222
                      }
                    ],
                    "artistsNames": "Bạch Công Khanh"
                  },
                  "distributor": "MIXUS",
                  "indicators": [
                    
                  ],
                  "isIndie": false,
                  "streamingStatus": 1,
                  "allowAudioAds": true,
                  "hasLyric": true,
                  "rakingStatus": -1,
                  "releasedAt": 1710507600
                },
                {
                  "encodeId": "Z7UBWAFW",
                  "title": "Nhớ Mang Ô Hôm Nay",
                  "alias": "Nho-Mang-O-Hom-Nay-Jun-Pham-Hamlet-Truong",
                  "isOffical": true,
                  "username": "",
                  "artistsNames": "Jun Phạm, Hamlet Trương",
                  "artists": [
                    {
                      "id": "IWZA6O8Z",
                      "name": "Jun Phạm",
                      "link": "/Jun-Pham",
                      "spotlight": false,
                      "alias": "Jun-Pham",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/d/c/5/3dc5d2cf607f32db4c7e8fba1e284b86.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/d/c/5/3dc5d2cf607f32db4c7e8fba1e284b86.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZOC9E9UU"
                    },
                    {
                      "id": "IWZ97OOZ",
                      "name": "Hamlet Trương",
                      "link": "/Hamlet-Truong",
                      "spotlight": false,
                      "alias": "Hamlet-Truong",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/9/3/4/6/9346e23f3d6a1f20f82f4420ccf12f56.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/9/3/4/6/9346e23f3d6a1f20f82f4420ccf12f56.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZAECBB"
                    }
                  ],
                  "isWorldWide": true,
                  "previewInfo": {
                    "startTime": 0,
                    "endTime": 45
                  },
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/c/3/0/ec30d6775fb108a75b4a5ec3df2ff33b.jpg",
                  "link": "/bai-hat/Nho-Mang-O-Hom-Nay-Jun-Pham-Hamlet-Truong/Z7UBWAFW.html",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/c/3/0/ec30d6775fb108a75b4a5ec3df2ff33b.jpg",
                  "duration": 329,
                  "zingChoice": false,
                  "isPrivate": false,
                  "preRelease": false,
                  "releaseDate": 1710417600,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ97FCD"
                  ],
                  "album": {
                    "encodeId": "6BFCDF7I",
                    "title": "An Ủi (EP)",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/e/c/3/0/ec30d6775fb108a75b4a5ec3df2ff33b.jpg",
                    "isoffical": true,
                    "link": "/album/An-Ui-EP-Jun-Pham-Hamlet-Truong/6BFCDF7I.html",
                    "isIndie": false,
                    "releaseDate": "14/03/2024",
                    "sortDescription": "",
                    "releasedAt": 1710417600000,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "PR": false,
                    "artists": [
                      {
                        "id": "IWZA6O8Z",
                        "name": "Jun Phạm",
                        "link": "/Jun-Pham",
                        "spotlight": false,
                        "alias": "Jun-Pham",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/d/c/5/3dc5d2cf607f32db4c7e8fba1e284b86.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/d/c/5/3dc5d2cf607f32db4c7e8fba1e284b86.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZOC9E9UU",
                        "totalFollow": 45934
                      },
                      {
                        "id": "IWZ97OOZ",
                        "name": "Hamlet Trương",
                        "link": "/Hamlet-Truong",
                        "spotlight": false,
                        "alias": "Hamlet-Truong",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/9/3/4/6/9346e23f3d6a1f20f82f4420ccf12f56.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/9/3/4/6/9346e23f3d6a1f20f82f4420ccf12f56.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZAECBB",
                        "totalFollow": 23090
                      }
                    ],
                    "artistsNames": "Jun Phạm, Hamlet Trương"
                  },
                  "distributor": "Yin Yang Media",
                  "indicators": [
                    
                  ],
                  "isIndie": false,
                  "streamingStatus": 1,
                  "allowAudioAds": true,
                  "hasLyric": true,
                  "rakingStatus": 1,
                  "releasedAt": 1710417600
                },
                {
                  "encodeId": "Z7ZWUO0U",
                  "title": "Con Tim Anh Thay Đổi",
                  "alias": "Con-Tim-Anh-Thay-Doi-Thuy-Le-ACV",
                  "isOffical": true,
                  "username": "",
                  "artistsNames": "Thủy Lê, ACV",
                  "artists": [
                    {
                      "id": "IW88CBID",
                      "name": "Thủy Lê",
                      "link": "/nghe-si/Thuy-Le",
                      "spotlight": false,
                      "alias": "Thuy-Le",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/5/c/1/c5c1ca128676336474c149b3b7a5d297.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/5/c/1/c5c1ca128676336474c149b3b7a5d297.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6BCEODCZ"
                    },
                    {
                      "id": "IW6ZAAB8",
                      "name": "ACV",
                      "link": "/nghe-si/ACV-Music",
                      "spotlight": false,
                      "alias": "ACV-Music",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/e/0/6/5e06d48fb79175a096e059ecf3d8b1e8.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/e/0/6/5e06d48fb79175a096e059ecf3d8b1e8.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6UW9CWC9"
                    }
                  ],
                  "isWorldWide": true,
                  "previewInfo": {
                    "startTime": 0,
                    "endTime": 45
                  },
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/c/e/c/bcec78c3282be04e2ae5243903c8bbec.jpg",
                  "link": "/bai-hat/Con-Tim-Anh-Thay-Doi-Thuy-Le-ACV/Z7ZWUO0U.html",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/c/e/c/bcec78c3282be04e2ae5243903c8bbec.jpg",
                  "duration": 315,
                  "zingChoice": false,
                  "isPrivate": false,
                  "preRelease": false,
                  "releaseDate": 1709989200,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ97FCD"
                  ],
                  "album": {
                    "encodeId": "6BFFCOIU",
                    "title": "Con Tim Anh Thay Đổi (Single)",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/b/c/e/c/bcec78c3282be04e2ae5243903c8bbec.jpg",
                    "isoffical": true,
                    "link": "/album/Con-Tim-Anh-Thay-Doi-Single-Thuy-Le-ACV/6BFFCOIU.html",
                    "isIndie": false,
                    "releaseDate": "09/03/2024",
                    "sortDescription": "",
                    "releasedAt": 1709989200000,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "PR": false,
                    "artists": [
                      {
                        "id": "IW88CBID",
                        "name": "Thủy Lê",
                        "link": "/nghe-si/Thuy-Le",
                        "spotlight": false,
                        "alias": "Thuy-Le",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/5/c/1/c5c1ca128676336474c149b3b7a5d297.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/5/c/1/c5c1ca128676336474c149b3b7a5d297.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6BCEODCZ",
                        "totalFollow": 330
                      },
                      {
                        "id": "IW6ZAAB8",
                        "name": "ACV",
                        "link": "/nghe-si/ACV-Music",
                        "spotlight": false,
                        "alias": "ACV-Music",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/e/0/6/5e06d48fb79175a096e059ecf3d8b1e8.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/e/0/6/5e06d48fb79175a096e059ecf3d8b1e8.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6UW9CWC9",
                        "totalFollow": 147190
                      }
                    ],
                    "artistsNames": "Thủy Lê, ACV"
                  },
                  "distributor": "MIXUS",
                  "indicators": [
                    
                  ],
                  "isIndie": false,
                  "streamingStatus": 1,
                  "allowAudioAds": true,
                  "hasLyric": true,
                  "rakingStatus": -2,
                  "releasedAt": 1709989200
                },
                {
                  "encodeId": "Z7ZI8WD9",
                  "title": "Giọt Sương Và Chiếc Lá (From \"Lưu Hương Giang's Library\")",
                  "alias": "Giot-Suong-Va-Chiec-La-From-Luu-Huong-Giang-s-Library-Luu-Huong-Giang",
                  "isOffical": true,
                  "username": "",
                  "artistsNames": "Lưu Hương Giang",
                  "artists": [
                    {
                      "id": "IWZ9ZI77",
                      "name": "Lưu Hương Giang",
                      "link": "/Luu-Huong-Giang",
                      "spotlight": false,
                      "alias": "Luu-Huong-Giang",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/8/5/c/c85c3da4be4775dedd81128b1785ebd3.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/8/5/c/c85c3da4be4775dedd81128b1785ebd3.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZOEWEZ7I"
                    }
                  ],
                  "isWorldWide": false,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/a/8/f/ba8fef389c63d5dc34d73e39bba01f75.jpg",
                  "link": "/bai-hat/Giot-Suong-Va-Chiec-La-From-Luu-Huong-Giang-s-Library-Luu-Huong-Giang/Z7ZI8WD9.html",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/a/8/f/ba8fef389c63d5dc34d73e39bba01f75.jpg",
                  "duration": 232,
                  "zingChoice": false,
                  "isPrivate": false,
                  "preRelease": false,
                  "releaseDate": 1710435600,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ9Z088",
                    "IWZ97FCD"
                  ],
                  "album": {
                    "encodeId": "SBFF679F",
                    "title": "Giọt Sương Và Chiếc Lá (From \"Lưu Hương Giang's Library\") (Single)",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/b/a/8/f/ba8fef389c63d5dc34d73e39bba01f75.jpg",
                    "isoffical": true,
                    "link": "/album/Giot-Suong-Va-Chiec-La-From-Luu-Huong-Giang-s-Library-Single-Luu-Huong-Giang/SBFF679F.html",
                    "isIndie": false,
                    "releaseDate": "15/03/2024",
                    "sortDescription": "",
                    "releasedAt": 1710435600000,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z088",
                      "IWZ97FCD"
                    ],
                    "PR": false,
                    "artists": [
                      {
                        "id": "IWZ9ZI77",
                        "name": "Lưu Hương Giang",
                        "link": "/Luu-Huong-Giang",
                        "spotlight": false,
                        "alias": "Luu-Huong-Giang",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/8/5/c/c85c3da4be4775dedd81128b1785ebd3.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/8/5/c/c85c3da4be4775dedd81128b1785ebd3.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZOEWEZ7I",
                        "totalFollow": 7137
                      }
                    ],
                    "artistsNames": "Lưu Hương Giang"
                  },
                  "distributor": "Believe",
                  "indicators": [
                    
                  ],
                  "isIndie": false,
                  "streamingStatus": 1,
                  "downloadPrivileges": [
                    3
                  ],
                  "allowAudioAds": true,
                  "hasLyric": true,
                  "rakingStatus": 0,
                  "releasedAt": 1710435600
                }
              ],
              "options": {
                "autoSlider": true,
                "hideArrow": false
              }
            },
            {
              "promotes": [
                {
                  "encodeId": "Z6A9IAC7",
                  "title": "không biết nên vui hay buồn",
                  "alias": "khong-biet-nen-vui-hay-buon-Bao-Anh-Tao-Kai-Dinh",
                  "isOffical": true,
                  "username": "",
                  "artistsNames": "Bảo Anh, Táo, Kai Đinh",
                  "artists": [
                    {
                      "id": "IWZ99B00",
                      "name": "Bảo Anh",
                      "link": "/Bao-Anh",
                      "spotlight": false,
                      "alias": "Bao-Anh",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/9/9/b/799b387d346a819ece784725f7d81aa3.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/9/9/b/799b387d346a819ece784725f7d81aa3.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZBIBB0"
                    },
                    {
                      "id": "IWZ9BBOO",
                      "name": "Táo",
                      "link": "/nghe-si/Tao",
                      "spotlight": false,
                      "alias": "Tao",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/b/c/0/0bc04902c709a093515ad4c1dd7f45e1.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/0/b/c/0/0bc04902c709a093515ad4c1dd7f45e1.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "ZOEIZWAB"
                    },
                    {
                      "id": "IWZ9FFE0",
                      "name": "Kai Đinh",
                      "link": "/Kai-Dinh",
                      "spotlight": false,
                      "alias": "Kai-Dinh",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/5/7/a/357a7b5f363a27d11a52ac5a2826e1c4.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/5/7/a/357a7b5f363a27d11a52ac5a2826e1c4.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZOZAOIEU"
                    }
                  ],
                  "isWorldWide": true,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/4/c/d/3/4cd32d2022a31a33febcdd41379420ad.jpg",
                  "link": "/bai-hat/khong-biet-nen-vui-hay-buon-Bao-Anh-Tao-Kai-Dinh/Z6A9IAC7.html",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/4/c/d/3/4cd32d2022a31a33febcdd41379420ad.jpg",
                  "duration": 212,
                  "zingChoice": false,
                  "isPrivate": false,
                  "preRelease": false,
                  "releaseDate": 1684670400,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ97FCD"
                  ],
                  "album": {
                    "encodeId": "6BAAO7WB",
                    "title": "không biết nên vui hay buồn (EP)",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/4/c/d/3/4cd32d2022a31a33febcdd41379420ad.jpg",
                    "isoffical": true,
                    "link": "/album/khong-biet-nen-vui-hay-buon-EP-Bao-Anh-Kai-Dinh/6BAAO7WB.html",
                    "isIndie": false,
                    "releaseDate": "21/05/2023",
                    "sortDescription": "",
                    "releasedAt": 1684670400000,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "PR": false,
                    "artists": [
                      {
                        "id": "IWZ99B00",
                        "name": "Bảo Anh",
                        "link": "/Bao-Anh",
                        "spotlight": false,
                        "alias": "Bao-Anh",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/9/9/b/799b387d346a819ece784725f7d81aa3.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/9/9/b/799b387d346a819ece784725f7d81aa3.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZBIBB0",
                        "totalFollow": 313808
                      },
                      {
                        "id": "IWZ9FFE0",
                        "name": "Kai Đinh",
                        "link": "/Kai-Dinh",
                        "spotlight": false,
                        "alias": "Kai-Dinh",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/5/7/a/357a7b5f363a27d11a52ac5a2826e1c4.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/5/7/a/357a7b5f363a27d11a52ac5a2826e1c4.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZOZAOIEU",
                        "totalFollow": 12748
                      }
                    ],
                    "artistsNames": "Bảo Anh, Kai Đinh"
                  },
                  "distributor": "Yin Yang Media",
                  "indicators": [
                    
                  ],
                  "isIndie": false,
                  "streamingStatus": 1,
                  "allowAudioAds": true,
                  "hasLyric": true
                },
                {
                  "encodeId": "Z7Z0BA7W",
                  "title": "Không Thể Say (Live Band Version)",
                  "alias": "Khong-The-Say-Live-Band-Version-HIEUTHUHAI",
                  "isOffical": true,
                  "username": "",
                  "artistsNames": "HIEUTHUHAI",
                  "artists": [
                    {
                      "id": "IW6ZZ690",
                      "name": "HIEUTHUHAI",
                      "link": "/nghe-si/HIEUTHUHAI",
                      "spotlight": false,
                      "alias": "HIEUTHUHAI",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/2/a/1/c2a154106353063625c9412ed20443a0.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/2/a/1/c2a154106353063625c9412ed20443a0.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6UW9BFUW"
                    }
                  ],
                  "isWorldWide": false,
                  "previewInfo": {
                    "startTime": 0,
                    "endTime": 45
                  },
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/d/5/d/9d5d27e9c38bf48be039a5f00448685a.jpg",
                  "link": "/bai-hat/Khong-The-Say-Live-Band-Version-HIEUTHUHAI/Z7Z0BA7W.html",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/9/d/5/d/9d5d27e9c38bf48be039a5f00448685a.jpg",
                  "duration": 188,
                  "zingChoice": false,
                  "isPrivate": false,
                  "preRelease": false,
                  "releaseDate": 1709830800,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ9Z088",
                    "IWZ97FCD"
                  ],
                  "album": {
                    "encodeId": "6BFEFAUD",
                    "title": "Không Thể Say (Live Band Version) (Single)",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/9/d/5/d/9d5d27e9c38bf48be039a5f00448685a.jpg",
                    "isoffical": true,
                    "link": "/album/Khong-The-Say-Live-Band-Version-Single-HIEUTHUHAI/6BFEFAUD.html",
                    "isIndie": false,
                    "releaseDate": "08/03/2024",
                    "sortDescription": "",
                    "releasedAt": 1709830800000,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z088",
                      "IWZ97FCD"
                    ],
                    "PR": false,
                    "artists": [
                      {
                        "id": "IW6ZZ690",
                        "name": "HIEUTHUHAI",
                        "link": "/nghe-si/HIEUTHUHAI",
                        "spotlight": false,
                        "alias": "HIEUTHUHAI",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/2/a/1/c2a154106353063625c9412ed20443a0.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/2/a/1/c2a154106353063625c9412ed20443a0.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6UW9BFUW",
                        "totalFollow": 88714
                      }
                    ],
                    "artistsNames": "HIEUTHUHAI"
                  },
                  "distributor": "Ingrooves Music Group",
                  "indicators": [
                    
                  ],
                  "isIndie": false,
                  "streamingStatus": 1,
                  "downloadPrivileges": [
                    3
                  ],
                  "allowAudioAds": true,
                  "hasLyric": true
                },
                {
                  "encodeId": "Z7ZI780F",
                  "title": "the boy is mine",
                  "alias": "the-boy-is-mine-Ariana-Grande",
                  "isOffical": true,
                  "username": "",
                  "artistsNames": "Ariana Grande",
                  "artists": [
                    {
                      "id": "IWZ98ABB",
                      "name": "Ariana Grande",
                      "link": "/nghe-si/Ariana-Grande",
                      "spotlight": false,
                      "alias": "Ariana-Grande",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/b/a/8/cba8282bb865166714a7ae77fab322d8.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/b/a/8/cba8282bb865166714a7ae77fab322d8.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "ZWZCZICU"
                    }
                  ],
                  "isWorldWide": false,
                  "previewInfo": {
                    "startTime": 0,
                    "endTime": 45
                  },
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/4/3/2/e4320adf6295b195f3e8eeed7394e85f.jpg",
                  "link": "/bai-hat/the-boy-is-mine-Ariana-Grande/Z7ZI780F.html",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/4/3/2/e4320adf6295b195f3e8eeed7394e85f.jpg",
                  "duration": 174,
                  "zingChoice": false,
                  "isPrivate": false,
                  "preRelease": false,
                  "releaseDate": 1709830800,
                  "genreIds": [
                    "IWZ9Z08O",
                    "IWZ9Z097"
                  ],
                  "album": {
                    "encodeId": "6BFF6ZAI",
                    "title": "eternal sunshine",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/e/4/3/2/e4320adf6295b195f3e8eeed7394e85f.jpg",
                    "isoffical": true,
                    "link": "/album/eternal-sunshine-Ariana-Grande/6BFF6ZAI.html",
                    "isIndie": false,
                    "releaseDate": "08/03/2024",
                    "sortDescription": "",
                    "releasedAt": 1709830800000,
                    "genreIds": [
                      "IWZ9Z08O",
                      "IWZ9Z097"
                    ],
                    "PR": false,
                    "artists": [
                      {
                        "id": "IWZ98ABB",
                        "name": "Ariana Grande",
                        "link": "/nghe-si/Ariana-Grande",
                        "spotlight": false,
                        "alias": "Ariana-Grande",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/b/a/8/cba8282bb865166714a7ae77fab322d8.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/b/a/8/cba8282bb865166714a7ae77fab322d8.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "ZWZCZICU",
                        "totalFollow": 59589
                      }
                    ],
                    "artistsNames": "Ariana Grande"
                  },
                  "distributor": "Universal Music Group",
                  "indicators": [
                    "explicit"
                  ],
                  "isIndie": false,
                  "streamingStatus": 2,
                  "streamPrivileges": [
                    2
                  ],
                  "downloadPrivileges": [
                    3
                  ],
                  "allowAudioAds": false,
                  "hasLyric": true
                },
                {
                  "encodeId": "Z7UCZ767",
                  "title": "Để cho anh cưa",
                  "alias": "De-cho-anh-cua-Phuc-Du",
                  "isOffical": true,
                  "username": "",
                  "artistsNames": "Phúc Du",
                  "artists": [
                    {
                      "id": "IW6U8EWE",
                      "name": "Phúc Du",
                      "link": "/nghe-si/Phuc-Du",
                      "spotlight": false,
                      "alias": "Phuc-Du",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/3/8/e/738e7bf4492dcc9a6bf7f3c13a23ff73.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/3/8/e/738e7bf4492dcc9a6bf7f3c13a23ff73.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6UW9BCAZ"
                    }
                  ],
                  "isWorldWide": true,
                  "previewInfo": {
                    "startTime": 0,
                    "endTime": 45
                  },
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/1/7/a/e17ab1a67ea8a92b9425282a17e3cf07.jpg",
                  "link": "/bai-hat/De-cho-anh-cua-Phuc-Du/Z7UCZ767.html",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/1/7/a/e17ab1a67ea8a92b9425282a17e3cf07.jpg",
                  "duration": 173,
                  "zingChoice": false,
                  "isPrivate": false,
                  "preRelease": false,
                  "releaseDate": 1709730000,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ97FCD"
                  ],
                  "album": {
                    "encodeId": "6BFD606O",
                    "title": "Để cho anh cưa (Single)",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/e/1/7/a/e17ab1a67ea8a92b9425282a17e3cf07.jpg",
                    "isoffical": true,
                    "link": "/album/De-cho-anh-cua-Single-Phuc-Du/6BFD606O.html",
                    "isIndie": false,
                    "releaseDate": "06/03/2024",
                    "sortDescription": "",
                    "releasedAt": 1709730000000,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "PR": false,
                    "artists": [
                      {
                        "id": "IW6U8EWE",
                        "name": "Phúc Du",
                        "link": "/nghe-si/Phuc-Du",
                        "spotlight": false,
                        "alias": "Phuc-Du",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/3/8/e/738e7bf4492dcc9a6bf7f3c13a23ff73.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/3/8/e/738e7bf4492dcc9a6bf7f3c13a23ff73.jpg",
                        "isOA": false,
                        "isOABrand": false,
                        "playlistId": "6UW9BCAZ",
                        "totalFollow": 13742
                      }
                    ],
                    "artistsNames": "Phúc Du"
                  },
                  "distributor": "LOOPS Music",
                  "indicators": [
                    
                  ],
                  "isIndie": false,
                  "mvlink": "/video-clip/De-cho-anh-cua-Phuc-Du/Z7UCZ767.html",
                  "streamingStatus": 1,
                  "allowAudioAds": true,
                  "hasLyric": true
                }
              ],
              "items": [
                {
                  "encodeId": "Z7U00WDE",
                  "title": "Thủy Triều",
                  "alias": "Thuy-Trieu-Quang-Hung-MasterD",
                  "isOffical": true,
                  "username": "",
                  "artistsNames": "Quang Hùng MasterD",
                  "artists": [
                    {
                      "id": "IWZAZFCO",
                      "name": "Quang Hùng MasterD",
                      "link": "/Quang-Hung-MasterD",
                      "spotlight": false,
                      "alias": "Quang-Hung-MasterD",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/7/9/a/479ad4670fa083908fcc0c88c0f05e5c.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/7/9/a/479ad4670fa083908fcc0c88c0f05e5c.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZOEIUO67"
                    }
                  ],
                  "isWorldWide": true,
                  "previewInfo": {
                    "startTime": 0,
                    "endTime": 45
                  },
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/8/4/7/4/8474eb9fd1a3aa78b974b4c104ff45fc.jpg",
                  "link": "/bai-hat/Thuy-Trieu-Quang-Hung-MasterD/Z7U00WDE.html",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/8/4/7/4/8474eb9fd1a3aa78b974b4c104ff45fc.jpg",
                  "duration": 186,
                  "zingChoice": false,
                  "isPrivate": false,
                  "preRelease": false,
                  "releaseDate": 1707742800,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ97FCD"
                  ],
                  "album": {
                    "encodeId": "6BF87FDW",
                    "title": "Thủy Triều (Single)",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/8/4/7/4/8474eb9fd1a3aa78b974b4c104ff45fc.jpg",
                    "isoffical": true,
                    "link": "/album/Thuy-Trieu-Single-Quang-Hung-MasterD/6BF87FDW.html",
                    "isIndie": false,
                    "releaseDate": "12/02/2024",
                    "sortDescription": "",
                    "releasedAt": 1707742800000,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "PR": false,
                    "artists": [
                      {
                        "id": "IWZAZFCO",
                        "name": "Quang Hùng MasterD",
                        "link": "/Quang-Hung-MasterD",
                        "spotlight": false,
                        "alias": "Quang-Hung-MasterD",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/7/9/a/479ad4670fa083908fcc0c88c0f05e5c.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/7/9/a/479ad4670fa083908fcc0c88c0f05e5c.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZOEIUO67",
                        "totalFollow": 42794
                      }
                    ],
                    "artistsNames": "Quang Hùng MasterD"
                  },
                  "distributor": "Euphoria Media Vietnam",
                  "indicators": [
                    
                  ],
                  "isIndie": false,
                  "streamingStatus": 1,
                  "allowAudioAds": true,
                  "hasLyric": true,
                  "rakingStatus": 0,
                  "score": 10204,
                  "totalTopZing": 0,
                  "artist": {
                    "id": "IWZAZFCO",
                    "name": "Quang Hùng MasterD",
                    "link": "/nghe-si/Quang-Hung-MasterD",
                    "spotlight": false,
                    "alias": "Quang-Hung-MasterD",
                    "playlistId": "ZOEIUO67",
                    "cover": "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/default_cover.png",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/7/9/a/479ad4670fa083908fcc0c88c0f05e5c.jpg"
                  }
                },
                {
                  "encodeId": "Z7UUAFUF",
                  "title": "Sau Lời Từ Khước (Theme Song From \"MAI\")",
                  "alias": "Sau-Loi-Tu-Khuoc-Theme-Song-From-MAI-Phan-Manh-Quynh",
                  "isOffical": true,
                  "username": "",
                  "artistsNames": "Phan Mạnh Quỳnh",
                  "artists": [
                    {
                      "id": "IWZ98O7W",
                      "name": "Phan Mạnh Quỳnh",
                      "link": "/Phan-Manh-Quynh",
                      "spotlight": false,
                      "alias": "Phan-Manh-Quynh",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/0/b/8/50b89f1cecfea081ed5ccca1c9e4d7c4.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/0/b/8/50b89f1cecfea081ed5ccca1c9e4d7c4.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZAEBZF"
                    }
                  ],
                  "isWorldWide": true,
                  "previewInfo": {
                    "startTime": 0,
                    "endTime": 45
                  },
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/d/0/7/ed0741228ad36870e13624120474e50a.jpg",
                  "link": "/bai-hat/Sau-Loi-Tu-Khuoc-Theme-Song-From-MAI-Phan-Manh-Quynh/Z7UUAFUF.html",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/d/0/7/ed0741228ad36870e13624120474e50a.jpg",
                  "duration": 250,
                  "zingChoice": false,
                  "isPrivate": false,
                  "preRelease": false,
                  "releaseDate": 1707930000,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ9Z0BA",
                    "IWZ97FCD"
                  ],
                  "album": {
                    "encodeId": "6BFAO807",
                    "title": "Sau Lời Từ Khước (Theme Song From \"MAI\") (Single)",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/e/d/0/7/ed0741228ad36870e13624120474e50a.jpg",
                    "isoffical": true,
                    "link": "/album/Sau-Loi-Tu-Khuoc-Theme-Song-From-MAI-Single-Phan-Manh-Quynh/6BFAO807.html",
                    "isIndie": false,
                    "releaseDate": "15/02/2024",
                    "sortDescription": "",
                    "releasedAt": 1707930000000,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z0BA",
                      "IWZ97FCD"
                    ],
                    "PR": false,
                    "artists": [
                      {
                        "id": "IWZ98O7W",
                        "name": "Phan Mạnh Quỳnh",
                        "link": "/Phan-Manh-Quynh",
                        "spotlight": false,
                        "alias": "Phan-Manh-Quynh",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/0/b/8/50b89f1cecfea081ed5ccca1c9e4d7c4.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/0/b/8/50b89f1cecfea081ed5ccca1c9e4d7c4.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZAEBZF",
                        "totalFollow": 652903
                      }
                    ],
                    "artistsNames": "Phan Mạnh Quỳnh"
                  },
                  "distributor": "Yin Yang Media",
                  "indicators": [
                    
                  ],
                  "isIndie": false,
                  "streamingStatus": 1,
                  "allowAudioAds": true,
                  "hasLyric": true,
                  "rakingStatus": 0,
                  "score": 7102,
                  "totalTopZing": 0,
                  "artist": {
                    "id": "IWZ98O7W",
                    "name": "Phan Mạnh Quỳnh",
                    "link": "/nghe-si/Phan-Manh-Quynh",
                    "spotlight": false,
                    "alias": "Phan-Manh-Quynh",
                    "playlistId": "ZWZAEBZF",
                    "cover": "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/default_cover.png",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/0/b/8/50b89f1cecfea081ed5ccca1c9e4d7c4.jpg"
                  }
                },
                {
                  "encodeId": "Z7Z0DCU9",
                  "title": "Nâng Chén Tiêu Sầu",
                  "alias": "Nang-Chen-Tieu-Sau-Bich-Phuong",
                  "isOffical": true,
                  "username": "",
                  "artistsNames": "Bích Phương",
                  "artists": [
                    {
                      "id": "IWZ96C86",
                      "name": "Bích Phương",
                      "link": "/Bich-Phuong",
                      "spotlight": false,
                      "alias": "Bich-Phuong",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/e/7/3/7e736bd660db22b75110df5605c180fe.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/e/7/3/7e736bd660db22b75110df5605c180fe.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZADD7O"
                    }
                  ],
                  "isWorldWide": true,
                  "previewInfo": {
                    "startTime": 0,
                    "endTime": 45
                  },
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/d/1/e/d/d1ede336883f38e8a4081f18731202ec.jpg",
                  "link": "/bai-hat/Nang-Chen-Tieu-Sau-Bich-Phuong/Z7Z0DCU9.html",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/1/e/d/d1ede336883f38e8a4081f18731202ec.jpg",
                  "duration": 185,
                  "zingChoice": false,
                  "isPrivate": false,
                  "preRelease": false,
                  "releaseDate": 1709830800,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ97FCD"
                  ],
                  "album": {
                    "encodeId": "6BFFW9UZ",
                    "title": "Nâng Chén Tiêu Sầu (Single)",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/d/1/e/d/d1ede336883f38e8a4081f18731202ec.jpg",
                    "isoffical": true,
                    "link": "/album/Nang-Chen-Tieu-Sau-Single-Bich-Phuong/6BFFW9UZ.html",
                    "isIndie": false,
                    "releaseDate": "08/03/2024",
                    "sortDescription": "",
                    "releasedAt": 1709830800000,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "PR": false,
                    "artists": [
                      {
                        "id": "IWZ96C86",
                        "name": "Bích Phương",
                        "link": "/Bich-Phuong",
                        "spotlight": false,
                        "alias": "Bich-Phuong",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/e/7/3/7e736bd660db22b75110df5605c180fe.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/e/7/3/7e736bd660db22b75110df5605c180fe.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZWZADD7O",
                        "totalFollow": 414031
                      }
                    ],
                    "artistsNames": "Bích Phương"
                  },
                  "distributor": "Yin Yang Media",
                  "indicators": [
                    
                  ],
                  "isIndie": false,
                  "streamingStatus": 1,
                  "allowAudioAds": true,
                  "hasLyric": true,
                  "rakingStatus": 0,
                  "score": 5212,
                  "totalTopZing": 0,
                  "artist": {
                    "id": "IWZ96C86",
                    "name": "Bích Phương",
                    "link": "/nghe-si/Bich-Phuong",
                    "spotlight": false,
                    "alias": "Bich-Phuong",
                    "playlistId": "ZWZADD7O",
                    "cover": "https://photo-zmp3.zmdcdn.me/cover_artist/7/4/4/8/74486b92960611a2b4d26dea3ed04568.jpg",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/e/7/3/7e736bd660db22b75110df5605c180fe.jpg"
                  }
                },
                {
                  "encodeId": "Z7I6BCCO",
                  "title": "Thiên Lý Ơi",
                  "alias": "Thien-Ly-Oi-Jack-J97",
                  "isOffical": true,
                  "username": "",
                  "artistsNames": "Jack - J97",
                  "artists": [
                    {
                      "id": "IW6WCI7U",
                      "name": "Jack - J97",
                      "link": "/Jack-J97",
                      "spotlight": false,
                      "alias": "Jack-J97",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/7/6/a/176a17f0bf5adfeecf60d8e1d00910c7.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/7/6/a/176a17f0bf5adfeecf60d8e1d00910c7.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZUDICAF0"
                    }
                  ],
                  "isWorldWide": true,
                  "previewInfo": {
                    "startTime": 0,
                    "endTime": 45
                  },
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/banner/2/7/b/d/27bdc67fef29c7928298c5759de08534.jpg",
                  "link": "/bai-hat/Thien-Ly-Oi-Jack-J97/Z7I6BCCO.html",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/banner/2/7/b/d/27bdc67fef29c7928298c5759de08534.jpg",
                  "duration": 220,
                  "zingChoice": false,
                  "isPrivate": false,
                  "preRelease": false,
                  "releaseDate": 1708607400,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ97FCD"
                  ],
                  "album": {
                    "encodeId": "SBDFB6AF",
                    "title": "Thiên Lý Ơi (Single)",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/d/5/5/e/d55eaea497ed3c6004a9b558cf6f2dfd.jpg",
                    "isoffical": true,
                    "link": "/album/Thien-Ly-Oi-Single-Jack-J97/SBDFB6AF.html",
                    "isIndie": false,
                    "releaseDate": "22/02/2024",
                    "sortDescription": "",
                    "releasedAt": 1708607400000,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ97FCD"
                    ],
                    "PR": false,
                    "artists": [
                      {
                        "id": "IW6WCI7U",
                        "name": "Jack - J97",
                        "link": "/Jack-J97",
                        "spotlight": false,
                        "alias": "Jack-J97",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/7/6/a/176a17f0bf5adfeecf60d8e1d00910c7.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/7/6/a/176a17f0bf5adfeecf60d8e1d00910c7.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZUDICAF0",
                        "totalFollow": 2529294
                      }
                    ],
                    "artistsNames": "Jack - J97"
                  },
                  "distributor": "MIXUS",
                  "indicators": [
                    
                  ],
                  "isIndie": false,
                  "streamingStatus": 1,
                  "allowAudioAds": true,
                  "hasLyric": true,
                  "rakingStatus": 0,
                  "score": 4612,
                  "totalTopZing": 0,
                  "artist": {
                    "id": "IW6WCI7U",
                    "name": "Jack - J97",
                    "link": "/nghe-si/Jack-J97",
                    "spotlight": false,
                    "alias": "Jack-J97",
                    "playlistId": "ZUDICAF0",
                    "cover": "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/default_cover.png",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/7/6/a/176a17f0bf5adfeecf60d8e1d00910c7.jpg"
                  }
                },
                {
                  "encodeId": "Z7UCU6OW",
                  "title": "Từng Là",
                  "alias": "Tung-La-Vu-Cat-Tuong",
                  "isOffical": true,
                  "username": "",
                  "artistsNames": "Vũ Cát Tường",
                  "artists": [
                    {
                      "id": "IWZ98UA9",
                      "name": "Vũ Cát Tường",
                      "link": "/Vu-Cat-Tuong",
                      "spotlight": false,
                      "alias": "Vu-Cat-Tuong",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/8/7/3/d87392e24ee10b99988fcea608194751.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/8/7/3/d87392e24ee10b99988fcea608194751.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZOU8DC8Z"
                    }
                  ],
                  "isWorldWide": false,
                  "previewInfo": {
                    "startTime": 0,
                    "endTime": 45
                  },
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/1/6/1/d/161de9d6b8416b7f31e619d879c0cffd.jpg",
                  "link": "/bai-hat/Tung-La-Vu-Cat-Tuong/Z7UCU6OW.html",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/6/1/d/161de9d6b8416b7f31e619d879c0cffd.jpg",
                  "duration": 253,
                  "zingChoice": false,
                  "isPrivate": false,
                  "preRelease": false,
                  "releaseDate": 1709226000,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ9Z088",
                    "IWZ97FCD"
                  ],
                  "album": {
                    "encodeId": "6BFDOEC7",
                    "title": "Từng Là (Single)",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/1/6/1/d/161de9d6b8416b7f31e619d879c0cffd.jpg",
                    "isoffical": true,
                    "link": "/album/Tung-La-Single-Vu-Cat-Tuong/6BFDOEC7.html",
                    "isIndie": false,
                    "releaseDate": "01/03/2024",
                    "sortDescription": "",
                    "releasedAt": 1709226000000,
                    "genreIds": [
                      "IWZ9Z08I",
                      "IWZ9Z088",
                      "IWZ97FCD"
                    ],
                    "PR": false,
                    "artists": [
                      {
                        "id": "IWZ98UA9",
                        "name": "Vũ Cát Tường",
                        "link": "/Vu-Cat-Tuong",
                        "spotlight": false,
                        "alias": "Vu-Cat-Tuong",
                        "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/8/7/3/d87392e24ee10b99988fcea608194751.jpg",
                        "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/8/7/3/d87392e24ee10b99988fcea608194751.jpg",
                        "isOA": true,
                        "isOABrand": false,
                        "playlistId": "ZOU8DC8Z",
                        "totalFollow": 268540
                      }
                    ],
                    "artistsNames": "Vũ Cát Tường"
                  },
                  "distributor": "Universal Music Group",
                  "indicators": [
                    
                  ],
                  "isIndie": false,
                  "streamingStatus": 1,
                  "downloadPrivileges": [
                    3
                  ],
                  "allowAudioAds": true,
                  "hasLyric": true,
                  "rakingStatus": 0,
                  "score": 4524,
                  "totalTopZing": 0,
                  "artist": {
                    "id": "IWZ98UA9",
                    "name": "Vũ Cát Tường",
                    "link": "/nghe-si/Vu-Cat-Tuong",
                    "spotlight": false,
                    "alias": "Vu-Cat-Tuong",
                    "playlistId": "ZOU8DC8Z",
                    "cover": "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/default_cover.png",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/8/7/3/d87392e24ee10b99988fcea608194751.jpg"
                  }
                }
              ],
              "chart": {
                "times": [
                  {
                    "hour": "15"
                  },
                  {
                    "hour": "16"
                  },
                  {
                    "hour": "17"
                  },
                  {
                    "hour": "18"
                  },
                  {
                    "hour": "19"
                  },
                  {
                    "hour": "20"
                  },
                  {
                    "hour": "21"
                  },
                  {
                    "hour": "22"
                  },
                  {
                    "hour": "23"
                  },
                  {
                    "hour": "00"
                  },
                  {
                    "hour": "01"
                  },
                  {
                    "hour": "02"
                  },
                  {
                    "hour": "03"
                  },
                  {
                    "hour": "04"
                  },
                  {
                    "hour": "05"
                  },
                  {
                    "hour": "06"
                  },
                  {
                    "hour": "07"
                  },
                  {
                    "hour": "08"
                  },
                  {
                    "hour": "09"
                  },
                  {
                    "hour": "10"
                  },
                  {
                    "hour": "11"
                  },
                  {
                    "hour": "12"
                  },
                  {
                    "hour": "13"
                  },
                  {
                    "hour": "14"
                  }
                ],
                "minScore": 0,
                "maxScore": 14073.6,
                "items": {
                  "Z7U00WDE": [
                    {
                      "time": 1710835200000,
                      "hour": "15",
                      "counter": 10242
                    },
                    {
                      "time": 1710838800000,
                      "hour": "16",
                      "counter": 9614
                    },
                    {
                      "time": 1710842400000,
                      "hour": "17",
                      "counter": 10059
                    },
                    {
                      "time": 1710846000000,
                      "hour": "18",
                      "counter": 11500
                    },
                    {
                      "time": 1710849600000,
                      "hour": "19",
                      "counter": 11568
                    },
                    {
                      "time": 1710853200000,
                      "hour": "20",
                      "counter": 9822
                    },
                    {
                      "time": 1710856800000,
                      "hour": "21",
                      "counter": 9345
                    },
                    {
                      "time": 1710860400000,
                      "hour": "22",
                      "counter": 8833
                    },
                    {
                      "time": 1710864000000,
                      "hour": "23",
                      "counter": 8076
                    },
                    {
                      "time": 1710867600000,
                      "hour": "00",
                      "counter": 7083
                    },
                    {
                      "time": 1710871200000,
                      "hour": "01",
                      "counter": 5562
                    },
                    {
                      "time": 1710874800000,
                      "hour": "02",
                      "counter": 4216
                    },
                    {
                      "time": 1710878400000,
                      "hour": "03",
                      "counter": 3463
                    },
                    {
                      "time": 1710882000000,
                      "hour": "04",
                      "counter": 2955
                    },
                    {
                      "time": 1710885600000,
                      "hour": "05",
                      "counter": 2923
                    },
                    {
                      "time": 1710889200000,
                      "hour": "06",
                      "counter": 4468
                    },
                    {
                      "time": 1710892800000,
                      "hour": "07",
                      "counter": 8982
                    },
                    {
                      "time": 1710896400000,
                      "hour": "08",
                      "counter": 11728
                    },
                    {
                      "time": 1710900000000,
                      "hour": "09",
                      "counter": 11419
                    },
                    {
                      "time": 1710903600000,
                      "hour": "10",
                      "counter": 11490
                    },
                    {
                      "time": 1710907200000,
                      "hour": "11",
                      "counter": 10002
                    },
                    {
                      "time": 1710910800000,
                      "hour": "12",
                      "counter": 8645
                    },
                    {
                      "time": 1710914400000,
                      "hour": "13",
                      "counter": 11149
                    },
                    {
                      "time": 1710918000000,
                      "hour": "14",
                      "counter": 10563
                    }
                  ],
                  "Z7UUAFUF": [
                    {
                      "time": 1710835200000,
                      "hour": "15",
                      "counter": 7209
                    },
                    {
                      "time": 1710838800000,
                      "hour": "16",
                      "counter": 6796
                    },
                    {
                      "time": 1710842400000,
                      "hour": "17",
                      "counter": 6733
                    },
                    {
                      "time": 1710846000000,
                      "hour": "18",
                      "counter": 7695
                    },
                    {
                      "time": 1710849600000,
                      "hour": "19",
                      "counter": 7776
                    },
                    {
                      "time": 1710853200000,
                      "hour": "20",
                      "counter": 6612
                    },
                    {
                      "time": 1710856800000,
                      "hour": "21",
                      "counter": 6048
                    },
                    {
                      "time": 1710860400000,
                      "hour": "22",
                      "counter": 6125
                    },
                    {
                      "time": 1710864000000,
                      "hour": "23",
                      "counter": 6085
                    },
                    {
                      "time": 1710867600000,
                      "hour": "00",
                      "counter": 5981
                    },
                    {
                      "time": 1710871200000,
                      "hour": "01",
                      "counter": 4981
                    },
                    {
                      "time": 1710874800000,
                      "hour": "02",
                      "counter": 4141
                    },
                    {
                      "time": 1710878400000,
                      "hour": "03",
                      "counter": 3319
                    },
                    {
                      "time": 1710882000000,
                      "hour": "04",
                      "counter": 2713
                    },
                    {
                      "time": 1710885600000,
                      "hour": "05",
                      "counter": 2424
                    },
                    {
                      "time": 1710889200000,
                      "hour": "06",
                      "counter": 3228
                    },
                    {
                      "time": 1710892800000,
                      "hour": "07",
                      "counter": 5554
                    },
                    {
                      "time": 1710896400000,
                      "hour": "08",
                      "counter": 7263
                    },
                    {
                      "time": 1710900000000,
                      "hour": "09",
                      "counter": 6996
                    },
                    {
                      "time": 1710903600000,
                      "hour": "10",
                      "counter": 7281
                    },
                    {
                      "time": 1710907200000,
                      "hour": "11",
                      "counter": 6697
                    },
                    {
                      "time": 1710910800000,
                      "hour": "12",
                      "counter": 6113
                    },
                    {
                      "time": 1710914400000,
                      "hour": "13",
                      "counter": 7489
                    },
                    {
                      "time": 1710918000000,
                      "hour": "14",
                      "counter": 7562
                    }
                  ],
                  "Z7Z0DCU9": [
                    {
                      "time": 1710835200000,
                      "hour": "15",
                      "counter": 5146
                    },
                    {
                      "time": 1710838800000,
                      "hour": "16",
                      "counter": 4956
                    },
                    {
                      "time": 1710842400000,
                      "hour": "17",
                      "counter": 5192
                    },
                    {
                      "time": 1710846000000,
                      "hour": "18",
                      "counter": 5770
                    },
                    {
                      "time": 1710849600000,
                      "hour": "19",
                      "counter": 6024
                    },
                    {
                      "time": 1710853200000,
                      "hour": "20",
                      "counter": 4965
                    },
                    {
                      "time": 1710856800000,
                      "hour": "21",
                      "counter": 4852
                    },
                    {
                      "time": 1710860400000,
                      "hour": "22",
                      "counter": 4708
                    },
                    {
                      "time": 1710864000000,
                      "hour": "23",
                      "counter": 4242
                    },
                    {
                      "time": 1710867600000,
                      "hour": "00",
                      "counter": 3676
                    },
                    {
                      "time": 1710871200000,
                      "hour": "01",
                      "counter": 2792
                    },
                    {
                      "time": 1710874800000,
                      "hour": "02",
                      "counter": 1949
                    },
                    {
                      "time": 1710878400000,
                      "hour": "03",
                      "counter": 1716
                    },
                    {
                      "time": 1710882000000,
                      "hour": "04",
                      "counter": 1380
                    },
                    {
                      "time": 1710885600000,
                      "hour": "05",
                      "counter": 1599
                    },
                    {
                      "time": 1710889200000,
                      "hour": "06",
                      "counter": 2160
                    },
                    {
                      "time": 1710892800000,
                      "hour": "07",
                      "counter": 4118
                    },
                    {
                      "time": 1710896400000,
                      "hour": "08",
                      "counter": 6032
                    },
                    {
                      "time": 1710900000000,
                      "hour": "09",
                      "counter": 5741
                    },
                    {
                      "time": 1710903600000,
                      "hour": "10",
                      "counter": 5355
                    },
                    {
                      "time": 1710907200000,
                      "hour": "11",
                      "counter": 5158
                    },
                    {
                      "time": 1710910800000,
                      "hour": "12",
                      "counter": 4660
                    },
                    {
                      "time": 1710914400000,
                      "hour": "13",
                      "counter": 5714
                    },
                    {
                      "time": 1710918000000,
                      "hour": "14",
                      "counter": 5104
                    }
                  ]
                },
                "totalScore": 22518
              },
              "chartType": "song",
              "sectionType": "RTChart",
              "sectionId": "hZC"
            },
            {
              "items": [
                {
                  "banner": "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/chart-song-vn.png",
                  "cover": "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/song-vn-2x.jpg",
                  "country": "vn",
                  "type": "song",
                  "group": [
                    {
                      "id": 1,
                      "name": "Bài hát",
                      "type": "song",
                      "link": "/zing-chart-tuan/Bai-hat-Viet-Nam/IWZ9Z08I.html"
                    },
                    {
                      "id": 2,
                      "name": "MV",
                      "type": "video",
                      "link": "/zing-chart-tuan/MV-Viet-Nam/IWZ9Z08W.html"
                    }
                  ],
                  "link": "/zing-chart-tuan/Bai-hat-Viet-Nam/IWZ9Z08I.html",
                  "startDate": "01/01",
                  "endDate": "07/01"
                },
                {
                  "banner": "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/chart-song-us.png",
                  "cover": "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_usuk.jpg",
                  "country": "us",
                  "type": "song",
                  "group": [
                    {
                      "id": 50,
                      "name": "Bài hát",
                      "type": "song",
                      "link": "/zing-chart-tuan/Bai-hat-US-UK/IWZ9Z0BW.html"
                    },
                    {
                      "id": 52,
                      "name": "MV",
                      "type": "video",
                      "link": "/zing-chart-tuan/MV-US-UK/IWZ9Z0BU.html"
                    }
                  ],
                  "link": "/zing-chart-tuan/Bai-hat-US-UK/IWZ9Z0BW.html",
                  "startDate": "01/01",
                  "endDate": "07/01"
                },
                {
                  "banner": "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/chart-song-kpop.png",
                  "cover": "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_kpop.jpg",
                  "country": "korea",
                  "type": "song",
                  "group": [
                    {
                      "id": 51,
                      "name": "Bài hát",
                      "type": "song",
                      "link": "/zing-chart-tuan/Bai-hat-KPop/IWZ9Z0BO.html"
                    },
                    {
                      "id": 53,
                      "name": "MV",
                      "type": "video",
                      "link": "/zing-chart-tuan/MV-KPop/IWZ9Z0BZ.html"
                    }
                  ],
                  "link": "/zing-chart-tuan/Bai-hat-KPop/IWZ9Z0BO.html",
                  "startDate": "01/01",
                  "endDate": "07/01"
                }
              ],
              "sectionType": "weekChart"
            },
            {
              "sectionType": "playlist",
              "viewType": "slider",
              "title": "Top 100",
              "link": "/top100",
              "sectionId": "h100",
              "items": [
                {
                  "encodeId": "ZWZB969E",
                  "title": "Top 100 Bài Hát Nhạc Trẻ Hay Nhất",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/5/6/f/4/56f4512df2642e3a7f370d202f4ddbbf.jpg",
                  "isoffical": true,
                  "link": "/album/Top-100-Bai-Hat-Nhac-Tre-Hay-Nhat-MONO-Jack-J97-Phat-Huy-T4-Dunghoangpham/ZWZB969E.html",
                  "isIndie": false,
                  "releaseDate": "",
                  "sortDescription": "Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục.",
                  "releasedAt": 0,
                  "genreIds": [
                    "IWZ9Z08I"
                  ],
                  "PR": false,
                  "artists": [
                    {
                      "id": "IW7BFU8F",
                      "name": "MONO",
                      "link": "/nghe-si/MONO-Nguyen-Viet-Hoang",
                      "spotlight": false,
                      "alias": "MONO-Nguyen-Viet-Hoang",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/a/a/a/6aaa64ffa6e187f8cc842083acd2cbb7.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/6/a/a/a/6aaa64ffa6e187f8cc842083acd2cbb7.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6BUFZBCD",
                      "totalFollow": 32047
                    },
                    {
                      "id": "IW6WCI7U",
                      "name": "Jack - J97",
                      "link": "/Jack-J97",
                      "spotlight": false,
                      "alias": "Jack-J97",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/7/6/a/176a17f0bf5adfeecf60d8e1d00910c7.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/7/6/a/176a17f0bf5adfeecf60d8e1d00910c7.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZUDICAF0",
                      "totalFollow": 2529294
                    },
                    {
                      "id": "IW6ACZZE",
                      "name": "Phát Huy T4",
                      "link": "/Phat-Huy-T4",
                      "spotlight": false,
                      "alias": "Phat-Huy-T4",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/8/4/c/084ce96f1ad5071f10df1646e3e8307f.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/0/8/4/c/084ce96f1ad5071f10df1646e3e8307f.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "689U9D76",
                      "totalFollow": 31450
                    },
                    {
                      "id": "IW76EDEC",
                      "name": "Dunghoangpham",
                      "link": "/nghe-si/Dunghoangpham",
                      "spotlight": false,
                      "alias": "Dunghoangpham",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/0/5/6/7056cb2ccbef8dc5048eacbb24d91ca1.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/0/5/6/7056cb2ccbef8dc5048eacbb24d91ca1.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6ABFC9AO",
                      "totalFollow": 31081
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ",
                  "playItemMode": 0,
                  "subType": 24,
                  "uid": 0,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/6/f/4/56f4512df2642e3a7f370d202f4ddbbf.jpg",
                  "isShuffle": true,
                  "isPrivate": false,
                  "userName": "Zing MP3",
                  "isAlbum": false,
                  "textType": "Playlist",
                  "isSingle": false
                },
                {
                  "encodeId": "ZWZB96AB",
                  "title": "Top 100 Pop Âu Mỹ Hay Nhất",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/7/0/7/3/707385004545cb57d81234ebce42d598.jpg",
                  "isoffical": true,
                  "link": "/album/Top-100-Pop-Au-My-Hay-Nhat-Adele-Miley-Cyrus-Olivia-Rodrigo-Troye-Sivan/ZWZB96AB.html",
                  "isIndie": false,
                  "releaseDate": "",
                  "sortDescription": "Top 100 Nhạc Pop Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Pop Âu Mỹ, được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục.",
                  "releasedAt": 0,
                  "genreIds": [
                    "IWZ9Z08O",
                    "IWZ9Z097"
                  ],
                  "PR": false,
                  "artists": [
                    {
                      "id": "IWZ9Z09U",
                      "name": "Adele",
                      "link": "/nghe-si/Adele",
                      "spotlight": false,
                      "alias": "Adele",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/6/d/3/c6d323a06f7154a8e05056cb435889ea.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/6/d/3/c6d323a06f7154a8e05056cb435889ea.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6UAEWAAB",
                      "totalFollow": 27152
                    },
                    {
                      "id": "IWZ9ZO96",
                      "name": "Miley Cyrus",
                      "link": "/Miley-Cyrus",
                      "spotlight": false,
                      "alias": "Miley-Cyrus",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/8/a/0/b8a03e4111b611fedfec6346559d96c9.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/b/8/a/0/b8a03e4111b611fedfec6346559d96c9.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZAE9OD",
                      "totalFollow": 21225
                    },
                    {
                      "id": "IW6OD7A6",
                      "name": "Olivia Rodrigo",
                      "link": "/nghe-si/Olivia-Rodrigo",
                      "spotlight": false,
                      "alias": "Olivia-Rodrigo",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/2/f/5/82f5eabcc86de908dc33a1245ef45461.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/2/f/5/82f5eabcc86de908dc33a1245ef45461.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "68ZD8IAI",
                      "totalFollow": 7412
                    },
                    {
                      "id": "IWZAWD00",
                      "name": "Troye Sivan",
                      "link": "/nghe-si/Troye-Sivan",
                      "spotlight": false,
                      "alias": "Troye-Sivan",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/2/4/e/524e69bd5a76ed11bb7cc1c4563ae189.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/2/4/e/524e69bd5a76ed11bb7cc1c4563ae189.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "ZOEWEZO0",
                      "totalFollow": 5641
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ",
                  "playItemMode": 0,
                  "subType": 24,
                  "uid": 88,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/0/7/3/707385004545cb57d81234ebce42d598.jpg",
                  "isShuffle": true,
                  "isPrivate": false,
                  "userName": "Zing MP3",
                  "isAlbum": false,
                  "textType": "Playlist",
                  "isSingle": false
                },
                {
                  "encodeId": "ZWZB96C7",
                  "title": "Top 100 Nhạc Electronic/Dance Âu Mỹ Hay Nhất",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/0/7/2/a/072ad73889c625846b27fea36fc12c13.jpg",
                  "isoffical": true,
                  "link": "/album/Top-100-Nhac-Electronic-Dance-Au-My-Hay-Nhat-Alan-Walker-K-391-Emelie-Hollow-Sabrina-Carpenter/ZWZB96C7.html",
                  "isIndie": false,
                  "releaseDate": "",
                  "sortDescription": "Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ, được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục.",
                  "releasedAt": 0,
                  "genreIds": [
                    "IWZ9Z08O",
                    "IWZ9Z09A"
                  ],
                  "PR": false,
                  "artists": [
                    {
                      "id": "IWZA6CCW",
                      "name": "Alan Walker",
                      "link": "/Alan-Walker",
                      "spotlight": false,
                      "alias": "Alan-Walker",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/a/6/b/ba6b56ca02dd06f37693d945acfcdad9.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/b/a/6/b/ba6b56ca02dd06f37693d945acfcdad9.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZCU89E",
                      "totalFollow": 1191325
                    },
                    {
                      "id": "IWZA7OIA",
                      "name": "K-391",
                      "link": "/K-391",
                      "spotlight": false,
                      "alias": "K-391",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/e/b/b/aebbce76ebd8ef9bfa61e5ba5b511524.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/e/b/b/aebbce76ebd8ef9bfa61e5ba5b511524.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "6UB6AABC",
                      "totalFollow": 188438
                    },
                    {
                      "id": "IWZD7OZ0",
                      "name": "Emelie Hollow",
                      "link": "/nghe-si/Emelie-Hollow",
                      "spotlight": false,
                      "alias": "Emelie-Hollow",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/9/e/9/e9e99eb4d4f51f77c96fd6f8a9ea4607.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/e/9/e/9/e9e99eb4d4f51f77c96fd6f8a9ea4607.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6UB6BIFO",
                      "totalFollow": 39862
                    },
                    {
                      "id": "IWZ9CUB9",
                      "name": "Sabrina Carpenter",
                      "link": "/nghe-si/Sabrina-Carpenter",
                      "spotlight": false,
                      "alias": "Sabrina-Carpenter",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/c/c/1/7cc1f3378ca955619f9389822a20e69f.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/c/c/1/7cc1f3378ca955619f9389822a20e69f.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6UB6966U",
                      "totalFollow": 58289
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ",
                  "playItemMode": 0,
                  "subType": 24,
                  "uid": 0,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/7/2/a/072ad73889c625846b27fea36fc12c13.jpg",
                  "isShuffle": true,
                  "isPrivate": false,
                  "userName": "Zing MP3",
                  "isAlbum": false,
                  "textType": "Playlist",
                  "isSingle": false
                },
                {
                  "encodeId": "ZWZB969F",
                  "title": "Top 100 Nhạc Trữ Tình Hay Nhất",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/a/2/8/9/a289b62342109030bbe4fb306dd16f0d.jpg",
                  "isoffical": true,
                  "link": "/album/Top-100-Nhac-Tru-Tinh-Hay-Nhat-Nhu-Quynh-Manh-Quynh-Luu-Anh-Loan-Le-Sang/ZWZB969F.html",
                  "isIndie": false,
                  "releaseDate": "",
                  "sortDescription": "Top 100 Nhạc Trữ Tình là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trữ Tình, được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục.",
                  "releasedAt": 0,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ9Z08B"
                  ],
                  "PR": false,
                  "artists": [
                    {
                      "id": "IWZ9ZWA7",
                      "name": "Như Quỳnh",
                      "link": "/Nhu-Quynh",
                      "spotlight": false,
                      "alias": "Nhu-Quynh",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/c/4/6/dc46b91ae6e40a586283b03f31312baa.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/c/4/6/dc46b91ae6e40a586283b03f31312baa.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZBOZOA",
                      "totalFollow": 318142
                    },
                    {
                      "id": "IWZ9ZWUO",
                      "name": "Mạnh Quỳnh",
                      "link": "/Manh-Quynh",
                      "spotlight": false,
                      "alias": "Manh-Quynh",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/d/4/8/dd480f10893eb35ade277cbe1bd2bd8a.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/d/4/8/dd480f10893eb35ade277cbe1bd2bd8a.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZO698D76",
                      "totalFollow": 330959
                    },
                    {
                      "id": "IWZ96ZF6",
                      "name": "Lưu Ánh Loan",
                      "link": "/Luu-Anh-Loan",
                      "spotlight": false,
                      "alias": "Luu-Anh-Loan",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/4/1/c/341ca164b5e680fc624cd7b22d857c4d.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/4/1/c/341ca164b5e680fc624cd7b22d857c4d.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZOZWW887",
                      "totalFollow": 232837
                    },
                    {
                      "id": "IWZ9896F",
                      "name": "Lê Sang",
                      "link": "/nghe-si/Le-Sang",
                      "spotlight": false,
                      "alias": "Le-Sang",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/3/735b69259492a8ccf8a52f0b26f932e9_1511494894.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/3/735b69259492a8ccf8a52f0b26f932e9_1511494894.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "ZWZ98O77",
                      "totalFollow": 158426
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ",
                  "playItemMode": 0,
                  "subType": 24,
                  "uid": 0,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/2/8/9/a289b62342109030bbe4fb306dd16f0d.jpg",
                  "isShuffle": true,
                  "isPrivate": false,
                  "userName": "Zing MP3",
                  "isAlbum": false,
                  "textType": "Playlist",
                  "isSingle": false
                },
                {
                  "encodeId": "ZWZB96DC",
                  "title": "Top 100 Nhạc Hàn Quốc Hay Nhất",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/7/5/4/9/75493821fac5747febbb3f08d0d9432f.jpg",
                  "isoffical": true,
                  "link": "/album/Top-100-Nhac-Han-Quoc-Hay-Nhat-Jung-Kook-JISOO-NewJeans-G-I-DLE/ZWZB96DC.html",
                  "isIndie": false,
                  "releaseDate": "",
                  "sortDescription": "Top 100 Nhạc Hàn Quốc Hay Nhất là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Hàn Quốc, được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục.",
                  "releasedAt": 0,
                  "genreIds": [
                    "IWZ9Z08W"
                  ],
                  "PR": false,
                  "artists": [
                    {
                      "id": "IW6WFCC0",
                      "name": "Jung Kook",
                      "link": "/nghe-si/Jung-Kook",
                      "spotlight": false,
                      "alias": "Jung-Kook",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/8/7/7/d877171405c3fa07ae32909180461ce2.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/8/7/7/d877171405c3fa07ae32909180461ce2.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6BBD8DIC",
                      "totalFollow": 13625
                    },
                    {
                      "id": "IWZAEEA7",
                      "name": "JISOO",
                      "link": "/nghe-si/Jisoo-BLACKPINK",
                      "spotlight": false,
                      "alias": "Jisoo-BLACKPINK",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/8/8/7/288769d709db46bb3acaae1c6fc3001d.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/8/8/7/288769d709db46bb3acaae1c6fc3001d.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "totalFollow": 46880
                    },
                    {
                      "id": "IW7CUCOZ",
                      "name": "NewJeans",
                      "link": "/nghe-si/NewJeans",
                      "spotlight": false,
                      "alias": "NewJeans",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/0/8/c/d08c510a374c2366c4ccf6d86a3f19ee.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/0/8/c/d08c510a374c2366c4ccf6d86a3f19ee.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6BZWODFW",
                      "totalFollow": 19431
                    },
                    {
                      "id": "IW6W8ADU",
                      "name": "(G)I-DLE",
                      "link": "/G-I-DLE",
                      "spotlight": false,
                      "alias": "G-I-DLE",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/c/7/8/0c78755e0b347b7a28a8834c8d4ca6ac.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/0/c/7/8/0c78755e0b347b7a28a8834c8d4ca6ac.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "6UW9B8DU",
                      "totalFollow": 105137
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ",
                  "playItemMode": 0,
                  "subType": 24,
                  "uid": 0,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/5/4/9/75493821fac5747febbb3f08d0d9432f.jpg",
                  "isShuffle": true,
                  "isPrivate": false,
                  "userName": "Zing MP3",
                  "isAlbum": false,
                  "textType": "Playlist",
                  "isSingle": false
                },
                {
                  "encodeId": "ZWZB96AI",
                  "title": "Top 100 Nhạc Rap Việt Nam Hay Nhất",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/0/f/0/9/0f09a6f34f4b920a07384090a61fc676.jpg",
                  "isoffical": true,
                  "link": "/album/Top-100-Nhac-Rap-Viet-Nam-Hay-Nhat-HIEUTHUHAI-Phao-B-Ray-Phuc-Du/ZWZB96AI.html",
                  "isIndie": false,
                  "releaseDate": "",
                  "sortDescription": "Top 100 Nhạc Rap Việt Nam Hay Nhất là danh sách 100 ca khúc hot nhất hiện tại của thể loại nhạc Rap Việt Nam, được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục.",
                  "releasedAt": 0,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ9Z089"
                  ],
                  "PR": false,
                  "artists": [
                    {
                      "id": "IW6ZZ690",
                      "name": "HIEUTHUHAI",
                      "link": "/nghe-si/HIEUTHUHAI",
                      "spotlight": false,
                      "alias": "HIEUTHUHAI",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/2/a/1/c2a154106353063625c9412ed20443a0.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/2/a/1/c2a154106353063625c9412ed20443a0.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6UW9BFUW",
                      "totalFollow": 88714
                    },
                    {
                      "id": "IW6Z87FU",
                      "name": "Pháo",
                      "link": "/Phao",
                      "spotlight": false,
                      "alias": "Phao",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/2/e/b/d2eb54141a77ef263640d735d565615d.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/2/e/b/d2eb54141a77ef263640d735d565615d.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "6UW9CWZO",
                      "totalFollow": 78682
                    },
                    {
                      "id": "IWZAOAZZ",
                      "name": "B Ray",
                      "link": "/B-Ray",
                      "spotlight": false,
                      "alias": "B-Ray",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/3/6/2/436212085e16bff633b05aeec358a770.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/4/3/6/2/436212085e16bff633b05aeec358a770.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZODEAZBA",
                      "totalFollow": 298409
                    },
                    {
                      "id": "IW6U8EWE",
                      "name": "Phúc Du",
                      "link": "/nghe-si/Phuc-Du",
                      "spotlight": false,
                      "alias": "Phuc-Du",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/3/8/e/738e7bf4492dcc9a6bf7f3c13a23ff73.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/3/8/e/738e7bf4492dcc9a6bf7f3c13a23ff73.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6UW9BCAZ",
                      "totalFollow": 13742
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ",
                  "playItemMode": 0,
                  "subType": 24,
                  "uid": 0,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/f/0/9/0f09a6f34f4b920a07384090a61fc676.jpg",
                  "isShuffle": true,
                  "isPrivate": false,
                  "userName": "Zing MP3",
                  "isAlbum": false,
                  "textType": "Playlist",
                  "isSingle": false
                },
                {
                  "encodeId": "ZWZB96AU",
                  "title": "Top 100 Nhạc Quê Hương Hay Nhất",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/8/0/8/6/8086cd6c56e5d1dc94c6fe054bc641ad.jpg",
                  "isoffical": true,
                  "link": "/album/Top-100-Nhac-Que-Huong-Hay-Nhat-Duong-Hong-Loan-Ha-Van-Phi-Nhung-To-My/ZWZB96AU.html",
                  "isIndie": false,
                  "releaseDate": "",
                  "sortDescription": "Top 100 Nhạc Quê Hương Hay Nhất là danh sách 100 ca khúc hot nhất hiện tại của thể loại nhạc Quê Hương, được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục.",
                  "releasedAt": 0,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ9Z08D"
                  ],
                  "PR": false,
                  "artists": [
                    {
                      "id": "IWZ9BZ0B",
                      "name": "Dương Hồng Loan",
                      "link": "/Duong-Hong-Loan",
                      "spotlight": false,
                      "alias": "Duong-Hong-Loan",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/c/b/2/1cb27149662e3f0d5938f73c5b422e8b.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/c/b/2/1cb27149662e3f0d5938f73c5b422e8b.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZOZAOI76",
                      "totalFollow": 337209
                    },
                    {
                      "id": "IWZ9EAA6",
                      "name": "Hà Vân",
                      "link": "/nghe-si/Ha-Van-bolero",
                      "spotlight": false,
                      "alias": "Ha-Van-bolero",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/1/217be99f6c0eb234d49ff1961ffe4e45_1513141278.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/1/217be99f6c0eb234d49ff1961ffe4e45_1513141278.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "ZO698FCE",
                      "totalFollow": 11681
                    },
                    {
                      "id": "IWZ9ZIF6",
                      "name": "Phi Nhung",
                      "link": "/nghe-si/Phi-Nhung",
                      "spotlight": false,
                      "alias": "Phi-Nhung",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/8/e/f/28ef642056c5ea391f0912b1e05d040a.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/8/e/f/28ef642056c5ea391f0912b1e05d040a.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "ZWZ9DWUA",
                      "totalFollow": 525504
                    },
                    {
                      "id": "IWZA6D7W",
                      "name": "Tố My",
                      "link": "/nghe-si/To-My",
                      "spotlight": false,
                      "alias": "To-My",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/f/3/7/2/f372ff1bee0712828b7ce9e8727614c1.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/f/3/7/2/f372ff1bee0712828b7ce9e8727614c1.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "ZWZCUF70",
                      "totalFollow": 104928
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ",
                  "playItemMode": 0,
                  "subType": 24,
                  "uid": 0,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/0/8/6/8086cd6c56e5d1dc94c6fe054bc641ad.jpg",
                  "isShuffle": true,
                  "isPrivate": false,
                  "userName": "Zing MP3",
                  "isAlbum": false,
                  "textType": "Playlist",
                  "isSingle": false
                },
                {
                  "encodeId": "ZWZB96AO",
                  "title": "Top 100 Nhạc Cách Mạng Việt Nam",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/f/2/6/4/f26467e87075a96bf974a8c49450bad5.jpg",
                  "isoffical": true,
                  "link": "/album/Top-100-Nhac-Cach-Mang-Viet-Nam-Truong-Kha-Quang-Ha-Tinh-Ca-Viet-Ta-Minh-Tam/ZWZB96AO.html",
                  "isIndie": false,
                  "releaseDate": "",
                  "sortDescription": "Top 100 Nhạc Cách Mạng Hay Nhất là danh sách 100 ca khúc hot nhất hiện tại của thể loại nhạc Cách Mạng, được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục.",
                  "releasedAt": 0,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ9Z08C"
                  ],
                  "PR": false,
                  "artists": [
                    {
                      "id": "IWZA70Z0",
                      "name": "Trường Kha",
                      "link": "/nghe-si/Truong-Kha",
                      "spotlight": false,
                      "alias": "Truong-Kha",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/8/4/d/684dfeb0812b8d43b74de54d8194bd37.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/6/8/4/d/684dfeb0812b8d43b74de54d8194bd37.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "ZOEUZ7E7",
                      "totalFollow": 1684
                    },
                    {
                      "id": "IWZ9ZBUC",
                      "name": "Quang Hà",
                      "link": "/Quang-Ha",
                      "spotlight": false,
                      "alias": "Quang-Ha",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/2/4/4/c244a302e789ba65eb1ab2e82435a5c5.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/2/4/4/c244a302e789ba65eb1ab2e82435a5c5.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZ9D09U",
                      "totalFollow": 33159
                    },
                    {
                      "id": "IW6ZB87B",
                      "name": "Tình Ca Việt",
                      "link": "/nghe-si/Tinh-Ca-Viet",
                      "spotlight": false,
                      "alias": "Tinh-Ca-Viet",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/e/e/c/1eecb94935bebe140b24b54a08a3a610.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/e/e/c/1eecb94935bebe140b24b54a08a3a610.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6UW9COZC",
                      "totalFollow": 415
                    },
                    {
                      "id": "IWZ9ZD9E",
                      "name": "Tạ Minh Tâm",
                      "link": "/nghe-si/Ta-Minh-Tam",
                      "spotlight": false,
                      "alias": "Ta-Minh-Tam",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/0/b0e8a5bc658f9852f31e37edb18335d5_1511089573.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/b/0/b0e8a5bc658f9852f31e37edb18335d5_1511089573.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6UW99OI0",
                      "totalFollow": 2253
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ",
                  "playItemMode": 0,
                  "subType": 24,
                  "uid": 0,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/2/6/4/f26467e87075a96bf974a8c49450bad5.jpg",
                  "isShuffle": true,
                  "isPrivate": false,
                  "userName": "Zing MP3",
                  "isAlbum": false,
                  "textType": "Playlist",
                  "isSingle": false
                },
                {
                  "encodeId": "ZWZB96A0",
                  "title": "Top 100 Nhạc Rock Việt Nam Hay Nhất",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/f/3/2/e/f32e9529c106f570f5f50db982e27574.jpg",
                  "isoffical": true,
                  "link": "/album/Top-100-Nhac-Rock-Viet-Nam-Hay-Nhat-7UPPERCUTS-The-Cassette-DA-SO-TOI-The-Flob/ZWZB96A0.html",
                  "isIndie": false,
                  "releaseDate": "",
                  "sortDescription": "Top 100 Nhạc Rock Việt Nam là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Rock Việt Nam, được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục.",
                  "releasedAt": 0,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ9Z08A"
                  ],
                  "PR": false,
                  "artists": [
                    {
                      "id": "IW776970",
                      "name": "7UPPERCUTS",
                      "link": "/nghe-si/7UPPERCUTS",
                      "spotlight": false,
                      "alias": "7UPPERCUTS",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/f/e/4/5fe48c48d2a2f9c178b7079a22706653.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/5/f/e/4/5fe48c48d2a2f9c178b7079a22706653.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6B7WAC76",
                      "totalFollow": 1685
                    },
                    {
                      "id": "IW77909A",
                      "name": "The Cassette",
                      "link": "/nghe-si/The-Cassette",
                      "spotlight": false,
                      "alias": "The-Cassette",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/2/7/b/d27b1af7ed82028ef6ac0687030742ec.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/2/7/b/d27b1af7ed82028ef6ac0687030742ec.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6BW0WO0U",
                      "totalFollow": 422
                    },
                    {
                      "id": "IW7880FC",
                      "name": "ĐÁ SỐ TỚI",
                      "link": "/nghe-si/DA-SO-TOI",
                      "spotlight": false,
                      "alias": "DA-SO-TOI",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/1/2/f/312fa90c9bd94114c6cbcee52d4fd0b6.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/1/2/f/312fa90c9bd94114c6cbcee52d4fd0b6.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6BWC9UUB",
                      "totalFollow": 281
                    },
                    {
                      "id": "IW78WW70",
                      "name": "The Flob",
                      "link": "/nghe-si/The-Flob",
                      "spotlight": false,
                      "alias": "The-Flob",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/6/b/0/d6b0035e7958eed36db85777473e30a4.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/d/6/b/0/d6b0035e7958eed36db85777473e30a4.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6BW8Z8F7",
                      "totalFollow": 324
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ",
                  "playItemMode": 0,
                  "subType": 24,
                  "uid": 0,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/3/2/e/f32e9529c106f570f5f50db982e27574.jpg",
                  "isShuffle": true,
                  "isPrivate": false,
                  "userName": "Zing MP3",
                  "isAlbum": false,
                  "textType": "Playlist",
                  "isSingle": false
                },
                {
                  "encodeId": "ZWZB96AW",
                  "title": "Top 100 Nhạc Dance Việt Nam Hay Nhất",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/7/f/0/d/7f0dfc8626e50179ac19e8ac75bed466.jpg",
                  "isoffical": true,
                  "link": "/album/Top-100-Nhac-Dance-Viet-Nam-Hay-Nhat-CUKAK-Phat-Ho-DINHLONG-Nal/ZWZB96AW.html",
                  "isIndie": false,
                  "releaseDate": "",
                  "sortDescription": "Top 100 Nhạc Dance Việt Nam Hay Nhất là danh sách 100 ca khúc hot nhất hiện tại của thể loại nhạc Dance Việt Nam, được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục.",
                  "releasedAt": 0,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ9Z0CW"
                  ],
                  "PR": false,
                  "artists": [
                    {
                      "id": "IW7O8E7F",
                      "name": "CUKAK",
                      "link": "/nghe-si/CUKAK",
                      "spotlight": false,
                      "alias": "CUKAK",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/f/a/b/c/fabcffe864c90a33221b4809a6d1eb2e.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/f/a/b/c/fabcffe864c90a33221b4809a6d1eb2e.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6B7WAAUE",
                      "totalFollow": 22643
                    },
                    {
                      "id": "IW67D9EI",
                      "name": "Phát Hồ",
                      "link": "/nghe-si/Phat-Ho",
                      "spotlight": false,
                      "alias": "Phat-Ho",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/8/8/b/888b8423d3907069ea22cca1786d0b72.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/8/8/b/888b8423d3907069ea22cca1786d0b72.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6B7WAWB7",
                      "totalFollow": 71567
                    },
                    {
                      "id": "IW6W8FO6",
                      "name": "DINHLONG",
                      "link": "/nghe-si/DINHLONG",
                      "spotlight": false,
                      "alias": "DINHLONG",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/6/3/5/a6354433745f86479d69eac08c518405.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/6/3/5/a6354433745f86479d69eac08c518405.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6UW9B9U9",
                      "totalFollow": 29734
                    },
                    {
                      "id": "IW6A7CEE",
                      "name": "Nal",
                      "link": "/Nal",
                      "spotlight": false,
                      "alias": "Nal",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/9/f/0/29f036bcab12ef4e01869cd393fa9b67.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/9/f/0/29f036bcab12ef4e01869cd393fa9b67.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "67DDBWBE",
                      "totalFollow": 116638
                    }
                  ],
                  "artistsNames": "Nhiều nghệ sĩ",
                  "playItemMode": 0,
                  "subType": 24,
                  "uid": 0,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/f/0/d/7f0dfc8626e50179ac19e8ac75bed466.jpg",
                  "isShuffle": true,
                  "isPrivate": false,
                  "userName": "Zing MP3",
                  "isAlbum": false,
                  "textType": "Playlist",
                  "isSingle": false
                }
              ]
            },
            {
              "sectionType": "adBanner",
              "adId": "zmp3_Masthead_Inline",
              "pageType": "home"
            },
            {
              "sectionType": "playlist",
              "viewType": "slider",
              "title": "Album Hot",
              "link": "",
              "sectionId": "hAlbum",
              "items": [
                {
                  "encodeId": "6C00I06D",
                  "title": "Anh Đừng Đi Xa Quá (Single)",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/b/8/5/8/b8584bc83639545a57be947b1cbd35f2.jpg",
                  "isoffical": true,
                  "link": "/album/Anh-Dung-Di-Xa-Qua-Single-Soai-Nhi/6C00I06D.html",
                  "isIndie": false,
                  "releaseDate": "19/03/2024",
                  "sortDescription": "",
                  "releasedAt": 1710849600000,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ97FCD"
                  ],
                  "PR": false,
                  "artists": [
                    {
                      "id": "IW6WAFDC",
                      "name": "Soái Nhi",
                      "link": "/Soai-Nhi",
                      "spotlight": false,
                      "alias": "Soai-Nhi",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/4/6/4/74644366e9587d576a9b352f63b30084.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/4/6/4/74644366e9587d576a9b352f63b30084.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "6UW9BB09",
                      "totalFollow": 46004
                    }
                  ],
                  "artistsNames": "Soái Nhi",
                  "playItemMode": 0,
                  "subType": 1,
                  "uid": 456,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/8/5/8/b8584bc83639545a57be947b1cbd35f2.jpg",
                  "isShuffle": false,
                  "isPrivate": false,
                  "userName": "Zing MP3",
                  "isAlbum": true,
                  "textType": "Single",
                  "isSingle": true
                },
                {
                  "encodeId": "6BFE6C0Z",
                  "title": "Làm Sao Để Quên Em (Single)",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/f/b/c/2/fbc2b957c6569e68b33e83ab09d181eb.jpg",
                  "isoffical": true,
                  "link": "/album/Lam-Sao-De-Quen-Em-Single-Ricky/6BFE6C0Z.html",
                  "isIndie": false,
                  "releaseDate": "06/03/2024",
                  "sortDescription": "",
                  "releasedAt": 1709726400000,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ97FCD"
                  ],
                  "PR": false,
                  "artists": [
                    {
                      "id": "IW66Z6DB",
                      "name": "Ricky",
                      "link": "/nghe-si/Ricky.IW66Z6DB",
                      "spotlight": false,
                      "alias": "Ricky.IW66Z6DB",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/a/2/7/1a27769dccc5d485f84a9b68bd666be0.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/a/2/7/1a27769dccc5d485f84a9b68bd666be0.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6BFFZ8F8",
                      "totalFollow": 21
                    }
                  ],
                  "artistsNames": "Ricky",
                  "playItemMode": 0,
                  "subType": 1,
                  "uid": 456,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/b/c/2/fbc2b957c6569e68b33e83ab09d181eb.jpg",
                  "isShuffle": false,
                  "isPrivate": false,
                  "userName": "Zing MP3",
                  "isAlbum": true,
                  "textType": "Single",
                  "isSingle": true
                },
                {
                  "encodeId": "6C00F9W9",
                  "title": "Bức Tranh Lem Màu (Remix) (Single)",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/8/3/0/8/83081293c7a8b1be116576d0405b6b08.jpg",
                  "isoffical": true,
                  "link": "/album/Buc-Tranh-Lem-Mau-Remix-Single-Khang-Viet/6C00F9W9.html",
                  "isIndie": false,
                  "releaseDate": "15/03/2024",
                  "sortDescription": "",
                  "releasedAt": 1710489300000,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ9Z0CW"
                  ],
                  "PR": false,
                  "artists": [
                    {
                      "id": "IWZ9ZB7D",
                      "name": "Khang Việt",
                      "link": "/Khang-Viet",
                      "spotlight": false,
                      "alias": "Khang-Viet",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/8/9/5/0/8950a629935a57c1a31ed8148cbb51e6.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/8/9/5/0/8950a629935a57c1a31ed8148cbb51e6.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZB0IAO",
                      "totalFollow": 68575
                    }
                  ],
                  "artistsNames": "Khang Việt",
                  "playItemMode": 0,
                  "subType": 1,
                  "uid": 456,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/3/0/8/83081293c7a8b1be116576d0405b6b08.jpg",
                  "isShuffle": false,
                  "isPrivate": false,
                  "userName": "Zing MP3",
                  "isAlbum": true,
                  "textType": "Single",
                  "isSingle": true
                },
                {
                  "encodeId": "SC00FA80",
                  "title": "Tự Em Thương Mình (Single)",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/4/0/a/8/40a850c9056f47e54736e8a956b68650.jpg",
                  "isoffical": true,
                  "link": "/album/Tu-Em-Thuong-Minh-Single-Huong-Ly/SC00FA80.html",
                  "isIndie": false,
                  "releaseDate": "15/03/2024",
                  "sortDescription": "",
                  "releasedAt": 1710507600000,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ97FCD"
                  ],
                  "PR": false,
                  "artists": [
                    {
                      "id": "IW6ZO9UB",
                      "name": "Hương Ly",
                      "link": "/Huong-Ly",
                      "spotlight": false,
                      "alias": "Huong-Ly",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/f/3/0/7f30b1a5ea13a558838d9ad09f0a1247.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/f/3/0/7f30b1a5ea13a558838d9ad09f0a1247.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZZ67898D",
                      "totalFollow": 701270
                    }
                  ],
                  "artistsNames": "Hương Ly",
                  "playItemMode": 0,
                  "subType": 1,
                  "uid": 456,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/0/a/8/40a850c9056f47e54736e8a956b68650.jpg",
                  "isShuffle": false,
                  "isPrivate": false,
                  "userName": "Zing MP3",
                  "isAlbum": true,
                  "textType": "Single",
                  "isSingle": true,
                  "zoneid": "121377385470194400",
                  "type": "nativeAd"
                },
                {
                  "encodeId": "6C00I0C0",
                  "title": "Trả Cho Nhau (Single)",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/3/c/0/2/3c02b53b768aee23c4cc841f45011393.jpg",
                  "isoffical": true,
                  "link": "/album/Tra-Cho-Nhau-Single-Bach-Cong-Khanh/6C00I0C0.html",
                  "isIndie": false,
                  "releaseDate": "15/03/2024",
                  "sortDescription": "",
                  "releasedAt": 1710507600000,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ97FCD"
                  ],
                  "PR": false,
                  "artists": [
                    {
                      "id": "IWZ97006",
                      "name": "Bạch Công Khanh",
                      "link": "/Bach-Cong-Khanh",
                      "spotlight": false,
                      "alias": "Bach-Cong-Khanh",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/3/a/5/c3a5dd044d6fdf19802d655b1c4622c0.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/c/3/a/5/c3a5dd044d6fdf19802d655b1c4622c0.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZOADOZDO",
                      "totalFollow": 22222
                    }
                  ],
                  "artistsNames": "Bạch Công Khanh",
                  "playItemMode": 0,
                  "subType": 1,
                  "uid": 456,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/3/c/0/2/3c02b53b768aee23c4cc841f45011393.jpg",
                  "isShuffle": false,
                  "isPrivate": false,
                  "userName": "Zing MP3",
                  "isAlbum": true,
                  "textType": "Single",
                  "isSingle": true
                },
                {
                  "encodeId": "6BFEF06Z",
                  "title": "Hay Hứa Quá (Single)",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/9/b/f/8/9bf8c71dc7e0566d7b99d5a873c7556c.jpg",
                  "isoffical": true,
                  "link": "/album/Hay-Hua-Qua-Single-Tracy-Thao-My-KayDee/6BFEF06Z.html",
                  "isIndie": false,
                  "releaseDate": "06/03/2024",
                  "sortDescription": "",
                  "releasedAt": 1709658000000,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ9Z088",
                    "IWZ97FCD"
                  ],
                  "PR": false,
                  "artists": [
                    {
                      "id": "IWZAZWIC",
                      "name": "Tracy Thảo My",
                      "link": "/Tracy-Thao-My",
                      "spotlight": false,
                      "alias": "Tracy-Thao-My",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/b/1/c/1b1c630cd1450a3166a1f5fb6fc2b826.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/b/1/c/1b1c630cd1450a3166a1f5fb6fc2b826.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZUO88DEU",
                      "totalFollow": 64494
                    },
                    {
                      "id": "IW7ZCFEC",
                      "name": "KayDee",
                      "link": "/nghe-si/KayDee-USUK",
                      "spotlight": false,
                      "alias": "KayDee-USUK",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/a/2/7/1a27769dccc5d485f84a9b68bd666be0.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/a/2/7/1a27769dccc5d485f84a9b68bd666be0.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "68ED6AUU",
                      "totalFollow": 92
                    }
                  ],
                  "artistsNames": "Tracy Thảo My, KayDee",
                  "playItemMode": 0,
                  "subType": 1,
                  "uid": 342,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/b/f/8/9bf8c71dc7e0566d7b99d5a873c7556c.jpg",
                  "isShuffle": false,
                  "isPrivate": false,
                  "userName": "Zing MP3",
                  "isAlbum": true,
                  "textType": "Single",
                  "isSingle": true
                },
                {
                  "encodeId": "SC00F8A7",
                  "title": "Nơi Nào (Single)",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/1/c/f/e/1cfeec6d434ae790be2cf11297cd53a9.jpg",
                  "isoffical": true,
                  "link": "/album/Noi-Nao-Single-Tan-Pham-Hagii/SC00F8A7.html",
                  "isIndie": false,
                  "releaseDate": "16/03/2024",
                  "sortDescription": "",
                  "releasedAt": 1710594000000,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ97FCD"
                  ],
                  "PR": false,
                  "artists": [
                    {
                      "id": "IW8CFC7W",
                      "name": "Tân Phạm",
                      "link": "/nghe-si/Tan-Pham",
                      "spotlight": false,
                      "alias": "Tan-Pham",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/f/c/2/e/fc2ea01a2d98111664ce8e5696badf31.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/f/c/2/e/fc2ea01a2d98111664ce8e5696badf31.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6C00CIE8",
                      "totalFollow": 10
                    },
                    {
                      "id": "IW6UF087",
                      "name": "Hagii",
                      "link": "/nghe-si/Hagii",
                      "spotlight": false,
                      "alias": "Hagii",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/8/d/6/38d600f2edd5c87515e2d615c9023af9.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/3/8/d/6/38d600f2edd5c87515e2d615c9023af9.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6UW9BCDB",
                      "totalFollow": 3829
                    }
                  ],
                  "artistsNames": "Tân Phạm, Hagii",
                  "playItemMode": 0,
                  "subType": 1,
                  "uid": 456,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/c/f/e/1cfeec6d434ae790be2cf11297cd53a9.jpg",
                  "isShuffle": false,
                  "isPrivate": false,
                  "userName": "Zing MP3",
                  "isAlbum": true,
                  "textType": "Single",
                  "isSingle": true
                },
                {
                  "encodeId": "6C008ZUB",
                  "title": "Tình Yêu Bứt Phá (Single)",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/8/2/b/2/82b2b2c1904ed44f34d6d614cdb93fe0.jpg",
                  "isoffical": true,
                  "link": "/album/Tinh-Yeu-But-Pha-Single-Ong-My-My-San-Ji/6C008ZUB.html",
                  "isIndie": false,
                  "releaseDate": "16/03/2024",
                  "sortDescription": "",
                  "releasedAt": 1710590400000,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ97FCD"
                  ],
                  "PR": false,
                  "artists": [
                    {
                      "id": "IW8UWZA9",
                      "name": "Ong Mỹ Mỹ",
                      "link": "/nghe-si/Ong-My-My",
                      "spotlight": false,
                      "alias": "Ong-My-My",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/e/2/f/6e2f00234d7ea072e72f4169db1ff17d.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/6/e/2/f/6e2f00234d7ea072e72f4169db1ff17d.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6BAOA9F0",
                      "totalFollow": 81
                    },
                    {
                      "id": "IW89AIWA",
                      "name": "San Ji",
                      "link": "/nghe-si/San-Ji",
                      "spotlight": false,
                      "alias": "San-Ji",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/f/c/e/7fcead1249de55a63861df496ab2a888.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/f/c/e/7fcead1249de55a63861df496ab2a888.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6BD6ODD7",
                      "totalFollow": 10
                    }
                  ],
                  "artistsNames": "Ong Mỹ Mỹ, San Ji",
                  "playItemMode": 0,
                  "subType": 1,
                  "uid": 456,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/2/b/2/82b2b2c1904ed44f34d6d614cdb93fe0.jpg",
                  "isShuffle": false,
                  "isPrivate": false,
                  "userName": "Zing MP3",
                  "isAlbum": true,
                  "textType": "Single",
                  "isSingle": true,
                  "zoneid": "689345041809240802",
                  "type": "nativeAd"
                },
                {
                  "encodeId": "6C00I6AO",
                  "title": "Phận Đời Long Đong (Single)",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/0/9/3/4/0934acbeb6ebc755ed0ecfb08ab74e63.jpg",
                  "isoffical": true,
                  "link": "/album/Phan-Doi-Long-Dong-Single-Nguyen-Phi-Hai/6C00I6AO.html",
                  "isIndie": false,
                  "releaseDate": "15/03/2024",
                  "sortDescription": "",
                  "releasedAt": 1710504000000,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ97FCD"
                  ],
                  "PR": false,
                  "artists": [
                    {
                      "id": "IW76UWF7",
                      "name": "Nguyễn Phi Hải",
                      "link": "/nghe-si/Nguyen-Phi-Hai",
                      "spotlight": false,
                      "alias": "Nguyen-Phi-Hai",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/5/c/9/a5c98f7af92696bf2abc9b6a20bf9893.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/a/5/c/9/a5c98f7af92696bf2abc9b6a20bf9893.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "69WICC09",
                      "totalFollow": 788
                    }
                  ],
                  "artistsNames": "Nguyễn Phi Hải",
                  "playItemMode": 0,
                  "subType": 1,
                  "uid": 456,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/9/3/4/0934acbeb6ebc755ed0ecfb08ab74e63.jpg",
                  "isShuffle": false,
                  "isPrivate": false,
                  "userName": "Zing MP3",
                  "isAlbum": true,
                  "textType": "Single",
                  "isSingle": true
                },
                {
                  "encodeId": "6C00I68D",
                  "title": "Trạm Dừng Chân (Single)",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/9/a/1/5/9a15f849a1e4f2019ac58794b5d7f9e3.jpg",
                  "isoffical": true,
                  "link": "/album/Tram-Dung-Chan-Single-Luu-Chi-Vy-Saka-Truong-Tuyen/6C00I68D.html",
                  "isIndie": false,
                  "releaseDate": "11/03/2024",
                  "sortDescription": "",
                  "releasedAt": 1710142500000,
                  "genreIds": [
                    "IWZ9Z08I",
                    "IWZ97FCD"
                  ],
                  "PR": false,
                  "artists": [
                    {
                      "id": "IWZ9ZB9U",
                      "name": "Lưu Chí Vỹ",
                      "link": "/Luu-Chi-Vy",
                      "spotlight": false,
                      "alias": "Luu-Chi-Vy",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/6/2661b9a04d133cf188955a517d0315cf_1510026545.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/6/2661b9a04d133cf188955a517d0315cf_1510026545.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZAEWCI",
                      "totalFollow": 41435
                    },
                    {
                      "id": "IWZ97Z8D",
                      "name": "Saka Trương Tuyền",
                      "link": "/Saka-Truong-Tuyen",
                      "spotlight": false,
                      "alias": "Saka-Truong-Tuyen",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/9/e/7/e/9e7e7fc7f9eb380d7c72fb3f025171e8.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/9/e/7/e/9e7e7fc7f9eb380d7c72fb3f025171e8.jpg",
                      "isOA": true,
                      "isOABrand": false,
                      "playlistId": "ZWZ9DAD7",
                      "totalFollow": 104127
                    }
                  ],
                  "artistsNames": "Lưu Chí Vỹ, Saka Trương Tuyền",
                  "playItemMode": 0,
                  "subType": 1,
                  "uid": 456,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/a/1/5/9a15f849a1e4f2019ac58794b5d7f9e3.jpg",
                  "isShuffle": false,
                  "isPrivate": false,
                  "userName": "Zing MP3",
                  "isAlbum": true,
                  "textType": "Single",
                  "isSingle": true
                },
                {
                  "encodeId": "6BFF9UI8",
                  "title": "Wish You Hell - The 2nd Mini Album (EP)",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/6/5/f/e/65fe4890e6ea9137b34c75b0c82ae3fc.jpg",
                  "isoffical": true,
                  "link": "/album/Wish-You-Hell-The-2nd-Mini-Album-EP-WENDY/6BFF9UI8.html",
                  "isIndie": false,
                  "releaseDate": "12/03/2024",
                  "sortDescription": "",
                  "releasedAt": 1710176400000,
                  "genreIds": [
                    "IWZ9Z08W",
                    "IWZ9Z09W"
                  ],
                  "PR": false,
                  "artists": [
                    {
                      "id": "IWZ9ZFFU",
                      "name": "WENDY",
                      "link": "/nghe-si/Wendy-KPOP",
                      "spotlight": false,
                      "alias": "Wendy-KPOP",
                      "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/f/e/8/1fe8458cc632af49c71f320d8bf436bb.jpg",
                      "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/f/e/8/1fe8458cc632af49c71f320d8bf436bb.jpg",
                      "isOA": false,
                      "isOABrand": false,
                      "playlistId": "6UW99UO9",
                      "totalFollow": 5442
                    }
                  ],
                  "artistsNames": "WENDY",
                  "playItemMode": 0,
                  "subType": 1,
                  "uid": 342,
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/5/f/e/65fe4890e6ea9137b34c75b0c82ae3fc.jpg",
                  "isShuffle": false,
                  "isPrivate": false,
                  "userName": "Zing MP3",
                  "isAlbum": true,
                  "textType": "EP",
                  "isSingle": true
                }
              ],
              "options": {
                "autoSlider": true
              }
            },
            {
              "sectionType": "livestream",
              "viewType": "slider",
              "title": "Radio Nổi bật",
              "link": "/radio",
              "sectionId": "hLiveRadio",
              "items": [
                {
                  "id": 11221,
                  "encodeId": "IWZ97CZZ",
                  "title": "XONE - Digital Radio",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/8/3/0/e/830e49ef302bbe4fdfb04c9e26d42fbd.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/8/3/0/e/830e49ef302bbe4fdfb04c9e26d42fbd.jpg",
                  "thumbnailV": "https://photo-resize-zmp3.zmdcdn.me/w350_r35x62_jpeg/cover_rect/7/7/6/8/7768ffce46eddd9de94d5ac3360408f6.jpg",
                  "thumbnailH": "https://photo-zmp3.zmdcdn.me/cover_rect/9/b/3/6/9b360620bb90cd4d5bb9ea4fda45d946.jpg",
                  "description": "",
                  "status": 2,
                  "type": "livestream",
                  "link": "/liveradio/IWZ97CZZ.html",
                  "streaming": "https://multi-playlist-zmp3.zmdcdn.me/Ce5_Z5JFx2c/zhls/playback-realtime/f9a40e7c3239db678228/index.m3u8",
                  "host": {
                    "name": "XONE Radio",
                    "encodeId": "IW67CZO0",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/8/2/5/0825d8cd559dee502625a25d540c636a.jpg",
                    "link": "/xonefm"
                  },
                  "activeUsers": 125,
                  "program": {
                    "encodeId": "IWZBED6F",
                    "title": "AWESOME BREAKTIME",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/3/a/f/b/3afb028b386c96e6d6c4b2612dfd86a8.jpg",
                    "thumbnailH": "",
                    "description": "",
                    "startTime": 1710910800,
                    "endTime": 1710921600,
                    "hasSongRequest": false
                  }
                },
                {
                  "id": 10443,
                  "encodeId": "IWZ979UB",
                  "title": "V-POP Radio",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/0/8/e/4/08e4104877db6c9a77d6fc42f0a17a8b.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/8/e/4/08e4104877db6c9a77d6fc42f0a17a8b.jpg",
                  "thumbnailV": "https://photo-resize-zmp3.zmdcdn.me/w350_r35x62_jpeg/cover_rect/5/4/8/3/5483514fb92c7e113783d2ac0c128513.jpg",
                  "thumbnailH": "https://photo-zmp3.zmdcdn.me/cover_rect/5/0/8/f/508fb88137284723e67c83b9c9fede28.jpg",
                  "description": "Nhạc Việt thời nay, rất \"hay ho\" và \"này nọ\"!",
                  "status": 2,
                  "type": "livestream",
                  "link": "/liveradio/IWZ979UB.html",
                  "streaming": "https://multi-playlist-zmp3.zmdcdn.me/wTSwRIGOON0/zhls/playback-realtime/6eeb692c5569bc37e578/index.m3u8",
                  "host": {
                    "name": "V-POP",
                    "encodeId": "IW6ZBA89",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/4/6/b/146b49d11cc9b3bc591823bfedb8bce2.jpg",
                    "link": "/vpoproom"
                  },
                  "activeUsers": 719,
                  "program": {
                    "encodeId": "IWZ9DEIE",
                    "title": "Nhạc Việt theo yêu cầu",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/d/7/9/fd79808d2180de9a421afa6aff38953e.jpg",
                    "thumbnailH": "",
                    "description": "Cùng chia sẻ những bài hát mà bạn yêu thích với mọi người thông qua chương trình \"Bài Hát Theo Yêu Cầu\" bạn nhé!",
                    "startTime": 1669777200,
                    "endTime": 1764300240,
                    "hasSongRequest": true,
                    "genreIds": [
                      "IWZ9Z088",
                      "IWZ9Z089",
                      "IWZ9Z0BA",
                      "IWZ9Z0CW",
                      "IWZ9Z0C8",
                      "IWZ97FCD",
                      "IWZ97FCE"
                    ]
                  }
                },
                {
                  "id": 11179,
                  "encodeId": "IWZ97CWB",
                  "title": "Live 247 - Nghe ngày nghe đêm",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/6/8/0/3/6803b42e5444830b57a02d3f4d427301.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/8/0/3/6803b42e5444830b57a02d3f4d427301.jpg",
                  "thumbnailV": "https://photo-resize-zmp3.zmdcdn.me/w350_r35x62_jpeg/cover/4/1/e/7/41e77d96abd4cf6159ff161fd7f85c83.jpg",
                  "thumbnailH": "https://photo-zmp3.zmdcdn.me/cover/8/9/6/6/89667316687a3b735cea505350295a61.jpg",
                  "description": "",
                  "status": 2,
                  "type": "livestream",
                  "link": "/liveradio/IWZ97CWB.html",
                  "streaming": "https://mplaylist-zmp3.zmdcdn.me/8uNEocw6tdc/zhls/live/50efc937f5721c2c4563/index.m3u8",
                  "host": {
                    "name": "Pladio",
                    "encodeId": "IW7B9DEE",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/c/c/f/2ccf96f6da468b466c5f8d1188f62eee.jpg",
                    "link": "/fptplay"
                  },
                  "activeUsers": 53,
                  "program": {
                    "encodeId": "IWZBEDO7",
                    "title": "Nhà Có 2 Người",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/d/4/c/0/d4c0c4fc7a8b7b64b2a23c0da4530da4.jpg",
                    "thumbnailH": "https://photo-zmp3.zmdcdn.me/cover/e/c/0/e/ec0e3203d46b331ae1c21b754e95e146.jpg",
                    "description": "Nhà có 2 người...yêu nhau",
                    "startTime": 1710918000,
                    "endTime": 1710920040,
                    "hasSongRequest": false
                  }
                },
                {
                  "id": 10568,
                  "encodeId": "IWZ979C8",
                  "title": "Chạm Radio",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/7/5/4/0/7540c1a177ce70af53aa417cba1462ed.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/5/4/0/7540c1a177ce70af53aa417cba1462ed.jpg",
                  "thumbnailV": "https://photo-resize-zmp3.zmdcdn.me/w350_r35x62_jpeg/cover/f/4/e/d/f4ed44ed758ddc2984685a7b2cb1ca72.jpg",
                  "thumbnailH": "https://photo-zmp3.zmdcdn.me/cover/b/1/7/3/b17338c56d4a1505f2c4c412ee385041.jpg",
                  "description": "Chạm - Nơi chia sẻ cảm xúc qua âm nhạc.",
                  "status": 2,
                  "type": "livestream",
                  "link": "/liveradio/IWZ979C8.html",
                  "streaming": "https://multi-playlist-zmp3.zmdcdn.me/62YE6lXdY4w/zhls/playback-realtime/db68d4afe8ea01b458fb/index.m3u8",
                  "host": {
                    "name": "Chạm",
                    "encodeId": "IW67DCOW",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/7/8/d/778d152062edfbe0e4c4abf151858bf0.jpg",
                    "link": "/Cham-Series"
                  },
                  "activeUsers": 137,
                  "program": {
                    "encodeId": "IWZBBFAD",
                    "title": "Âm nhạc Chạm trái tim",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/2/3/5/e235117d191db9f7bbc82a3d31f17e60.jpg",
                    "thumbnailH": "",
                    "description": "",
                    "startTime": 1694762100,
                    "endTime": 1758268800,
                    "hasSongRequest": false,
                    "genreIds": [
                      "IWZ9Z08I"
                    ]
                  }
                },
                {
                  "id": 10449,
                  "encodeId": "IWZ979ZI",
                  "title": "Bolero Radio",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/9/8/e/3/98e374cc9603ce9894782f4b36f3cba9.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/8/e/3/98e374cc9603ce9894782f4b36f3cba9.jpg",
                  "thumbnailV": "https://photo-resize-zmp3.zmdcdn.me/w350_r35x62_jpeg/cover_rect/7/8/3/b/783b94a7c19a6410b3de42fce6027ef3.jpg",
                  "thumbnailH": "https://photo-zmp3.zmdcdn.me/cover_rect/d/6/7/4/d6746d1bbff609111133449abb9e622b.jpg",
                  "description": "Dành tặng bạn, những tuyệt phẩm nhạc trữ tình và bolero hay nhất mọi thời đại.",
                  "status": 2,
                  "type": "livestream",
                  "link": "/liveradio/IWZ979ZI.html",
                  "streaming": "https://multi-playlist-zmp3.zmdcdn.me/BtRvAOtW5jk/zhls/playback-realtime/e3b9f87ec43b2d65742a/index.m3u8",
                  "host": {
                    "name": "Bolero",
                    "encodeId": "IW6ZBCU6",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/3/0/5/1305cd954d22d89fef4354301613fd68.jpg",
                    "link": "/phongnhacbolero"
                  },
                  "activeUsers": 338,
                  "program": {
                    "encodeId": "IWZBDAIA",
                    "title": "Bolero theo yêu cầu",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/4/8/c/e/48cefd41cfc03533d52303190f47e6ef.jpg",
                    "thumbnailH": "",
                    "description": "Tuyển chọn những bài hát được phát theo chính yêu cầu của bạn!",
                    "startTime": 1704128400,
                    "endTime": 1735878900,
                    "hasSongRequest": false,
                    "genreIds": [
                      "IWZ9Z08B",
                      "IWZ9Z08C",
                      "IWZ9Z08D",
                      "IWZ9Z08E"
                    ]
                  }
                },
                {
                  "id": 10626,
                  "encodeId": "IWZ97A0W",
                  "title": "US-UK Radio",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/8/4/9/6/84964df6d030510a675f05110e8db166.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/8/4/9/6/84964df6d030510a675f05110e8db166.jpg",
                  "thumbnailV": "https://photo-resize-zmp3.zmdcdn.me/w350_r35x62_jpeg/cover_rect/d/5/0/d/d50d815253431750e10d86ab8ade1282.jpg",
                  "thumbnailH": "https://photo-zmp3.zmdcdn.me/cover_rect/3/1/0/d/310df4f53c1026d4cb2844dc96cc01d3.jpg",
                  "description": "Nhạc hay từ Âu đến Mỹ, cùng Zing MP3 khám phá xem thế giới đang nghe gì.",
                  "status": 2,
                  "type": "livestream",
                  "link": "/liveradio/IWZ97A0W.html",
                  "streaming": "https://multi-playlist-zmp3.zmdcdn.me/RckDo1XPsU4/zhls/playback-realtime/111c87d8bb9d52c30b8c/index.m3u8",
                  "host": {
                    "name": "US-UK",
                    "encodeId": "IW68CW0A",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/0/d/a/b0da7c8ecd6521337682f3a86fa0170f.jpg",
                    "link": "/radio-usuk"
                  },
                  "activeUsers": 107,
                  "program": {
                    "encodeId": "IWZ9FE0F",
                    "title": "US-UK theo yêu cầu",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/d/4/f/f/d4ffcd5734d4dae6266fec08719324f0.jpg",
                    "thumbnailH": "",
                    "description": "Đến lượt bạn rồi! Bài hát Us-Uk nào hợp với tâm trạng bạn lúc này? Hãy chia sẻ với mọi người nhé!",
                    "startTime": 1678330800,
                    "endTime": 1741320000,
                    "hasSongRequest": true,
                    "genreIds": [
                      "IWZ9Z08O"
                    ]
                  }
                },
                {
                  "id": 10444,
                  "encodeId": "IWZ979UC",
                  "title": "K-POP Radio",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/6/8/f/e/68feac6764ce3018854f2a2ca313326d.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/8/f/e/68feac6764ce3018854f2a2ca313326d.jpg",
                  "thumbnailV": "https://photo-resize-zmp3.zmdcdn.me/w350_r35x62_jpeg/cover_rect/2/4/8/0/248039fa5e754f71065d93e61c21fb30.jpg",
                  "thumbnailH": "https://photo-zmp3.zmdcdn.me/cover_rect/e/1/8/8/e1887a2c79f9d3d04984905cbf443a29.jpg",
                  "description": "Fan K-POP mau bơi hết vào đây nào các bạn !!!",
                  "status": 2,
                  "type": "livestream",
                  "link": "/liveradio/IWZ979UC.html",
                  "streaming": "https://multi-playlist-zmp3.zmdcdn.me/94rxZ-Dfzro/zhls/playback-realtime/ff294ded71a898f6c1b9/index.m3u8",
                  "host": {
                    "name": "K-POP",
                    "encodeId": "IW6ZBA9U",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/f/2/4/cf2428f7e56a8c2a52d84cb106891de2.jpg",
                    "link": "/kpoproom"
                  },
                  "activeUsers": 38,
                  "program": {
                    "encodeId": "IWZ9ABUW",
                    "title": "K-POP theo yêu cầu",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/c/2/1/bc2115886f2e2e9f7cf2fa28a39cda12.jpg",
                    "thumbnailH": "",
                    "description": "Thích nghe bài gì, có ngay bài đó",
                    "startTime": 1641000180,
                    "endTime": 1727841600,
                    "hasSongRequest": true,
                    "genreIds": [
                      "IWZ9Z08W",
                      "IWZ9Z08Z"
                    ]
                  }
                },
                {
                  "id": 10560,
                  "encodeId": "IWZ979C0",
                  "title": "Acoustic Radio",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/4/2/d/c/42dc85df71a175bf2e826b08dd0084af.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/4/2/d/c/42dc85df71a175bf2e826b08dd0084af.jpg",
                  "thumbnailV": "https://photo-resize-zmp3.zmdcdn.me/w350_r35x62_jpeg/cover_rect/2/4/b/6/24b6d6578bc7a06e235dcf59f37baeef.jpg",
                  "thumbnailH": "https://photo-zmp3.zmdcdn.me/cover_rect/8/1/d/6/81d6bc7e9ced5d11d01f6da4b440f146.jpg",
                  "description": "Nếu đang tìm chút mộc mạc, hãy nghe Acoustic playlist mà Zing MP3 đã chuẩn bị cho bạn.",
                  "status": 2,
                  "type": "livestream",
                  "link": "/liveradio/IWZ979C0.html",
                  "streaming": "https://multi-playlist-zmp3.zmdcdn.me/ktkT8IgzcQQ/zhls/playback-realtime/08aae96dd5283c766539/index.m3u8",
                  "host": {
                    "name": "Acoustic",
                    "encodeId": "IW67DF6W",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/9/9/3/0993b3110c60ba6518fceeba9913d20d.jpg",
                    "link": "/phong-nhac-acoustic"
                  },
                  "activeUsers": 35,
                  "program": {
                    "encodeId": "IWZ9909O",
                    "title": "Phòng nhạc Acoustic",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/f/b/0/efb05fb9097a7057aecef6ecb62bff5a.jpg",
                    "thumbnailH": "",
                    "description": "Tuyển tập những bản Acoustic gắn liền với những kỷ niệm của thế hệ 8x, 9x đời đầu nhẹ nhàng và sâu lắng nhất.",
                    "startTime": 1622511420,
                    "endTime": 1754539860,
                    "hasSongRequest": false
                  }
                },
                {
                  "id": 10518,
                  "encodeId": "IWZ97996",
                  "title": "Rap Việt Radio",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/f/5/2/4/f5242b2f63e785bb1ce8256a1b976007.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/5/2/4/f5242b2f63e785bb1ce8256a1b976007.jpg",
                  "thumbnailV": "https://photo-resize-zmp3.zmdcdn.me/w350_r35x62_jpeg/cover_rect/2/9/6/f/296f3d261726381a49bc83a16835ffa1.jpg",
                  "thumbnailH": "https://photo-zmp3.zmdcdn.me/cover_rect/0/c/2/e/0c2ee7cb5ef72b5db673341864312a2a.jpg",
                  "description": "Ở đây có rap Việt mới nhất, chất nhất cho bạn cháy hết mình!",
                  "status": 2,
                  "type": "livestream",
                  "link": "/liveradio/IWZ97996.html",
                  "streaming": "https://multi-playlist-zmp3.zmdcdn.me/Itsn5VCb5Uo/zhls/playback-realtime/4f2980eebcab55f50cba/index.m3u8",
                  "host": {
                    "name": "Rap Việt",
                    "encodeId": "IW67COBO",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/f/3/b/bf3bf87a788a5d0b8719c6feee774a2e.jpg",
                    "link": "/phong-nhac-rap-viet"
                  },
                  "activeUsers": 50,
                  "program": {
                    "encodeId": "IWZBDE9B",
                    "title": "Những bài Rap Việt hay nhất",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/f/2/2/bf223818f85e7fe129091b415038ca6c.jpg",
                    "thumbnailH": "",
                    "description": "Những bản hits Rap Việt nổi bật khiến bạn phải nghe đi nghe lại nhiều lần.",
                    "startTime": 1705758720,
                    "endTime": 1797305880,
                    "hasSongRequest": false,
                    "genreIds": [
                      "IWZ9Z089"
                    ]
                  }
                },
                {
                  "id": 10522,
                  "encodeId": "IWZ9799A",
                  "title": "EDM Radio",
                  "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/5/a/5/9/5a590ac34ef8655bae41a8cf72813935.jpg",
                  "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/a/5/9/5a590ac34ef8655bae41a8cf72813935.jpg",
                  "thumbnailV": "https://photo-resize-zmp3.zmdcdn.me/w350_r35x62_jpeg/cover_rect/2/5/3/9/2539ab44d456f4190f69b97a029131cb.jpg",
                  "thumbnailH": "https://photo-zmp3.zmdcdn.me/cover_rect/a/6/f/4/a6f4712ca91e9cc15530960ab44611da.jpg",
                  "description": "Đây là \"sàn\" EDM. Các bạn đã sẵn sàng chưa? Nhạc lên rồi, cùng nhảy thôi!",
                  "status": 2,
                  "type": "livestream",
                  "link": "/liveradio/IWZ9799A.html",
                  "streaming": "https://multi-playlist-zmp3.zmdcdn.me/AYtg9UVhc4c/zhls/playback-realtime/7ad38814b4515d0f0440/index.m3u8",
                  "host": {
                    "name": "EDM",
                    "encodeId": "IW67CUC8",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/7/f/3/e7f3098c8bc0e12444a9495900580ed5.jpg",
                    "link": "/phong-nhac-edm"
                  },
                  "activeUsers": 65,
                  "program": {
                    "encodeId": "IWZBDAUF",
                    "title": "Phòng nhạc EDM",
                    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/f/6/2/ef629460aba3bf16ced1931b951a9dc6.jpg",
                    "thumbnailH": "",
                    "description": "",
                    "startTime": 1704214800,
                    "endTime": 1735874160,
                    "hasSongRequest": false
                  }
                }
              ]
            }
          ],
          "hasMore": false,
          "total": 20
  }
  return res.json({ url, newRelease,songHot,songRemix,songChill,songTop100,albumHot,songRating,songSad });


};
module.exports = {
  handleHome,
  getHome
};
