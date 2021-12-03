module.exports.config = {
    name: "linhngocdam",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "hoàng",
    description: "hi",
    commandCategory: "Hình ảnh",
    usages: "",
    cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    axios.get(`https://web-api-teammucode.ga/linhngocdam.php`).then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/linh.${ext}`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/linh.${ext}`), event.messageID);
                };
                request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/linh.${ext}`)).on("close", callback);
            })
}