const request = global.nodemodule['request'];
const fs = global.nodemodule['fs']

module.exports.config = {
  name: "gai2",
  version: "2.0.1",
  hasPermssion: 0,
  credits: "Dũngkon ",
  description: "xem ảnh Gái2",
  commandCategory: "ảnh Gái2",                                                                                                                                                                                                       usages: "địt [tag người bạn cần địt]",
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
  global
}) {
  return request('https://4boxvn.com/api/gai2.php', (err, response, body) => {
    let picData = JSON.parse(body);                                                                                                                                                                                                   var mention = Object.keys(event.mentions)[0];
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    let callback = function() {
      api.sendMessage({
        body:  "Ảnh Gái2",
        attachment: fs.createReadStream(__dirname + `/cache/gai2.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gai2.${ext}`), event.messageID);
    };
    request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/gai2.${ext}`)).on("close", callback);
  });
}