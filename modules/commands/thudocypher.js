module.exports.config = {
 name: "thudocypher",
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
 return request(`https://vietup.net/files/b763e2a118838d633857479c5fd1704d/85d955f1f2024dd1d790adeb6ab856c2/thudocypher.mp3`).pipe(fs.createWriteStream(__dirname+'/cache/say.mp3')).on('close',() => api.sendMessage({body: "", attachment: fs.createReadStream(__dirname + "/cache/say.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/say.mp3")));
}