
module.exports.config = {
name: "pp",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Dũng UwU",
	description: "pp",
	commandCategory: "NoPrefix",
	usages: "noprefix",
	cooldowns: 5,
	dependencies: {
        "fs-extra": ""
    }
};
module.exports.handleEvent = async({ api, event, Users }) => {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID, senderID } = event;
	var tag = (await Users.getData(senderID)).name;
	let output = "pai pai  ";
	let varinput = [ "Pp", "pp", "Pai pai", "pai pai", "bai bai", "Bai bai", "Bai Bai", "PP" ];
	for (const input of varinput) {
		if (event.body.indexOf(input)==0 && event.body.length == input.length) {
		return api.sendMessage({body: output + tag + '\nChúc bạn ra đi thanh thản ❤!',
		mentions:[{
			tag: tag,
			id: senderID
		}]}, threadID, messageID);
		}
	}
	}
	module.exports.run = function({}) {
}