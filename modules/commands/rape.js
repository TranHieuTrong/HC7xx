module.exports.config = {
    name: "rape",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "VanHung",
    description: "",
    commandCategory: "Games",
    usages: "[tag]",
    cooldowns: 5
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/canvas/`;
    if (!fs.existsSync(dirMaterial + "canvas")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "hiepdam.png")) request("https://i.imgur.com/VrkcjC7.jpg").pipe(fs.createWriteStream(dirMaterial + "hiepdam.png"));
}

async function makeImage({ one }) {    
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "cache", "canvas");

    let hiepdam_image = await jimp.read(__root + "/hiepdam.png");
    let pathImg = __root + `/hiepdam_${one}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    
    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    
    let circleOne = await jimp.read(await circle(avatarOne));
    hiepdam_image.composite(circleOne.resize(250, 250), 171, 187);
    
    let raw = await hiepdam_image.getBufferAsync("image/png");
    
    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    
    return pathImg;
}
async function circle(image) {
    const jimp = global.nodemodule["jimp"];
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ event, api, args, client }) {
    const { threadID, messageID, senderID } = event;
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, '../commands', 'cache', 'nsfw.json');
    const { nsfw } = require(path);

    if (nsfw.hasOwnProperty(threadID) && nsfw[threadID] == true) {
          const fs = global.nodemodule["fs-extra"];
    var mention = Object.keys(event.mentions)[0];
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
    else {
        var one = mention;
        return makeImage({ one }).then(path => api.sendMessage({ body: "Ôi không...\n" + event.mentions[mention].replace(/@/g, "") +"\nĐã bị hấp diêm 😟😟", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
        } else api.sendMessage('Nhóm của bạn chưa bật nsfw, dùng lệnh nsfw để xem chi tiết', threadID, messageID);
}