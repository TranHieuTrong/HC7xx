module.exports.config = {
	name: "setTitle",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Lợi",
	description: "Đổi emoji trong nhóm",
	commandCategory: "Group",
	usages: "setemoji [emoji]",
	cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
	const emoji = args.join(" ")
	return api.setTitle(`${args.join(" ")}`, event.threadID, event.messagaID);
}