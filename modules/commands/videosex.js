const request = require('request');
const fs = require('fs')

module.exports.config = {
  name: "videosex",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hoàng ",
  description: "=))",
  commandCategory: "Hình ảnh",                                                                                                                                                                                                       usages: "địt [tag người bạn cần địt]",
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
  return request('https://mucode1.000webhostapp.com/videosex.php', (err, response, body) => {
    let picData = JSON.parse(body);                                                                                                                                                                                                   var mention = Object.keys(event.mentions)[0];
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    
    let callback = function() {
      api.sendMessage({
        body:  "nung chua",
        attachment: fs.createReadStream(__dirname + `/cache/videosex.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/videosex.${ext}`), event.messageID);
    };
    request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/videosex.${ext}`)).on("close", callback);
  });
}