const fs = require("fs");
module.exports.config = {
name: "Moi",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Dungkon",
	description: "moi",
	commandCategory: "Moi",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("moi")==0 || (event.body.indexOf("Moi")==0)) {
		var msg = {
			body:'ờ moi moi moi moi moi',
				attachment: fs.createReadStream(__dirname + `/noprefix/moi.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
