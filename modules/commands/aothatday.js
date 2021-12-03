module.exports.config = {
name: "aothatday",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "ảo thật đấy",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("ảo")==0 || (event.body.indexOf("Ảo")==0)) {
		var msg = {
				body: "Đitmemay ảo thật đấy",
				attachment: fs.createReadStream(__dirname + `/noprefix/ảo thật đấy.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}