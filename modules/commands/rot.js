module.exports.config = {
    name: "rot",
    version: "1.0.2",
    hasPermssion: 1,
    credits: "Hoàng",
    description: "encode đó con tró",
    commandCategory: "Mã Hóa",
    usages: "cút",
    cooldowns: 20,
    dependencies: {
        "caesar-salad": ""
    }
  };
  
module.exports.run = function({ api, event, args, client, global }) {
                   const ROT47 = global.nodemodule['caesar-salad'];
                        var content = args.join(" ");
                        if (event.type == "message_reply")(content.indexOf('en') == 0) ? api.sendMessage(ROT47.Cipher(event.messageReply.body), event.threadID, event.messageID) : (content.indexOf('de') == 0) ? api.sendMessage(ROT47.Decipher(event.messageReply.body), event.threadID, event.messageID) : api.sendMessage(`Sai cú pháp, vui lòng tìm hiểu thêm tại ${prefix}help ${'rot'}`, event.threadID, event.messageID);
                        else (content.indexOf('en') == 0) ? api.sendMessage(ROT47.Cipher(content.slice(3, content.length)), event.threadID, event.messageID) : (content.indexOf('de') == 0) ? api.sendMessage(ROT47.Decipher(content.slice(3, content.length)), event.threadID, event.messageID) : api.sendMessage(`Sai cú pháp, vui lòng tìm hiểu thêm tại ${prefix}help ${'rot'}`, event.threadID, event.messageID);

                }
