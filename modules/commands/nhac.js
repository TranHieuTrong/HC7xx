module.exports.config = {
	name: "nhac",
	version: "0.0.1-betantt", 
	hasPermssion: 0,
	credits: "ntt",
	description: "List Nhạc Hay VL",
	commandCategory: "Test", 
	usages: "nhac", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
	if (args.join() == "") {api.sendMessage("Danh Sách Nhạc Hiện Có [2] : \n [1]nhactiktok \n [2]nhacchill",event.threadID, event.messageID);
	}
	if (args[0] == "1") {
		return api.sendMessage("Cắm Tai Nghe Và Thưởng Thức", event.threadID, event.messageID);
	}
	else if (args[0] == "2") {
		return api.sendMessage("「 Admin 2 」", event.threadID, event.messageID);
	}
}