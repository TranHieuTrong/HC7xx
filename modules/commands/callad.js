module.exports.config = {
  name: "callad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NTKhang",
  description: "thông báo lỗi của bot đến admin hoặc góp ý",
  commandCategory: "other",
  usages: "callad [lỗi gặp phải hoặc ý kiến]",
  cooldowns: 5,
};

module.exports.handleReply = async function({ api, args, event, handleReply}) {
  var name = ((await api.getUserInfo(event.senderID))[event.senderID]).name; 
 switch(handleReply.type) {
   case "reply": {
     var idad = global.config.ADMINBOT;
     for(let ad of idad) {
     api.sendMessage({body: "📄Phản hồi từ "+name+":\n"+event.body, mentions: [{
      id: event.senderID,
      tag: name}]},ad , (e, data) => global.client.handleReply.push({
      name: this.config.name,
      messageID: data.messageID,
      messID: event.messageID,
      author: event.senderID,
      id: event.threadID,
      type: "calladmin"}))
     }
   break;}
    case "calladmin": {
      api.sendMessage({ body: `📌Phản hồi từ admin ${name} đến bạn:\n--------\n${event.body}\n--------\n»💬Phản hồi tin nhắn này để tiếp tục gửi báo cáo về admin`, mentions: [{tag: name, id : event.senderID}]}, handleReply.id, (e, data) => global.client.handleReply.push({
  name: this.config.name,
  author: event.senderID,
  messageID: data.messageID,
  type: "reply"}), handleReply.messID);
   break;}
     
     }
  
  
};

module.exports.run = async function({ api, event, args }) {
  if (!args[0])
    return api.sendMessage(
      "Bạn chưa nhập nội dung cần báo cáo",
      event.threadID,
      event.messageID
    );
  var data = await api.getUserInfo(event.senderID);
  var name = data[event.senderID].name;
  var idbox = event.threadID;
  var url = data[event.senderID].profileUrl;
  var datathread = await api.getThreadInfo(event.threadID);
  var namethread = datathread.name;

  const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
  var soad = global.config.ADMINBOT.length;
  api.sendMessage(
    "Đã gửi báo cáo của bạn đến các admin bot",
    event.threadID,
    () => {
    var idad = global.config.ADMINBOT;
    for(let ad of idad) {
        api.sendMessage(`👤Báo cáo từ: ${name}\n${url}\n👨‍👩‍👧‍👧Box: ${namethread}\nID box: ${idbox}\n---------------------------------------------\n⚠️Lỗi: ${args.join(
            " "
          )}\n--------------------------------------------- \nTime: ${gio}`,
          ad, (error, info) =>
            global.client.handleReply.push({
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              messID: event.messageID,
              id: idbox,
              type: "calladmin"
            })
        );
    }
    }
  );
};