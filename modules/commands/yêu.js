const fs = require("fs");
module.exports.config = {
	name: "yêu",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi fix by VĐT&NTH❤",
	description: "Tỉ lệ hiểu Ny của bạn trong năm nay",
	commandCategory: "random-img", 
	usages: "yêu", 
	cooldowns: 0,
	dependencies: [] 
};
module.exports.run = async function({ api, event, args, Users, Threads, __GLOBAL, Currencies }) {
	var tl = ['11%', '21%', '67%', '19%', '37%', '17%', '96%', '52%', '62%', '76%', '83%', '100%', '99%', "0%", "48%",`1%`,`10%`,`99,9%`];
	var tle = tl[Math.floor(Math.random() * tl.length)];
	let data = await api.getUserInfo(event.senderID);
    let name = await data[event.senderID].name
    var msg = {
				body: `Chúc mừng bạn ${name}. Bot đã dự đoán tỉ lệ  bạn với người yêu của bạn hiểu nhau trong năm nay là ${tle} ❤❤`,
				attachment: fs.createReadStream(__dirname + `/cache/gif.gif`)
			}
			api.sendMessage(msg, event.threadID, event.messageID);
		}