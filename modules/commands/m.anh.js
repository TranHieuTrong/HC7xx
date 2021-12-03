module.exports.config = {
  name: "ngiubot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PhamTrực",
  description: "Random ảnh girl",
  commandCategory: "Người Yêu Bot",
  usages: "ngiubot",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
     "https://tinyurl.com/yejqe324",
     "https://tinyurl.com/yj8hterx",
    ];
   var callback = () => api.sendMessage({body:`Ảnh Bbi của Bot\nSố ảnh: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };