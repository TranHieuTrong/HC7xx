module.exports.config = {
    name: "tú",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "DũngUwU",
    description: "",
    commandCategory: "Games",
    usages: "",
    cooldowns: 5
};

const request = require("request");
const fs = require("fs");

module.exports.run = async function ({ event, api }) {
      return api.sendMessage({
        body: "Đừng có biện hộ, bằng chứng đầy đủ nhé Tú",
        mentions: [{
          tag: "Tú biện hộ",
          id: 100047158541579
        }],
        attachment: fs.createReadStream(__dirname + `/cache/tú.jpg`)
      }, event.threadID, (err, info) => setTimeout ( () => {api.unsendMessage(info.messageID) }, 10000)).then(api.sendMessage({
        body: "kỳ quá nha Tú",
        mentions: [{
          tag: "Tú kỳ",
          id: 100047158541579
        }]
      }, event.threadID).then(api.sendMessage({
        body: "hư lắm nha Tú",
        mentions: [{
          tag: "Tú hư",
          id: 100047158541579
        }]
      }, event.threadID)
      .then(api.sendMessage({
        body: "không được quá nha Tú",
        mentions: [{
          tag: "Tú kỳ cục",
          id: 100047158541579
        }]
      }, event.threadID)
      .then(api.sendMessage({
        body: "Tú quá đáng lắm luôn",
        mentions: [{
          tag: "Tú quá đáng",
          id: 100047158541579
        }]
      }, event.threadID)))));
}