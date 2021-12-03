const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "hun",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mainzed",
  description: "Hun Người Bạn Muốn",
  commandCategory: "Hình Ảnh",
  usages: "hun",
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
        var link = [         "https://tinyurl.com/yft84wvr",
             ];
   var callback = () => api.sendMessage({body: "Moazz :3 🤭"
  ,attachment: fs.createReadStream(__dirname + "/cache/hun.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/hun.mp4"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/hun.mp4")).on("close",() => callback());
   };