const fs = require("fs");
module.exports.config = {
name: "ngu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Ngu như m =)",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat ngu",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ngu")==0 || (event.body.indexOf("Ngu")==0)) {
		var msg = {
				body: "Trường hợp này bó tay !",
				attachment: fs.createReadStream(__dirname + `/noprefix/ngu.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

