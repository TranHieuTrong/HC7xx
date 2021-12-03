const fs = require("fs");
module.exports.config = {
name: "Mày đừng có mà bốc phét",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon",
	description: "Đạo lý",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Mày đừng có mà bốc phét")==0 || (event.body.indexOf("bốc phét ít thôi")==0)) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/cache/thoithoithoi.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}