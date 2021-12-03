const fs = require("fs");
module.exports.config = {
name: "Mtp",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Dũngkon",
	description: "chuyện lạ có thật",
	commandCategory: "mtp",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("mtp")==0 || (event.body.indexOf("Mtp")==0)) {
		var msg = {
			body:`chuyện lạ có thật`,
				attachment: fs.createReadStream(__dirname + `/noprefix/sontung.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
