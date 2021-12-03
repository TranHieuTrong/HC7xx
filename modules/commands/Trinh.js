module.exports.config = {
	name: "trinh",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Thanh dz",
	description: "Random ảnh trai xinh nhất Việt Nam :))",
	commandCategory: "random-img",
	usages: "trinh",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://ngoctrinh.ocvat2810.repl.co/').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/trinh.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/trinh.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/trinh.${ext}`)).on("close", callback);
			})
}