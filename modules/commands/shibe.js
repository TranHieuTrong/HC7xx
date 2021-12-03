module.exports.config = {
 name: "shibe",   
  version: "1.0.0",
 hasPermssion: 0,
 credits: "Trung Kien",
 description: "Shiba",
 commandCategory: "random-img",
 usages: "shuba",
 cooldowns: 5
};
module.exports. run = async ({ api, event }) => {
 const axios = global.nodemodule['axios'];
 const request = global.nodemodule['request'];
 const fs = global.nodemodule["fs"];
 axios.get(`https://shiba.ttktrungkien.repl.co/`).then((res) => {
 let callback = function () {
 api.sendMessage({
                 body: `Author: ${res.data.author}`,
 attachment: fs.createReadStream(__dirname + `/cache/shiba.jpg`)
 }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/shiba.jpg`), event.messageID);
 };
 request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/shiba.jpg`)).on("close", callback);
 })
};