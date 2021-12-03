const fs = require("fs");
module.exports.config = {
name: "Giảng hòa",
	version: "1.0.1",
	description: "Giảng hòa",
	commandCategory: "Không cần dấu lệnh",
	usages: "",
	cooldowns: 5,
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "gianghoa.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/209530663_4267136293338142_7284910002465602107_n.mp4/video-1630764563.mp4?_nc_cat=111&ccb=1-5&_nc_sid=060d78&_nc_ohc=dzWJ4xZ0RIQAX_sVU5a&vabr=232632&_nc_ht=video.xx&oh=ab740397b74d0a2a420751dbdf448ea5&oe=613850A4&dl=1 ").pipe(fs.createWriteStream(dirMaterial + "gianghoa.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if ((event.body.indexOf("Bú cu")==0) || (event.body.indexOf("Bucu")==0) || (event.body.indexOf("Giảng hòa")==0)) {
		var msg = {
				body: "giảng hòa nhé anh bạn",
		attachment: fs.createReadStream(__dirname + `/noprefix/gianghoa.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}