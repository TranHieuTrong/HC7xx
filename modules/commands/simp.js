const fs = require("fs");
module.exports.config = {
name: "Simp",
	version: "1.0.1",
	description: "simp",
	commandCategory: "Không cần dấu lệnh",
	usages: "",
	cooldowns: 5,
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "simp.mp4")) request("https://tinyurl.com/ykxecu7v").pipe(fs.createWriteStream(dirMaterial + "simp.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if ((event.body.indexOf("SIMP")==0) || (event.body.indexOf("simp")==0) || (event.body.indexOf("Simp")==0)) {
		var msg = {
				body: "UwU <3",
		attachment: fs.createReadStream(__dirname + `/noprefix/simp.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }