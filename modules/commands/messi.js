module.exports.config = {
	name: "messi",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Lien he vs Admin bot",
	commandCategory: "All lệnh", 
	usages: "messi [key]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
	if (args.join() == "") {api.sendMessage("Bot hiện đang có 1 admin bot\nMessi 0 để kết bạn với admin\nChúc bạn may mắn❤️",event.threadID, event.messageID);
	}
	if (args[0] == "0") {
		return api.sendMessage("ADMIN: Sang Nguyễn\nFb acc chính : https://www.facebook.com/profile.php?id=100054665752793\nzallo : 0865007727", event.threadID, event.messageID);
	}
}