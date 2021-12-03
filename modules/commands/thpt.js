module.exports.config = {
	name: "thpt",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "Đếm ngược tới kì thi trung học phổ thông quốc gia",
	commandCategory: "other",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("Aug 5, 2021 07:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`「Thời gian còn lại cho kỳ thi THPT Quốc Gia Đợt 2」\n» ${days} ngày ${hours} tiếng ${minutes} phút ${seconds} giây «`, event.threadID, event.messageID);
}