module.exports.config = {
	name: "menu",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Sen",
	description: "Hướng dẫn cho người mới",
	commandCategory: "system",
	usages: "[Tên module]",
	cooldowns: 5,
	envConfig: {
		autoUnsend: true,
		delayUnsend: 10
	}
};

module.exports.languages = {
	"vi": {
		"moduleInfo": "「 %1 」\n%2\n\n❯ Cách sử dụng: %3\n❯ Thuộc nhóm: %4\n❯ Thời gian chờ: %5 giây(s)\n❯ Quyền hạn: %6\n\n» Module code by %7 «",
		"helpList": '[ Hiện tại đang có %1 lệnh có thể sử dụng trên bot này, Sử dụng: "%2help + tên lệnh " để xem chi tiết cách sử dụng hoặc liên hệ Admin \nhttps://www.facebook.com/ttm130 ]"',
		"user": "Người dùng",
        "adminGroup": "Quản trị viên nhóm",
        "adminBot": "Admin bot"
	},
	"en": {
		"moduleInfo": "「 %1 」\n%2\n\n❯ Usage: %3\n❯ Category: %4\n❯ Waiting time: %5 seconds(s)\n❯ Permission: %6\n\n» Module code by %7 «",
		"helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
}

module.exports.handleEvent = function ({ api, event, getText }) {
	const { commands } = global.client;
	const { threadID, messageID, body } = event;

	if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports.run = function({ api, event, args, getText }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	if (!command) {
		const command = commands.values();
		var group = [], msg = "";
		for (const commandConfig of command) {
			if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
			else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
		}
		group.forEach(commandGroup => msg += `helpAll": '📌Hiện tại đang có %1 lệnh có thể sử dụng trên bot này\n🐳Sử dụng: ꧁%2help tên lệnh꧂\nđể xem chi tiết cách sử dụng"',
		"helpList": '🍁🍁🍁BOT Sen🍁🍁🍁\n\n%2\n💟Hiện tại đang có %3 lệnh có thể sử dụng trên bot này\n🦋Hãy reply(phản hồi) STT\n🤖Bot được điều hành bởi Nguyễn Thanh Sang\n📩Mọi thắc mắc liên hệ Admin Bot\n📱Fb : https://www.facebook.com/SenDVFB/\n📱Zalo : 0865007727\n🔰Dùng %4menu all để xem tất cả các lệnh\n🐳Chúc bạn sử dụng bot vui vẻ🔥',
		"helpeply": '🍁%1🍁\nSau đây là nhóm lệnh của\n🍁%2🍁\n\n%3\n🔥Hãy reply(phản hồi) số thứ tự để xem chi tiết cách sử dụng!`);
		return api.sendMessage(msg + getText("menuList", commands.size, prefix), threadID, async (error, info) =>{
			if (autoUnsend) {
				await new Promise(resolve => setTimeout(resolve, delayUnsend * 60000));
				return api.unsendMessage(info.messageID);
			} else return;
      const { errorHandler } = require("../utils");

exports.getLink1 = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)];
  res.json({"Authors":"DungUwU && Lê Anh Trí","url":`${link}`});
};
		});

	}

	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}
