const fs = require("fs");
module.exports.config = {
name: "Yasuo ma kiếm",
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
    if (!fs.existsSync(dirMaterial + "yasuomakiem.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/240819945_4023292337776726_4637657995261435241_n.mp4/video-1630108146.mp4?_nc_cat=106&ccb=1-5&_nc_sid=060d78&_nc_ohc=RxD04E5HSIkAX_9EDOD&vabr=502113&_nc_ht=video.xx&oh=1b914b5fe75e955c561882c19465336c&oe=612A5F5C&dl=1 ").pipe(fs.createWriteStream(dirMaterial + "yasuomakiem.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if ((event.body.indexOf("yasuo ma kiếm")==0) || (event.body.indexOf("Yasuo ma kiếm")==0) || (event.body.indexOf("Yasuo true damemage")==0)) {
		var msg = {
				body: "Hasagi!!!!!",
		attachment: fs.createReadStream(__dirname + `/noprefix/yasuomakiem.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}