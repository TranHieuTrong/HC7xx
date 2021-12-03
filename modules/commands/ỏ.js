const fs = require("fs");
module.exports.config = {
name: "ỏ",
	version: "1.0.0",
	hasPermssion: 0,
	description: "Hôm nay trời đẹp thế nhờ!!",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "ỏ.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/229709156_4238955582858100_3193249266531476284_n.mp4/video-1630049435.mp4?_nc_cat=104&ccb=1-5&_nc_sid=060d78&_nc_ohc=RHnKWxybdJoAX_Us1Gs&vabr=719953&_nc_ht=video.xx&oh=27f0c2c5cd744257f267468e16357aa8&oe=6129E198&dl=1 ").pipe(fs.createWriteStream(dirMaterial + "ỏ.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ỏ")==0 || (event.body.indexOf("ỏ")==0)){
	  var msg = {
				body: "Hôm nay trời đẹp thế nhờ..!!",
				attachment: fs.createReadStream(__dirname + `/noprefix/ỏ.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}