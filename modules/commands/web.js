module.exports.config = {
  name: "web",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "hoàng",
  description: "chỉ định qtv-bot phải làm qtv",
  commandCategory: "other",
  usages: "set",
  cooldowns: 5,
  info: [
    {
      key: "tag",
      prompt: "Để trống hoặc tag người khác",
      type: 'Tag',
      example: 'setptv-by loi'
    }
  ]
};

module.exports.run = function({ api, event, args }) {
	 if (args.join() == "") {api.sendMessage("Bot hiện đang có  2 web\n👉Sử dụng ,web 4box để xem tt web1\n👉Sử dụng .web sex để xem tt web sex",event.threadID, event.messageID);
    }
if (args[0] == "4box") {
  return api.sendMessage(`Giới thiệu về web api mà chúng tôi làm\n\n============\nLink dấn đến web: https://4boxvn .com\n\nNhớ xóa cách để vô web\n\n============\n\nWeb api phục vụ cho c3c bot và mirai bot\n\n============\nĐược phát triển bới Juong và Hoàng và Pha Ke cùng nhiều người khác\n\n\n============\n\nCút ddos con cặc địt mẹ mày =))`, event.threadID, event.messageID);
   
    
}
else if (args[0] == "sex") {
return api.sendMessage(`Xem sex ít thôi chưa phê à mà xem lắm thế =))`, event.threadID, event.messageID);
   
    }
  else api.sendMessage("cút", event.threadID);

}

