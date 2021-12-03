const fs = require("fs");
module.exports.config = {
name: "Non",
	version: "1.0.1",
	description: "Em đi trên cỏ non",
	commandCategory: "Không cần dấu lệnh",
	usages: "",
	cooldowns: 5,
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "non.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/241611487_4461881667167996_3576785175630850551_n.mp4/video-1631432439.mp4?_nc_cat=105&ccb=1-5&_nc_sid=060d78&_nc_ohc=0bpuXpu7M8oAX_PCs0V&vabr=885188&_nc_ht=video.xx&oh=f42dd6b704775fe04692acf7a831bb4a&oe=613E9D6C&dl=1 ").pipe(fs.createWriteStream(dirMaterial + "non.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if ((event.body.indexOf("Non")==0) || (event.body.indexOf("non")==0) || (event.body.indexOf("NON")==0)) {
		var msg = {
				body: "!!!!!",
		attachment: fs.createReadStream(__dirname + `/noprefix/non.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }