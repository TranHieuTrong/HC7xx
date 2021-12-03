module.exports.config = {
    name: "trộm chó",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "HungCatMoi",
    description: "",
    commandCategory: "Games",
    usages: "trộm chó [tag]",
    dependencies: {
        "path": "",
     "jimp": ""
},
    cooldowns: 5
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/canvas/`;
    if (!fs.existsSync(dirMaterial + "canvas")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "tromcho.png")) request("https://i.imgur.com/ubFLgcc.png").pipe(fs.createWriteStream(dirMaterial + "tromcho.png"));
}

async function makeImage({ one, two }) {    
    const axios = require("axios");
    const fs = require("fs-extra");
    const path = require("path");
    const jimp = require("jimp");
    const __root = path.resolve(__dirname, "cache", "canvas");

    let tromcho_image = await jimp.read(__root + "/tromcho.png");
    let pathImg = __root + `/tromcho${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;
    
    let getAvatarOne = (await axios.get(`https://4boxvn.com/api/avt?s=${one}`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    let getAvatarTwo = (await axios.get(`https://4boxvn.com/api/avt?s=${two}`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));
    
    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    tromcho_image.composite(circleOne.resize(50, 50), 234, 38).composite(circleTwo.resize(90, 90), 50, 234);
    
    let raw = await tromcho_image.getBufferAsync("image/png");
    
    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    fs.unlinkSync(avatarTwo);
    
    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ event, api, args, client }) {
    const fs = require("fs-extra");
    let { threadID, messageID, senderID } = event;
    var mention = Object.keys(event.mentions);
    let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
    else {
        var one = senderID, two = mention[0];
        return makeImage({ one, two }).then(path => api.sendMessage({ body: "M coi chừng t xích m lại nhé sủa cl! 😈😈\nNha"  + `${tag}`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}], attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
}