module.exports.config = {
	name: "fuid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Thiệu Trung Kiên",
	description: "",
	commandCategory: "Group",
	usages: "",
	cooldowns: 0
};

module.exports.run = function ({
	event,
	args,
	api,
	getText
}) {
	var typeuid = args[0];
	if (!typeuid) return api.sendMessage(`Vui lòng nhập url cần lấy uid!`, event.threadID, event.messageID);
	else {
		const axios = require('axios');
		axios.get(`https://simsimi.info/v1/get_uid_facebook_from_url.php?api_key=leanhtruong&url=${typeuid}`).then(res => {
			return api.sendMessage(`Url: ${res.data.url}\n\nUid: ${res.data.id}`, event.threadID, event.messageID);
		});
	}
}