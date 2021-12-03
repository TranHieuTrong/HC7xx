module.exports.config = {
	name: "sinhnhatad",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Hoài Bảo",
	description: "Đếm ngược tới ngày sinh nhật của admin",
	commandCategory: "other",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("june 16, 2022 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`「Sắp tới ngày sinh nhật của admin rồi đóoooooo <3」\n» ${days} ngày ${hours} tiếng ${minutes} phút ${seconds} giây «`, event.threadID, event.messageID);
}