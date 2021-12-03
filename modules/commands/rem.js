module.exports.config = {
  name: "rem",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kadeer",
  description: "Hầu Gái Rem",
  commandCategory: "ramdom-images",
  usages: "rem",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://apirem.khoahoang3.repl.co').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `🌸Rem nè <3\n🌸Số ảnh hiện có: ${count} ảnh`,
            attachment: fs.createReadStream(__dirname + `/cache/rem.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/rem.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/rem.${ext}`)).on("close", callback);
      })
}