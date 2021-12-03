module.exports.config = {
    name: "hentai",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "VanHung",
    description: "NSFW",
    commandCategory: "general",
    usages: "[args]\n❯ Ví dụ: .hentai futanari",
    cooldowns: 5
};

module.exports.run = ({ event, api, args }) => {
    const { threadID, messageID, senderID } = event;
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, '../commands', 'cache', 'nsfw.json');
    const { nsfw } = require(path);

    if (nsfw.hasOwnProperty(threadID) && nsfw[threadID] == true) {
        const { readFileSync, createReadStream, createWriteStream, unlinkSync } = require("fs-extra");
    const request = require("request");

    let animeData = JSON.parse(readFileSync(__dirname + "/cache/hentai.json"));
    if (!animeData.hasOwnProperty(args[0])) {
        let list = [];
        Object.keys(animeData).forEach(endpoint => list.push(endpoint));
        return api.sendMessage(`==== Tag Hentai ====\n${list.join(", ")}`, threadID, messageID);
    }
    else return request(animeData[args[0]], (error, response, body) => {
        let picData = JSON.parse(body);
        let URL = "";
        (!picData.data) ? URL = picData.url : URL = picData.data.response.url;
        let ext = URL.substring(URL.lastIndexOf(".") + 1);
        request(URL)
        .pipe(createWriteStream(__dirname + `/cache/hentai.${ext}`))
        .on("close", () => api.sendMessage({ attachment: createReadStream(__dirname + `/cache/hentai.${ext}`) }, threadID, () => unlinkSync(__dirname + `/cache/hentai.${ext}`), messageID));
    })
      } else api.sendMessage('Nhóm của bạn chưa bật nsfw, dùng lệnh nsfw để xem chi tiết', threadID, messageID);
}