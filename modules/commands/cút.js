module.exports.config = {
	name: "cút",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Khánh Milo",
	description: "cút",
	commandCategory: "other",
	usages: "",
	cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {

var info = await api.getThreadInfo(event.threadID);
	if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('Bot cần quyền quản trị viên nhóm để sử dụng lệnh này\nVui lòng thêm và thử lại!', event.threadID, event.messageID);

var idad = (await api.getThreadInfo(event.threadID)).adminIDs;

var a = [], mgs= "";

for(let ids of idad) a.push(ids.id);

a.splice(a.indexOf(api.getCurrentUserID()), 1);
for (var i = 0; i < a.length; i++) {	
	await delay(1000)
api.changeAdminStatus(event.threadID, a[i], false)

}	
return api.changeNickname("Ngu Như Một Con Chó 🐶", event.threadID, event.senderID);
}