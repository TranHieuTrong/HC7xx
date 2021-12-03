const request = global.nodemodule['request'];
const fs = global.nodemodule['fs']

module.exports.config = {
  name: "Nudetrai",
  version: "2.0.1",
  hasPermssion: 0,
  credits: "Dũngkon ",
  description: "xem ảnh nude trai",
  commandCategory: "ảnh nude trai",                                                                                                                                                                                                       usages: "địt [tag người bạn cần địt]",
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
  return request('https://mucode1.000webhostapp.com/nudetrai.php', (err, response, body) => {
    let picData = JSON.parse(body);                                                                                                                                                                                                   var mention = Object.keys(event.mentions)[0];
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    let callback = function() {
      api.sendMessage({
        body:  "ảnh nude trai",
        attachment: fs.createReadStream(__dirname + `/cache/nudetrai.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nudetrai.${ext}`), event.messageID);
    };
    request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/nudetrai.${ext}`)).on("close", callback);
  });
}