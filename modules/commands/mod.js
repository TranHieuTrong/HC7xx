module.exports.config = {
	name: "mod",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "hoàng",
	description: "dùng là biết",
	commandCategory: "Quà",
	usages: "đéo có gì đâu",
	cooldowns: 3
	
};
module.exports.run = async function({ api, event }) {
	 return api.setTitle(`Mấy con đĩ trong đây ngu như một con lợn🐷`, event.threadID, event.messageID)
 

}