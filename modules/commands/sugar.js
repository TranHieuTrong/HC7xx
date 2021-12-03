module.exports.config = {
    name: "sugar",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "hungdz30cm",
    description: "Những ảnh .... chất lượng\nMổi lần xem bạn phải trả 500 đô!",
    commandCategory: "random-img",
    usages: "sugar",
    cooldowns: 5
};
module.exports.run = async ({ api, event, Currencies }) => {
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    var data = await Currencies.getData(event.senderID);
        var money = data.money
      if(money < 500) api.sendMessage("Bạn cần 500 đô để xem ảnh\n(Có làm mới có ăn)",event.threadID,event.messageID)
         else {
        var data = (await axios.get("http://nsfw.eliric.io/api.php?key=ConCuBeBe")).data;    
        let i = data.link.substring(data.link.lastIndexOf(".") + 1);
        let u = data.use_left
        let s = data.size
        Currencies.setData(event.senderID, options = {money: money - 500})
        let callback = function () {
                    api.sendMessage({
                        body: `REQUEST LEFT: ${u}\nSize: ${s}\r\n500 đô đã biến mất khỏi túi của bạn!`,
                        attachment: fs.createReadStream(__dirname + `/cache/sugar.${i}`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sugar.${i}`), event.messageID);
                };
                request(data.link).pipe(fs.createWriteStream(__dirname + `/cache/sugar.${i}`)).on("close", callback);
            }
}
