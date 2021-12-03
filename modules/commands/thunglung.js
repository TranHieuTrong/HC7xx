const fs = require("fs");
module.exports.config = {
name: "Thung lũng",
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
    if (!fs.existsSync(dirMaterial + "thunglung.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/240979932_4342967579117110_7970376139383447767_n.mp4/video-1631432403.mp4?_nc_cat=111&ccb=1-5&_nc_sid=060d78&_nc_ohc=L2kyXgTVcvQAX8ZcnPH&vabr=501826&_nc_ht=video.xx&oh=9e011ea4a743cc9197e5847234efc392&oe=613EFC5C&dl=1").pipe(fs.createWriteStream(dirMaterial + "thunglung.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if ((event.body.indexOf("Thung Lũng")==0) || (event.body.indexOf("thung lũng")==0) || (event.body.indexOf("Thung lũng")==0)) {
		var msg = {
				body: "KHI ANH QUA THUNG LŨNG!",
		attachment: fs.createReadStream(__dirname + `/noprefix/thunglung.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }