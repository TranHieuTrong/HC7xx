module.exports.config = {
	name: "tết",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "Đếm ngược đến Tết",
	commandCategory: "Đếm ngày",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("January 1, 2022 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`🥳Thời gian còn lại đến Tết🥳\n»${days} ngày ${hours} tiếng ${minutes} phút ${seconds} giây«`, event.threadID, event.messageID);
}