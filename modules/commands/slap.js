/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
    name: "slap",
    version: "2.2.4",
    hasPermssion: 0,
    credits: "ProCoderMew",
    description: "",
    commandCategory: "general",
    usages: "[@tag]",
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": "",
        "jimp": ""
    },
    envConfig: {
        APIKEY: ""
    }
};

module.exports.onLoad = async() => {
    const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/cache/canvas/`;
    const path = resolve(__dirname, 'cache/canvas', 'slap.png');
    if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://git.meewmeew.info/data/slap.png", path);
}
async function makeImage({ one, two }) {    
    const { APIKEY } = global.configModule.slap;
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"];
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "cache", "canvas");

    let slap_image = await jimp.read(__root + "/slap.png");
    let pathImg = __root + `/slap_${one}_${two}.png`;
    let avatarOne = (await axios.get(`https://meewmeew.info/avatar/${one}?apikey=${APIKEY}`)).data;    
    let avatarTwo = (await axios.get(`https://meewmeew.info/avatar/${two}?apikey=${APIKEY}`)).data;    
    let circleOne = await jimp.read(await circle(Buffer.from(avatarOne, 'utf-8')));
    let circleTwo = await jimp.read(await circle(Buffer.from(avatarTwo, 'utf-8')));
    slap_image.composite(circleOne.resize(150, 150), 745, 25).composite(circleTwo.resize(140, 140), 180, 40);
    
    let raw = await slap_image.getBufferAsync("image/png");
    
    fs.writeFileSync(pathImg, raw);
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
        var one = senderID, two = mention[0];
        return makeImage({ one, two }).then(path => api.sendMessage({ body: "Toang ALO nè", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
}
