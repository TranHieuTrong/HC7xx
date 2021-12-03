module.exports.config = {
    name: "bopvu",
    version: "2.0.0",
    hasPermssion: 0,
    credits: "Pro",
    description: "",
    commandCategory: "Games",
    usages: "[tag]",
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": "",
        "jimp": ""
    }
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/canvas/`;
    if (!fs.existsSync(dirMaterial + "canvas")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "bopvu.png")) request("https://i.imgur.com/fhXXIcT.jpg").pipe(fs.createWriteStream(dirMaterial + "bopvu.png"));
}

async function makeImage({ one }) {    
    const axios = require("axios");
    const fs = require("fs-extra");
    const path = require("path");
    const jimp = require("jimp");
    const __root = path.resolve(__dirname, "cache", "canvas");

    let bopvu_image = await jimp.read(__root + "/bopvu.png");
    let pathImg = __root + `/bopvu_${one}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    
    let getAvatarOne = (await axios.get(`https://4boxvn.com/api/avt?s=${one}`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    
    let circleOne = await jimp.read(await circle(avatarOne));
    bopvu_image.composite(circleOne.resize(160, 160), 215, 72);
    
    let raw = await bopvu_image.getBufferAsync("image/png");
    
    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    
    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ event, api, args }) {
    const fs = global.nodemodule["fs-extra"];
    const { threadID, messageID, senderID } = event;
    const mention = Object.keys(event.mentions);
    if (!mention[0]) return api.sendMessage("Vui lòng tag 1 người.", threadID, messageID);
    else {
        var one = mention[0];
        return makeImage({ one }).then(path => api.sendMessage({ body: "Ôi....🥰\n" + event.mentions[mention[0]].replace(/@/g, "") +"\nVíu em to quóa 🤫", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
}