
module.exports.config = {
 name: "cadao",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "VanHung",
 description: "Ca Dao Việt Nam",
 commandCategory: "News",
 usages: "cadao",
 cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
const axios = require('axios');
const request = require('request');
const fs = require("fs");
const res = await axios.get(`http://le31.glitch.me/poem`);
const anh = await axios.get(`https://Misthy.hungdz30cm.repl.co/`);
var gai = anh.data.data.substring(anh.data.data.lastIndexOf(".") + 1);
var cadao = res.data.data
let callback = function () {
    api.sendMessage({
    body: `★Ca Dao Việt Nam★:\n﹤ ${cadao} ﹥`,
    attachment: fs.createReadStream(__dirname + `/cache/gaicadao.${gai}`)
   }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gaicadao.${gai}`), event.messageID);
   };
   request(anh.data.data).pipe(fs.createWriteStream(__dirname + `/cache/gaicadao.${gai}`)).on("close", callback);
}