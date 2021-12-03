const request = global.nodemodule['request'];
const fs = global.nodemodule['fs']

module.exports.config = {
  name: "bopvu2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BerVer mod by VanHung",
  description: "bóp vú bạn tag",
  commandCategory: "general",
  usages: "bóp [tag người bạn cần bóp vú]",
  cooldowns: 5,
  dependencies: {"request": "",
  "fs": ""
}
};

module.exports.run = async({api,event,args,client,global, Users}) => {
  var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
    const mention = Object.keys(event.mentions)[0];
    let dt = await api.getUserInfo(event.senderID);
    let name_1 = dt[event.senderID].name;
    
  if (!args.join(" ")) return out("Bạn chưa tag");
  else
  return request('https://4boxvn.com/api/bopvu.php', (err, response, body) => {
     let picData = JSON.parse(body);
     let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    let tag = event.mentions[mention].replace("@", "");
    let callback = function() {
      api.sendMessage({
        body: tag + ` Bị bóp sướng chưa em\n\nNgười dùng đã bóp vũ bạn là:   ${name_1} `,
        mentions: [{
          tag: tag, 
          id: mention, 
        } , {tag: `${name_1}`, id: event.senderID}],
        attachment: fs.createReadStream(__dirname + `/src/dit.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/src/dit.${ext}`), event.messageID);
    };
    request(getURL).pipe(fs.createWriteStream(__dirname + `/src/dit.${ext}`)).on("close", callback);
  });
} 