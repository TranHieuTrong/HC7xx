const fs = require("fs");
module.exports.config = {
name: "Tồi",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Dũngkon",
	description: "đồ tồi",
	commandCategory: "noprefix",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tồi")==0 || (event.body.indexOf("Tồi")==0) || (event.body.indexOf("Tồy")==0) || (event.body.indexOf("tồy")==0)) {
		var msg = {
			body:`Theo lời chủ tao`,
				attachment: fs.createReadStream(__dirname + `/noprefix/toi.png`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
