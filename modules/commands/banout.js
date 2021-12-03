module.exports.config = {
	name: 'banout',
	version: '1.0.0',
	credits: 'Khánh Milo', //pls don't edit credis
	hasPermssion: 2,
	description: 'banout thread bot đã tham gia',
	commandCategory: 'Admin',
	usages: '',
	cooldowns: 15
};
module.exports.onLoad = function () {
    if (typeof global['KhanhMilo'] == "undefined") global['KhanhMilo'] = new Object();
    if (typeof global['KhanhMilo']['BanOut'] == "undefined") global['KhanhMilo']['BanOut'] = new Map();
}

module.exports.handleEvent = async ({ event, api, Threads }) => {
    const data = (await Threads.getData(event.threadID)).data || {};
    const checkban = data.banOut || []
		if (checkban.includes(checkban[0])) api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);      
}


module.exports.handleReply = async function({ api, event, Threads, handleReply }) {
if(handleReply.author != event.senderID) return;
const data = (await Threads.getData(handleReply.groupid[event.body - 1])).data || {};
data.banOut = handleReply.groupid[event.body - 1];
await Threads.setData(handleReply.groupid[event.body - 1], { data });
global['KhanhMilo']['BanOut'].set(parseInt(handleReply.groupid[event.body - 1]), data);
api.sendMessage(`[${handleReply.groupid[event.body - 1]}] Đã ban thành công!`, event.threadID, () => api.unsendMessage(handleReply.messageID));  

};



module.exports.run = async function({ api, event }) {
	var inbox = await api.getThreadList(100, null, ['INBOX']);
	let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);
	var listthread = [];
	//////////
 for (var groupInfo of list) {
		let data = (await api.getThreadInfo(groupInfo.threadID));
		listthread.push({
			id: groupInfo.threadID,
			name: groupInfo.name,
			sotv: data.userInfo.length,
		});
		
	} //for
	var listbox = listthread.sort((a, b) => {
		if (a.sotv > b.sotv) return -1;
		if (a.sotv < b.sotv) return 1;
	});
	let msg = '', i = 1;
	var groupid = [];
	for (var group of listbox) {
		msg += `${i++}. ${group.name}\nTID: ${group.id}\nThành viên: ${group.sotv}\n\n`;
	groupid.push(group.id);
	}
	api.sendMessage(msg+'Reply Số thứ tự để banout thread đó!!', event.threadID, (e, data) => 
	   global.client.handleReply.push({
	    name: this.config.name,
	    author: event.senderID,
	    messageID: data.messageID,
	    groupid,
	    type: 'reply'
	  })
	  );
};
