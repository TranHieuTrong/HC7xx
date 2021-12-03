module.exports.config = {
	name: "8ball",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "8ball",
	commandCategory: "Hình ảnh",
	usages: "boy",
	cooldowns: 5
};
module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
	axios.get('https://nekos.life/api/v2/img/8ball').then(res => {
	let anh = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/tl.${anh}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tl.${anh}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/tl.${anh}`)).on("close", callback);
			})
}
