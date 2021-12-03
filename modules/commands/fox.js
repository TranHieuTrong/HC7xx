module.exports.config = {
	name: "fox",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Xem ảnh Cáo",
	commandCategory: "Hình Ảnh",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://api.vangbanlanhat.tk/image?type=fox').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/cosplay.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/cosplay.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/cosplay.${ext}`)).on("close", callback);
			})
}