const fs = require("fs");
module.exports.config = {
name: "tinhyeu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Phạm Trực - Fix PAT",
	description: "tinhyeu",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Yêu anh")==0 || (event.body.indexOf("Yêu em")==0)) {
		var msg = {
				body: "Yêu nhiều thì sau này chúng ta về một nhà nha ❤️👑",
				attachment: fs.createReadStream(__dirname + `/noprefix/tinhyeu.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }