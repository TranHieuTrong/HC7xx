module.exports.config = {
name: "chửi bot",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Dũng UwU",
	description: "Chửi bot",
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
	let output = "Địt mẹ con chó ";
	let varinput = [ "bot", "Bot", "Bot ngu", "bot ngu", "Bot đểu", "bot đểu","ê bot","Ê bot" ];
	for (const input of varinput) {
		if (event.body.indexOf(input)==0 && event.body.length == input.length) {
		var job = ['gọi cái đéo gì',
                       'bố đây',
                       'bố ban mày',
                       'tao đang ngủ gọi con cặc',
                       'yêu không mà gọi',
                       'donate đi rồi nói tiếp',
                       'gọi con cặc cút',
                       'cút cút cút cút'];
             api.sendMessage(job[Math.floor(Math.random() * job.length)] + ' '  , threadID, messageID);
		}
	}
	}
	module.exports.run = function({}) {
}