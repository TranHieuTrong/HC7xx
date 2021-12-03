const fs = require("fs");
module.exports.config = {
name: "Anh yêu em",
	version: "1.0.1",
	description: "Main zed",
	commandCategory: "Không cần dấu lệnh",
	usages: "",
	cooldowns: 5,
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "anhyeuem.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/241778184_4273242512766705_5945087952192666874_n.mp4/video-1631432452.mp4?_nc_cat=100&ccb=1-5&_nc_sid=060d78&_nc_ohc=BXO_Ei_vUugAX_i5Az2&vabr=952946&_nc_ht=video.xx&oh=37c2c36fe187dc29a53e4bacb5153a8a&oe=613E95F7&dl=1 ").pipe(fs.createWriteStream(dirMaterial + "anhyeuem.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if ((event.body.indexOf("yêu em")==0) || (event.body.indexOf("iu em")==0) || (event.body.indexOf("Anh yêu em")==0)) {
		var msg = {
				body: "<3",
		attachment: fs.createReadStream(__dirname + `/noprefix/anhyeuem.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }