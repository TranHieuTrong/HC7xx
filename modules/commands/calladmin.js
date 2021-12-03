module.exports.config = {
  name: "callad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NTKhang (Khánh Milo Fix lại)",
  description: "thông báo lỗi của bot đến admin hoặc góp ý",
  commandCategory: "other",
  usages: "callad [lỗi gặp phải hoặc ý kiến]",
  cooldowns: 5,
  dependencies: {
    "moment-timezone": ""
}
};

module.exports.handleReply = async function({ api, event, Users, handleReply }) {
  var name = (await Users.getData(event.senderID)).name;
 
 switch(handleReply.type) {
   
   case "reply": {
    var soad = global.config.ADMINBOT.length;
    const moment = global.nodemodule["moment-timezone"];
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
    api.sendMessage(
      `Đã gửi báo cáo của bạn đến ${soad} admin bot ✅\nTime: ${gio}`,
      event.threadID,
      () => {
    var idad = global.config.ADMINBOT;
    for (arrayiadad of idad) {
  api.sendMessage({body: "📄Phản hồi từ "+name+":\n"+event.body, mentions: [{
    id: event.senderID,
    tag: name
  }] }, arrayiadad, (e, data) => global.client.handleReply.push({
    name: this.config.name,
    messageID: data.messageID,
    messID: event.messageID,
    author: event.senderID,
    id: event.threadID,
    type: "calladmin"
            }) )
          }
        }
        ); 
   break;}
     
    case "calladmin": {
   api.sendMessage({ body: 
    `📌Phản hồi từ admin ${name} đến bạn:\n◆━━━━━━━━━━━━━◆\n${event.body}\n◆━━━━━━━━━━━━━◆\n»💬Phản hồi tin nhắn này để tiếp tục gửi báo cáo về admin`, mentions: [{tag: name, id : event.senderID}]}, handleReply.id, (e, data) => global.client.handleReply.push({
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

  const moment = global.nodemodule["moment-timezone"];
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
  var soad = global.config.ADMINBOT.length;
 
  api.sendMessage(
    `Đã gửi báo cáo của bạn đến ${soad} admin bot ✅\nTime: ${gio}`,
    event.threadID,
    () => {
    var idad = global.config.ADMINBOT;
    for (arrayiadad of idad) {
        api.sendMessage(
          `👤Báo cáo từ: ${name}\n${url}\n👥Box: ${namethread}\nID box: ${idbox}\n◆━━━━━━━━━━━━━◆\n⚠️Lỗi: ${args.join(
            " "
          )}\n◆━━━━━━━━━━━━━◆\nTime: ${gio}`,
          arrayiadad,
          (error, info) =>
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