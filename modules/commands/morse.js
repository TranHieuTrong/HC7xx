  
module.exports.config = {
  name: "morse",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BerVer",
  description: "Mã hoá đoạn văn bản của bạn trở thành mã morse",
  commandCategory: "cipher",
  usages: "morse [encode hoặc decode] [đoạn text ASCII cần mã hoá]",
  cooldowns: 5,
  dependencies: {
    "morse-decoder": ""
  }
};

module.exports.run = function({
  api,
  event,
  args,
  client,
  __GLOBAL
}) {
  const morsify = global.nodemodule['morse-decoder'];
  var content = args.join(" ");
  if (event.type == "message_reply")(content.indexOf('en') == 0) ? api.sendMessage(morsify.encode(event.messageReply.body), event.threadID, event.messageID) : (content.indexOf('de') == 0) ? api.sendMessage(morsify.decode(event.messageReply.body), event.threadID, event.messageID) : api.sendMessage(`Sai cú pháp, vui lòng tìm hiểu thêm tại ${prefix}help ${'morse'}`, event.threadID, event.messageID);
  else(content.indexOf('en') == 0) ? api.sendMessage(morsify.encode(content.slice(3, content.length)), event.threadID, event.messageID) : (content.indexOf('de') == 0) ? api.sendMessage(morsify.decode(content.slice(3, content.length)), event.threadID, event.messageID) : api.sendMessage(`Sai cú pháp, vui lòng tìm hiểu thêm tại ${prefix}help ${'morse'}`, event.threadID, event.messageID);
}