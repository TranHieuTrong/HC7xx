const fs = require("fs");
module.exports.config = {
name: "Fuckyou",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon",
	description: "Địt mẹ mày",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("fuckyou")==0 || (event.body.indexOf("fakyou")==0)) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/cache/fuckyou.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}