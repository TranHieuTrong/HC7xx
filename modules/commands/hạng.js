module.exports.config = {
	name: "hạng",
	version: "1.0.5",
	hasPermssion: 1,
	credits: "Đào",
	description: "Xem những đứa lắm mồm nhất quả đất",
	commandCategory: "system",
	usages: "[thread/user/money]",
	cooldowns: 5
};

module.exports.run = async ({ event, api, args, Currencies, Users }) => {
    const { threadID, messageID } = event;


	///////////////////////////////////////////
	//===== Kiểm tra có limit hay không =====//
	if (args[1] && isNaN(args[1]) || parseInt(args[1]) <= 0) return api.sendMessage("thông tin độ dài list phải là một con số và không dưới 0", event.threadID, event.messageID);
	var option = parseInt(args[1] || 10);
	var data, msg = "";

	///////////////////////////////////////
	//===== Kiểm tra các trường hợp =====//
	if (args[0] == "thread") {
		var threadList = [];
		
		//////////////////////////////////////////////
		//===== Lấy toàn bộ nhóm và số message =====//
		try {
        	data = await api.getThreadList(option + 10, null, ["INBOX"]);
		}
		catch (e) {
			console.log(e);
		}

		for (const thread of data) {
			if (thread.isGroup == true) threadList.push({ threadName: thread.name, threadID: thread.threadID, messageCount: thread.messageCount });
		}
		
		/////////////////////////////////////////////////////
		//===== sắp xếp từ cao đến thấp cho từng nhóm =====//
		threadList.sort((a, b) => {
			if (a.messageCount > b.messageCount) return -1;
            if (a.messageCount < b.messageCount) return 1;
		})

		///////////////////////////////////////////////////////////////
		//===== Bắt đầu lấy danh sách push vào khuôn mẫu trả về =====//
		var i = 0;
		for(const dataThread of threadList) {
			if (i == option) break;
			msg += `${i+1}/ ${(dataThread.threadName)||"Không tên"}[${dataThread.threadID}] với ${dataThread.messageCount} tin nhắn\n`;
			i+=1;
		}
    
		return api.sendMessage(`Dưới đây là top ${threadList.length} các nhóm lắm mồm nhất quả đất:\n\n${msg}`, threadID, messageID);

	}
	else if (args[0] == "user") {
		var data, msg = "", i = 0;

		//////////////////////////////////////////////
		//===== Lấy toàn bộ user và số message =====//
		try {
			data = await Currencies.getAll(["userID","exp"]);
		}
		catch (e) {
			console.log(e);
		}

		/////////////////////////////////////////////////////
		//===== sắp xếp từ cao đến thấp cho từng user =====//
		data.sort((a, b) => {
			if (a.exp > b.exp) return -1;
            if (a.exp < b.exp) return 1;
		})

		//////////////////////////////////////////////////////
		//===== Kiểm tra nếu option lớn hơn số user có =====//
		if (data.length < option) option = data.length;

		//////////////////////////////////////////////////
		//===== Lọc và bỏ id của bot ra khỏi data =====//
		const idBot = api.getCurrentUserID();
		data = data.filter(item => item.userID != idBot);

		///////////////////////////////////////////////////////////////
		//===== Bắt đầu lấy danh sách push vào khuôn mẫu trả về =====//
		for(const dataUser of data) {
			if (i == option) break;
			var nameUser = global.data.userName.get(parseInt(dataUser.userID));
            if (nameUser) nameUser = await Users.getNameUser(dataUser.userID);

			msg += `${i + 1}/ ${nameUser} với ${dataUser.exp} tin nhắn\n`;
			i+=1;
		}
    
		return api.sendMessage(`Dưới đây là top ${option} các người dùng lắm mồm nhất quả đất:\n\n${msg}`, threadID, messageID);
	}
    else if (args[0] == "money") {
        var data, msg = "", i = 0;

		//////////////////////////////////////////////
		//===== Lấy toàn bộ user và số coin =====//
		try {
			data = await Currencies.getAll(["userID","money"]);
		}
		catch (e) {
			console.log(e);
		}

		/////////////////////////////////////////////////////
		//===== sắp xếp từ cao đến thấp cho từng user =====//
		data.sort((a, b) => {
			if (a.money > b.money) return -1;
            if (a.money < b.money) return 1;
		})

		//////////////////////////////////////////////////////
		//===== Kiểm tra nếu option lớn hơn số user có =====//
		if (data.length < option) option = data.length;

		//////////////////////////////////////////////////
		//===== Lọc và bỏ id của bot ra khỏi data =====//
		const idBot = api.getCurrentUserID();
		data = data.filter(item => item.userID != idBot);

		///////////////////////////////////////////////////////////////
		//===== Bắt đầu lấy danh sách push vào khuôn mẫu trả về =====//
		for(const dataUser of data) {
			if (i == option) break;
			var nameUser = global.data.userName.get(parseInt(dataUser.userID));
            if (nameUser) nameUser = await Users.getNameUser(dataUser.userID);

			msg += `${i + 1}/ ${nameUser} với ${dataUser.money} đô\n`;
			i+=1;
		}
    
		return api.sendMessage(`Dưới đây là top ${option} các người dùng giàu nhất quả đất:\n\n${msg}`, threadID, messageID);
    }
	else return global.utils.throwError(this.config.name, threadID, messageID);
}
//THIS MODULE WAS MADE BY ME(CATALIZCS) - PLEASE DONT DELETE MY CREDIT (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯