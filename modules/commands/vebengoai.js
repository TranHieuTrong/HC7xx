const fs = require("fs");
module.exports.config = {
name: "Vẻ bề ngoài",
	version: "1.0.1",
	description: "Vẻ bề ngoài",
	commandCategory: "Không cần dấu lệnh",
	usages: "",
	cooldowns: 5,
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "vebengoai.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/241220452_4494358473918388_7208611001898183969_n.mp4/video-1630924545.mp4?_nc_cat=105&ccb=1-5&_nc_sid=060d78&_nc_ohc=lv6qquXeIxQAX-FOOZo&vabr=306346&_nc_ht=video.xx&oh=a138e8202a6f44486095370af2ebe2b5&oe=61371512&dl=1 ").pipe(fs.createWriteStream(dirMaterial + "vebengoai.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if ((event.body.indexOf("Xấu")==0) || (event.body.indexOf("xấu")==0) || (event.body.indexOf("Vẻ bề ngoài")==0)) {
		var msg = {
				body: "vẻ bề ngoài quan trọng đến thế à?",
		attachment: fs.createReadStream(__dirname + `/noprefix/vebengoai.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}