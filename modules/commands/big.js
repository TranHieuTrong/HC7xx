module.exports.config = {
name: "binz",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "chill",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("big")==0 || (event.body.indexOf("Big")==0)) {
		var msg = {
				body: "Big city boy ",
				attachment: fs.createReadStream(__dirname + `/noprefix/binz.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}