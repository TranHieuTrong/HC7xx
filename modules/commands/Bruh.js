const fs = require("fs");
module.exports.config = {
name: "Bủh",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon",
	description: "Bủh",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bruh")==0 || (event.body.indexOf("bủh")==0)) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/cache/xxx.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}