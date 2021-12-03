const fs = require("fs");
module.exports.config = {
name: "Bùm",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "hoàng",
	description: "yamete",
	commandCategory: "Bùm",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bùm")==0 || (event.body.indexOf("Bùm")==0)) {
		var msg = {
			body:`Bố Bắn Chết Cụ Mày`,
				attachment: fs.createReadStream(__dirname + `/noprefix/bum.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
