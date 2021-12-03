module.exports.config = {
	name: "dog",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Ảnh Những Chú cún siêu ciute",
	commandCategory: "Hình Ảnh",
	usages: "dog",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
	axios.get('https://dog.ceo/api/breeds/image/random').then(res => {
	let ext = res.data.message.substring(res.data.message.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/dog.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/dog.${ext}`), event.messageID);
				};
				request(res.data.message).pipe(fs.createWriteStream(__dirname + `/cache/dog.${ext}`)).on("close", callback);
			})
}