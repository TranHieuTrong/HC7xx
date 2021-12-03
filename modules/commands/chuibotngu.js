const fs = require("fs");
module.exports.config = {
name: "Chửi bot",
	version: "1.0.1",
	description: "ban",
	commandCategory: "Không cần dấu lệnh",
	usages: "",
	cooldowns: 5,
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "a.mp4")) request("").pipe(fs.createWriteStream(dirMaterial + "a.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if ((event.body.indexOf("Bot lồn")==0) || (event.body.indexOf("Bot gà")==0) || (event.body.indexOf("Bot ngu")==0)) {
		var msg = {
				body: "Chửi bot thì mày xác định khỏi dùng bot nhé con chó?",
		attachment: fs.createReadStream(__dirname + `/noprefix/a.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }