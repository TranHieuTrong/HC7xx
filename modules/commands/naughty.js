module.exports.config = {
	name: "naughty",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Thanh dz",
	description: "Random ảnh gái xinh nhất Việt Nam :))",
	commandCategory: "hình ảnh",
	usages: "naughty",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://zyros-api.glitch.me/naughty_rabbit').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/naughty.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/naughty.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/naughty.${ext}`)).on("close", callback);
			})
}