module.exports.config = {
	name: "huyền",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Thanh dz",
	description: "Random ảnh Huyền :))",
	commandCategory: "random-img",
	usages: "huyền",
	cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://khanhhuyen.hungdz30cm.repl.co/').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/huyền.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/huyền.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/huyền.${ext}`)).on("close", callback);
			})
}