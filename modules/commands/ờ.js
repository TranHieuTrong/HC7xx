const request = require('request');
const fs = require('fs')

module.exports.config = {
  name: "ờ",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Hoàng ",
  description: "Địt người bạn tag",
  commandCategory: "general",                                                                                                                                                                                                       usages: "địt [tag người bạn cần địt]",
  cooldowns: 5,
  dependencies: {
    "request": "",
  "fs": ""
}
};

module.exports.run = function({
  api,
  event,
  args,
  client,
  __GLOBAL
}) {
  var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
  if (!args.join(" ")) return out("Bạn chưa nhập tin nhắn");
  else
  return request('https://api.nekos.dev/api/v3/images/nsfw/img/piersing_lewd', (err, response, body) => {
    let picData = JSON.parse(body);                                                                                                                                                                                                   var mention = Object.keys(event.mentions)[0];
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    let tag = event.mentions[mention].replace("@", "");
    let callback = function() {
      api.sendMessage({
        body: tag + " Bị Anh Địt Đã Lồn Không Em 🥀",
        mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
        attachment: fs.createReadStream(__dirname + `/cache/sex.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sex.${ext}`), event.messageID);
    };
    request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/sex.${ext}`)).on("close", callback);
  });
}