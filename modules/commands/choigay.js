module.exports.config = {
    name: "choigay",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "DungUwU",
    description: "Chơi gay với 1 ai đó",
    commandCategory: "Games",
    usages: "choigay [tag]",
    dependencies: {"path": "",
     "jimp": ""
 },
    cooldowns: 5
};

module.exports.onLoad = () => {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const dirMaterial = __dirname + `/cache/canvas/`;
    if (!fs.existsSync(dirMaterial + "canvas")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "choigay.png")) request("https://i.imgur.com/RbgG3c2.jpg").pipe(fs.createWriteStream(dirMaterial + "choigay.png"));
}

async function makeImage({ one, two }) {    
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const path = require("path");
    const jimp = require("jimp");
    const __root = path.resolve(__dirname, "cache", "canvas");

    let choigay_image = await jimp.read(__root + "/choigay.png");
    let pathImg = __root + `/choigay_${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;
    
    let getAvatarOne = (await axios.get(`https://4boxvn.com/api/avt?s=${one}`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    let getAvatarTwo = (await axios.get(`https://4boxvn.com/api/avt?s=${two}`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));
    
    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    choigay_image.composite(circleOne.resize(50, 50), 205, 28).composite(circleTwo.resize(45, 45), 250, 78);
    
    let raw = await choigay_image.getBufferAsync("image/png");
    
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
        return makeImage({ one, two }).then(path => api.sendMessage({ body: "Lên Đỉnh Chưa Em Yêu\nThông Địt Cho Dễ Ỉa Nè😘" + `${tag}`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}], attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
}