const Song = require('../../models/sonng_model');
const Ar = require('../../models/artists_model');


const adminAr = async (req, res) => {
    const limit = req.params.id;
    try {

        // Truy vấn dữ liệu nghệ sĩ sau khi xóa trùng lặp
        const artistCount = await Ar.countDocuments({});
        const artistData = await Ar.find({}, {
            id: 1,
            avt: 1,
            artistsName: 1,
            alias: 1,
            totalFollow: 1,
            songListId: 1,
            playListId: 1,
            _id: 0,
        }).sort({ _id: -1 }).skip(+limit).limit(10);

        const songData = await Promise.all(artistData.map(async (artist) => {
            const songListNames = await Promise.all(artist.songListId.map(async (songId) => {
                const data = await Song.findOne({ id: songId }, { alias: 1, _id: 0 });
                console.log(data,songId);
                if (data.alias) {
                    console.log("auot", data, songId);
                    return data;
                } else {
                    try {
                        const convert = {
                            id: songId,
                            songname: "Flower",
                            thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/3/a/f/f3af71df0b7a68ec44955faa5dc7d0ce.jpg",
                            alias: "FLOWER-JISOO",
                            artists: ["IWZAEEA7"],
                            genresid: ["IWZ9Z08W", "IWZ9Z09O"],
                            like: 2000,
                            listen: 1000,
                            lyric: [
                                {
                                    "words": [
                                        {
                                            "startTime": 3220,
                                            "endTime": 3480,
                                            "data": "Eh"
                                        },
                                        {
                                            "startTime": 3480,
                                            "endTime": 3750,
                                            "data": "eh"
                                        },
                                        {
                                            "startTime": 3750,
                                            "endTime": 4010,
                                            "data": "eh"
                                        },
                                        {
                                            "startTime": 4010,
                                            "endTime": 4270,
                                            "data": "eh"
                                        },
                                        {
                                            "startTime": 4270,
                                            "endTime": 4540,
                                            "data": "eh"
                                        },
                                        {
                                            "startTime": 4540,
                                            "endTime": 7540,
                                            "data": "eh"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 10980,
                                            "endTime": 10980,
                                            "data": "Eh"
                                        },
                                        {
                                            "startTime": 10980,
                                            "endTime": 11240,
                                            "data": "eh"
                                        },
                                        {
                                            "startTime": 11240,
                                            "endTime": 11510,
                                            "data": "eh"
                                        },
                                        {
                                            "startTime": 11510,
                                            "endTime": 11770,
                                            "data": "eh"
                                        },
                                        {
                                            "startTime": 11770,
                                            "endTime": 12040,
                                            "data": "eh"
                                        },
                                        {
                                            "startTime": 12040,
                                            "endTime": 15040,
                                            "data": "eh"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 17020,
                                            "endTime": 18880,
                                            "data": "ABC"
                                        },
                                        {
                                            "startTime": 18880,
                                            "endTime": 21270,
                                            "data": "doremimankeum"
                                        },
                                        {
                                            "startTime": 21270,
                                            "endTime": 21810,
                                            "data": "chakaetdeon"
                                        },
                                        {
                                            "startTime": 21810,
                                            "endTime": 24720,
                                            "data": "na"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 24720,
                                            "endTime": 24990,
                                            "data": "Geu"
                                        },
                                        {
                                            "startTime": 24990,
                                            "endTime": 26320,
                                            "data": "nunbichi"
                                        },
                                        {
                                            "startTime": 26320,
                                            "endTime": 26850,
                                            "data": "ssak"
                                        },
                                        {
                                            "startTime": 26850,
                                            "endTime": 28440,
                                            "data": "byeonhaetji"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 28440,
                                            "endTime": 28710,
                                            "data": "Eojjeomyeon"
                                        },
                                        {
                                            "startTime": 28710,
                                            "endTime": 28980,
                                            "data": "i"
                                        },
                                        {
                                            "startTime": 28980,
                                            "endTime": 29510,
                                            "data": "ttohan"
                                        },
                                        {
                                            "startTime": 29510,
                                            "endTime": 31360,
                                            "data": "nanikka"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 31360,
                                            "endTime": 31630,
                                            "data": "Nan"
                                        },
                                        {
                                            "startTime": 31630,
                                            "endTime": 32430,
                                            "data": "paran"
                                        },
                                        {
                                            "startTime": 32430,
                                            "endTime": 33490,
                                            "data": "nabicheoreom"
                                        },
                                        {
                                            "startTime": 33490,
                                            "endTime": 35280,
                                            "data": "naraga"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 35280,
                                            "endTime": 36350,
                                            "data": "Japji"
                                        },
                                        {
                                            "startTime": 36350,
                                            "endTime": 36880,
                                            "data": "mothan"
                                        },
                                        {
                                            "startTime": 36880,
                                            "endTime": 37140,
                                            "data": "geon"
                                        },
                                        {
                                            "startTime": 37140,
                                            "endTime": 37400,
                                            "data": "da"
                                        },
                                        {
                                            "startTime": 37400,
                                            "endTime": 37670,
                                            "data": "ne"
                                        },
                                        {
                                            "startTime": 37670,
                                            "endTime": 39210,
                                            "data": "moksinikka"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 39210,
                                            "endTime": 40540,
                                            "data": "Hwaljjak"
                                        },
                                        {
                                            "startTime": 40540,
                                            "endTime": 41070,
                                            "data": "kkotpiwotdeon"
                                        },
                                        {
                                            "startTime": 41070,
                                            "endTime": 42660,
                                            "data": "sigando"
                                        },
                                        {
                                            "startTime": 42660,
                                            "endTime": 43470,
                                            "data": "ije"
                                        },
                                        {
                                            "startTime": 43470,
                                            "endTime": 44520,
                                            "data": "modu"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 44520,
                                            "endTime": 45050,
                                            "data": "Naegen"
                                        },
                                        {
                                            "startTime": 45050,
                                            "endTime": 45580,
                                            "data": "Lie,"
                                        },
                                        {
                                            "startTime": 45580,
                                            "endTime": 45850,
                                            "data": "lie,"
                                        },
                                        {
                                            "startTime": 45850,
                                            "endTime": 46920,
                                            "data": "lie"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 46920,
                                            "endTime": 47440,
                                            "data": "Bulge"
                                        },
                                        {
                                            "startTime": 47440,
                                            "endTime": 48770,
                                            "data": "tabeoryeojin"
                                        },
                                        {
                                            "startTime": 48770,
                                            "endTime": 49840,
                                            "data": "neowa"
                                        },
                                        {
                                            "startTime": 49840,
                                            "endTime": 50640,
                                            "data": "na"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 50640,
                                            "endTime": 51170,
                                            "data": "Nan"
                                        },
                                        {
                                            "startTime": 51170,
                                            "endTime": 52230,
                                            "data": "gwaenchana"
                                        },
                                        {
                                            "startTime": 52230,
                                            "endTime": 52760,
                                            "data": "neon"
                                        },
                                        {
                                            "startTime": 52760,
                                            "endTime": 54620,
                                            "data": "gwaenchaneulkka"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 54620,
                                            "endTime": 55410,
                                            "data": "Gureum"
                                        },
                                        {
                                            "startTime": 55410,
                                            "endTime": 55950,
                                            "data": "han"
                                        },
                                        {
                                            "startTime": 55950,
                                            "endTime": 56470,
                                            "data": "jeom"
                                        },
                                        {
                                            "startTime": 56470,
                                            "endTime": 57280,
                                            "data": "eopsi"
                                        },
                                        {
                                            "startTime": 57280,
                                            "endTime": 57800,
                                            "data": "yeppeun"
                                        },
                                        {
                                            "startTime": 57800,
                                            "endTime": 58530,
                                            "data": "nal"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 58530,
                                            "endTime": 59850,
                                            "data": "Kkothyanggiman"
                                        },
                                        {
                                            "startTime": 59850,
                                            "endTime": 60390,
                                            "data": "namgigo"
                                        },
                                        {
                                            "startTime": 60390,
                                            "endTime": 63390,
                                            "data": "gatdanda"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 74470,
                                            "endTime": 74740,
                                            "data": "Kkothyanggiman"
                                        },
                                        {
                                            "startTime": 74740,
                                            "endTime": 75800,
                                            "data": "namgigo"
                                        },
                                        {
                                            "startTime": 75800,
                                            "endTime": 78800,
                                            "data": "gatdanda"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 78910,
                                            "endTime": 79180,
                                            "data": "You"
                                        },
                                        {
                                            "startTime": 79180,
                                            "endTime": 79450,
                                            "data": "and"
                                        },
                                        {
                                            "startTime": 79450,
                                            "endTime": 80780,
                                            "data": "me"
                                        },
                                        {
                                            "startTime": 80780,
                                            "endTime": 81040,
                                            "data": "michil"
                                        },
                                        {
                                            "startTime": 81040,
                                            "endTime": 82640,
                                            "data": "deusi"
                                        },
                                        {
                                            "startTime": 82640,
                                            "endTime": 85640,
                                            "data": "tteugeowotjiman"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 86620,
                                            "endTime": 88430,
                                            "data": "Cheochamhage"
                                        },
                                        {
                                            "startTime": 88430,
                                            "endTime": 90280,
                                            "data": "jitbalpyeojin"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 90280,
                                            "endTime": 90820,
                                            "data": "Nae"
                                        },
                                        {
                                            "startTime": 90820,
                                            "endTime": 91350,
                                            "data": "hanappunin"
                                        },
                                        {
                                            "startTime": 91350,
                                            "endTime": 93470,
                                            "data": "raillak"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 93470,
                                            "endTime": 93730,
                                            "data": "Nan"
                                        },
                                        {
                                            "startTime": 93730,
                                            "endTime": 94260,
                                            "data": "hayan"
                                        },
                                        {
                                            "startTime": 94260,
                                            "endTime": 95600,
                                            "data": "kkochipcheoreom"
                                        },
                                        {
                                            "startTime": 95600,
                                            "endTime": 97190,
                                            "data": "naraga"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 97190,
                                            "endTime": 98250,
                                            "data": "Japji"
                                        },
                                        {
                                            "startTime": 98250,
                                            "endTime": 98800,
                                            "data": "aneun"
                                        },
                                        {
                                            "startTime": 98800,
                                            "endTime": 99600,
                                            "data": "geoseun"
                                        },
                                        {
                                            "startTime": 99600,
                                            "endTime": 101190,
                                            "data": "neonikka"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 101190,
                                            "endTime": 102000,
                                            "data": "Sallangsallang"
                                        },
                                        {
                                            "startTime": 102000,
                                            "endTime": 102780,
                                            "data": "buneun"
                                        },
                                        {
                                            "startTime": 102780,
                                            "endTime": 103310,
                                            "data": "barame"
                                        },
                                        {
                                            "startTime": 103310,
                                            "endTime": 104650,
                                            "data": "ikkeullyeo"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 104650,
                                            "endTime": 105450,
                                            "data": "Bomeun"
                                        },
                                        {
                                            "startTime": 105450,
                                            "endTime": 106510,
                                            "data": "ojiman"
                                        },
                                        {
                                            "startTime": 106510,
                                            "endTime": 106770,
                                            "data": "urin"
                                        },
                                        {
                                            "startTime": 106770,
                                            "endTime": 107300,
                                            "data": "Bye,"
                                        },
                                        {
                                            "startTime": 107300,
                                            "endTime": 107830,
                                            "data": "bye,"
                                        },
                                        {
                                            "startTime": 107830,
                                            "endTime": 108900,
                                            "data": "bye"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 108900,
                                            "endTime": 109690,
                                            "data": "Bulge"
                                        },
                                        {
                                            "startTime": 109690,
                                            "endTime": 110750,
                                            "data": "tabeoryeojin"
                                        },
                                        {
                                            "startTime": 110750,
                                            "endTime": 111550,
                                            "data": "neowa"
                                        },
                                        {
                                            "startTime": 111550,
                                            "endTime": 112610,
                                            "data": "na"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 112610,
                                            "endTime": 113140,
                                            "data": "Nan"
                                        },
                                        {
                                            "startTime": 113140,
                                            "endTime": 114210,
                                            "data": "gwaenchana"
                                        },
                                        {
                                            "startTime": 114210,
                                            "endTime": 114740,
                                            "data": "neon"
                                        },
                                        {
                                            "startTime": 114740,
                                            "endTime": 116600,
                                            "data": "gwaenchaneulkka"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 116600,
                                            "endTime": 117660,
                                            "data": "Gureum"
                                        },
                                        {
                                            "startTime": 117660,
                                            "endTime": 118190,
                                            "data": "han"
                                        },
                                        {
                                            "startTime": 118190,
                                            "endTime": 118460,
                                            "data": "jeom"
                                        },
                                        {
                                            "startTime": 118460,
                                            "endTime": 118990,
                                            "data": "eopsi"
                                        },
                                        {
                                            "startTime": 118990,
                                            "endTime": 119520,
                                            "data": "yeppeun"
                                        },
                                        {
                                            "startTime": 119520,
                                            "endTime": 120310,
                                            "data": "nal"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 120310,
                                            "endTime": 121380,
                                            "data": "Kkothyanggiman"
                                        },
                                        {
                                            "startTime": 121380,
                                            "endTime": 122440,
                                            "data": "namgigo"
                                        },
                                        {
                                            "startTime": 122440,
                                            "endTime": 125440,
                                            "data": "gatdanda"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 136260,
                                            "endTime": 136790,
                                            "data": "Kkothyanggiman"
                                        },
                                        {
                                            "startTime": 136790,
                                            "endTime": 137840,
                                            "data": "namgigo"
                                        },
                                        {
                                            "startTime": 137840,
                                            "endTime": 139970,
                                            "data": "gatdanda"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 139970,
                                            "endTime": 140770,
                                            "data": "Ijen"
                                        },
                                        {
                                            "startTime": 140770,
                                            "endTime": 141570,
                                            "data": "annyeong"
                                        },
                                        {
                                            "startTime": 141570,
                                            "endTime": 142360,
                                            "data": "Goodbye"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 142360,
                                            "endTime": 142890,
                                            "data": "Dwineun"
                                        },
                                        {
                                            "startTime": 142890,
                                            "endTime": 143160,
                                            "data": "jeoldae"
                                        },
                                        {
                                            "startTime": 143160,
                                            "endTime": 143420,
                                            "data": "an"
                                        },
                                        {
                                            "startTime": 143420,
                                            "endTime": 144420,
                                            "data": "bwa"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 144420,
                                            "endTime": 145220,
                                            "data": "Miryeoniran"
                                        },
                                        {
                                            "startTime": 145220,
                                            "endTime": 146280,
                                            "data": "ireumui"
                                        },
                                        {
                                            "startTime": 146280,
                                            "endTime": 146820,
                                            "data": "ipsae"
                                        },
                                        {
                                            "startTime": 146820,
                                            "endTime": 147280,
                                            "data": "hana"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 147280,
                                            "endTime": 150470,
                                            "data": "Bombie"
                                        },
                                        {
                                            "startTime": 150470,
                                            "endTime": 151270,
                                            "data": "neoegeseo"
                                        },
                                        {
                                            "startTime": 151270,
                                            "endTime": 154190,
                                            "data": "tteoreojyeo"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 154190,
                                            "endTime": 155250,
                                            "data": "Kkothyanggiman"
                                        },
                                        {
                                            "startTime": 155250,
                                            "endTime": 156250,
                                            "data": "nama"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 156250,
                                            "endTime": 156780,
                                            "data": "Hey"
                                        },
                                        {
                                            "startTime": 156780,
                                            "endTime": 157050,
                                            "data": "hey"
                                        },
                                        {
                                            "startTime": 157050,
                                            "endTime": 157320,
                                            "data": "hey"
                                        },
                                        {
                                            "startTime": 157320,
                                            "endTime": 159180,
                                            "data": "hey"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 159180,
                                            "endTime": 160510,
                                            "data": "Hey"
                                        },
                                        {
                                            "startTime": 160510,
                                            "endTime": 160770,
                                            "data": "hey"
                                        },
                                        {
                                            "startTime": 160770,
                                            "endTime": 161030,
                                            "data": "hey"
                                        },
                                        {
                                            "startTime": 161030,
                                            "endTime": 161300,
                                            "data": "hey"
                                        },
                                        {
                                            "startTime": 161300,
                                            "endTime": 162890,
                                            "data": "hey"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 162890,
                                            "endTime": 164230,
                                            "data": "Hey"
                                        },
                                        {
                                            "startTime": 164230,
                                            "endTime": 164500,
                                            "data": "hey"
                                        },
                                        {
                                            "startTime": 164500,
                                            "endTime": 164760,
                                            "data": "hey"
                                        },
                                        {
                                            "startTime": 164760,
                                            "endTime": 167080,
                                            "data": "hey"
                                        }
                                    ]
                                },
                                {
                                    "words": [
                                        {
                                            "startTime": 167080,
                                            "endTime": 167890,
                                            "data": "Kkothyanggiman"
                                        },
                                        {
                                            "startTime": 167890,
                                            "endTime": 168670,
                                            "data": "namgigo"
                                        },
                                        {
                                            "startTime": 168670,
                                            "endTime": 169670,
                                            "data": "gatdanda"
                                        }
                                    ]
                                }
                            ],
                            songLink: "https://a128-z3.zmdcdn.me/8b9cceca4cec82a9d5f97b963890e07d?authen=exp=1716282345~acl=/8b9cceca4cec82a9d5f97b963890e07d/*~hmac=969301dbc36f1d1b52fe3fd4b4d7486c"
                        };
                        const update = await Song.findOneAndUpdate(
                            { id: songId },
                            { $set: convert },
                            { new: true, upsert: true }
                        );
                        console.log("update:", update);
                        return update;
                    } catch (error) {
                        console.log(error);
                    }
                }
                return data;
            }));
            return { ...artist.toObject(), songListId: songListNames };
        }));

        const responseData = { handleData: songData, maxPage: artistCount };
        res.json(responseData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    adminAr
};