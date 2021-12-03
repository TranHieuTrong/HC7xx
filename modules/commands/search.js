module.exports.config = {
	name: "search",
	version: "0.0.3",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Tìm tên nhóm theo từ khoá",
	commandCategory: "group",
	usages: "nhóm [Tên nhóm hoặc 1 từ khoá của tên nhóm]",
	cooldowns: 5
};

module.exports.run = async ({ event, api, args, Threads }) => {
    let content = args.slice(1, args.length);
	switch (args[0]) {
		case "nhóm": {
			let contentJoin = content.join(" ");
			let getThreads =  (await Threads.getAll(['threadID', 'threadInfo'])).filter(item => !!item.threadInfo);
			let matchThreads = [], a = '', b = 0;
			getThreads.forEach(i => {
				if ((i.threadInfo.threadName || "").toLowerCase().includes(contentJoin.toLowerCase())) {
					matchThreads.push({
						name: i.threadInfo.threadName,
						id: i.threadID
					});
				}
			});
			matchThreads.forEach(i => a += `\n${b += 1}. ${i.name}\n${i.id}`);
			(matchThreads.length > 0) ? api.sendMessage(`Đã tìm thấy ${b} nhóm:\n${a}`, event.threadID) : api.sendMessage("Nhóm này không tồn tại trong Database!", event.threadID);
			break;
		}
		default: {
			return global.utils.throwError(this.config.name, event.threadID, event.messageID)
		}
	}
}