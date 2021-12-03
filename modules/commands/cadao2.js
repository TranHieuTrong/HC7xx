module.exports.config = {
    name: "cadao2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "VanHung",
    description: "Ca Dao Việt Nam",
    commandCategory: "News",
    usages: "cadao",
    cooldowns: 5
};

module.exports.run = async function ({ api, event })  {
const axios = global.nodemodule["axios"];
const res = (await axios.get(`https://le31.glitch.me/poem`)).data;
return api.sendMessage(`${res.data}`,event.threadID, event.messageID)
}