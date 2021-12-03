module.exports.config = {
 name: "sangxinmin",
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
 return request(`https://vietup.net/files/470045828349fbe71fdbb9fbf21f1d47/4cc6cb1360a93496260ac5b9b575f37d/audioclip-1627440839000-186619.mp3`).pipe(fs.createWriteStream(__dirname+'/cache/say.mp3')).on('close',() => api.sendMessage({body: "", attachment: fs.createReadStream(__dirname + "/cache/say.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/say.mp3")));
}