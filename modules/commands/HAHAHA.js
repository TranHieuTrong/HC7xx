const fs = require("fs");
module.exports.config = {
name: "HaHaHa",
	version: "1.0.1",
	description: "Haha",
	commandCategory: "Không cần dấu lệnh",
	usages: "",
	cooldowns: 5,
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "Haha.mp4")) request("").pipe(fs.createWriteStream(dirMaterial + "Haha.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if ((event.body.indexOf("Kk")==0) || (event.body.indexOf("Hehe")==0) || (event.body.indexOf("Haha")==0)) {
		var msg = {
				body: "Cười ẻ",
		attachment: fs.createReadStream(__dirname + `/noprefix/Haha.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }