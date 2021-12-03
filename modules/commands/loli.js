module.exports.config = {
	name: "loli",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Thanh dz",
	description: "Random ảnh loli :))",
	commandCategory: "random-img",
	usages: "loli",
	cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://meewmeew.info/image/girl?apikey=MEWQmluYW5oYW5nMTIzO2xlbmxlNzc0OEBnbWF').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/loli.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/loli.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/loli.${ext}`)).on("close", callback);
			})
}