const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "búcu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "huy hoàng và hoàng",
  description: "Bú Cu Người Bạn Muốn",
  commandCategory: "Hình Ảnh",
  usages: "bucu",
  cooldowns: 5,
  dependencies: {
        "fs": "",
        "axios": "",
		"request": ""
    }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
        const request = require('request')
                const fs = require('fs')
                if (args.join().indexOf('@') !== -1)
        var link = [
          "https://i.imgur.com/SKeAC5X.gif",
             ];
   var callback = () => api.sendMessage({body:`Bú Cu Đã Không Cưng 🤭`
  ,attachment: fs.createReadStream(__dirname + "/cache/bucu.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/bucu.gif"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/bucu.gif")).on("close",() => callback());
   };