module.exports.config = {
 name: "chominhem",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "Thoả",
 description: "Khiến bot trả về file âm thanh ",
 commandCategory: "Nhạc có prefix",
 usages: "",
 cooldowns: 30,
};

module.exports.run = function({ api, event, args }) {
 const request = require("request");
 const fs = require("fs-extra");
 return request(`https://vietup.net/files/a7bb5ca616e8aa98e032428b67951821/6862a004d9b84d9a335b86c32b75f180/chominhem.mp3`).pipe(fs.createWriteStream(__dirname+'/cache/say.mp3')).on('close',() => api.sendMessage({body: "", attachment: fs.createReadStream(__dirname + "/cache/say.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/say.mp3")));
}