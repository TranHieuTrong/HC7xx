module.exports.config = {
	name: "ducbo",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Xem ảnh Đức Bo",
	commandCategory: "random-img",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const request = global.nodemodule["request"];
	const fs = global.nodemodule["fs-extra"];
	const axios = global.nodemodule["axios"];
	axios.get('https://api.vangbanlanhat.tk/image?type=DuckBo').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `Đức Bo 🤭🤭`,
						attachment: fs.createReadStream(__dirname + `/cache/bo.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/bo.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/bo.${ext}`)).on("close", callback);
			})
}
