module.exports.config = {
	name: "in4",
	version: "0.0.1-beta",
	hasPermssion: 0,
	credits: "Lợi",
	description: "xem thông tin nhóm chat của bạn",
	commandCategory: "Info",
	usages: "info",
	cooldowns: 5,
	
};
module.exports.run = async ({ event, api, args, client, Currencies, Users, utils, global, reminder }) => {
const request = require('request')
const fs = require('fs')
 if (args[0]=="user"){
 let data = await api.getUserInfo(event.senderID);			
		let name = data[event.senderID].name;
let sex = data[event.senderID].gender;
var gender = sex == 2 ? "Nam" : sex == 1 ? "Nữ" : "Ái";
let isFriend = data[event.senderID].isFriend == false ? "Chưa kết bạn với BOT" : data[event.senderID].isFriend == true ? "Đã kết bạn với BOT" : "???";
				let vanity = data[event.senderID].vanity;
				let token = data[event.senderID].searchTokens;
				let url = data[event.senderID].profileUrl;
  var callback = () => api.sendMessage({body:`👉Tên: ${name} \n👍UID: ${event.senderID}\n😇Giới tính: ${gender}\n💥Tình trạng: ${isFriend}\n🌐Url: ${vanity}\n🔨Link FB: ${url}`,attachment: fs.createReadStream(__dirname + "/cache/2.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2.png"));
  	return request(encodeURI(`https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(fs.createWriteStream(__dirname+'/cache/2.png')).on('close',() => callback());

	}
	else if (Object.keys(event.mentions).length == 1) {
		var mention = Object.keys(event.mentions)[0];
 let data1 = await api.getUserInfo(mention);	
		let name= data1[mention].name;
let sex = data1[mention].gender;
var gender = sex == 2 ? "Nam" : sex == 1 ? "Nữ" : "Ái";
let isFriend = data1[mention].isFriend == false ? "Chưa kết bạn với BOT" : data[mention].isFriend == true ? "Đã kết bạn với BOT" : "???";
				let vanity = data1[mention].vanity;
				let token = data1[mention].searchTokens;
				let url = data1[mention].profileUrl;
  var callback = () => api.sendMessage({body:`🥀Tên: ${name} \n🔥UID: ${mention}\n🚻Giới tính: ${gender}\n🛠️Tình trạng: ${isFriend}\n🔮🌐Url: ${vanity}\n💦Link FB: ${url}`,attachment: fs.createReadStream(__dirname + "/cache/2.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2.png"));
  	return request(encodeURI(`https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(fs.createWriteStream(__dirname+'/cache/2.png')).on('close',() => callback());

	}
	else api.sendMessage("cút", event.threadID);
}