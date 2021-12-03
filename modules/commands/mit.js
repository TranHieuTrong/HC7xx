module.exports.config = {
	name: "mit",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "mitsuki",
	commandCategory: "Chatbot",
	usages: "mit hello",
	cooldowns: 5,
	dependencies: ["request"]
};

module.exports.run = function({ api, event, args }) {
	require("request")(`https://kakko.pandorabots.com/pandora/talk-xml?input=${encodeURIComponent(args.join(" "))}&botid=9fa364f2fe345a10&custid=${event.senderID}`, (err, response, body) => api.sendMessage((/<that>(.*?)<\/that>/.exec(body)[1]), event.threadID, event.messageID));
}