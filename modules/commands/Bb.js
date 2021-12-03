const fs = require("fs");
module.exports.config = {
	name: "prefix",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "thọ", 
	description: "no prefix",
	commandCategory: "System",
	usages: "prefix",
    cooldowns: 5, 
};

module.exports.event = async ({ event, api, Currencies,Users, args, utils }) => {
if (event.body.indexOf("prefix")==0 || (event.body.indexOf("Prefix")==0)) {
		return api.sendMessage(`Perefix is: +.` , event.threadID, event.messageID)
		}
};


module.exports.run = async ({ event, api, Currencies, args, utils }) => {






	}
