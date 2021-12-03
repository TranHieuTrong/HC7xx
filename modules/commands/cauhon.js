module.exports.config = {
    name: "cauhon",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "dungkon",
    description: "",
    commandCategory: "Games",
    usages: "cauhon [tag]",
    dependencies: ["path", "jimp"],
    cooldowns: 5
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/canvas/`;
    if (!fs.existsSync(dirMaterial + "canvas")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "cauhon.png")) request("https://scontent.xx.fbcdn.net/v/t1.15752-0/p480x480/186546143_966740784105933_5868748189423149070_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=ae9488&_nc_ohc=oq--eKRJDy4AX-7_y40&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=6&oh=115519751863118634f5cdb7ae542e56&oe=60D746D2").pipe(fs.createWriteStream(dirMaterial + "cauhon.png"));
}

async function makeImage({ one }) {    
    const axios = require("axios");
    const fs = require("fs-extra");
    const path = require("path");
    const jimp = require("jimp");
    const __root = path.resolve(__dirname, "cache", "canvas");

    let bopvu_image = await jimp.read(__root + "/cauhon.png");
    let pathImg = __root + `/cauhon_${one}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    
    let getAvatarOne = (await axios.get(`https://api.miraiproject.tk/getavatar?ID=${one}`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    
    let circleOne = await jimp.read(await circle(avatarOne));
    bopvu_image.composite(circleOne.resize(70,70), 115, 30);
    
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

module.exports.run = async function ({ event, api, args, client }) {
    const fs = require("fs-extra");
    let { threadID, messageID, senderID } = event;
    var mention = Object.keys(event.mentions);
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
    else {
        var one = mention[0];
        return makeImage({ one }).then(path => api.sendMessage({ body: "Em 🥰\n" + event.mentions[mention[0]].replace(/@/g, "") +"\nĐồng Ý Làm Vợ Anh nhé ", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
}