module.exports.config = {
    name: "sugar2",
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
      if(money < 5000) api.sendMessage("Bạn Nghèo Mà Cũng Muốn Ngắm Gái À\n(Có làm mới có ăn)",event.threadID,event.messageID)
         else {
        var data = (await axios.get("http://khuongpro.tk/api.php")).data;    
        let i = data.link.substring(data.link.lastIndexOf(".") + 1);
        let title = data.title
        Currencies.setData(event.senderID, options = {money: money - 5000})
        let callback = function () {
                    api.sendMessage({
                        body: `${title}\r\n5000 Đã Bay Khỏi Tay Mày!`,
                        attachment: fs.createReadStream(__dirname + `/cache/sugar2.${i}`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sugar2.${i}`), event.messageID);
                };
                request(data.link).pipe(fs.createWriteStream(__dirname + `/cache/sugar2.${i}`)).on("close", callback);
            }
}
