module.exports.config = {
	name: "seticon",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "bao",
	description: "Đổi emoji trong nhóm",
	commandCategory: "Group",
	usages: "setemoji [emoji]",
	cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
	const emoji = args.join(" ")
	api.changeThreadEmoji(`${args.join(" ")}`, event.threadID, event.messagaID);
}