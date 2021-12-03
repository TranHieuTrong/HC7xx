const fs = require("fs");
module.exports.config = {
name: "sầu",
	version: "1.0.1",
	description: "Hasagi",
	commandCategory: "Không cần dấu lệnh",
	usages: "",
	cooldowns: 5,
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "sau.mp4")) request(" https://tinyurl.com/yzjkqzqj").pipe(fs.createWriteStream(dirMaterial + "sau.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if ((event.body.indexOf("^^")==0) || (event.body.indexOf("hăy")==0) || (event.body.indexOf("Sầu")==0)) {
		var msg = {
				body: "bủh",
		attachment: fs.createReadStream(__dirname + `/noprefix/sau.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}