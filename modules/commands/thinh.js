module.exports.config = {
    name: "Thính",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Hoàng",
    description: "chịu",
    commandCategory: "Thính",
    usages: "Thính",
    cooldowns: 5
};

module.exports.run = async function ({ api, event })  {
const axios = global.nodemodule["axios"];
const res = (await axios.get(`https://4boxvn.com/api/thinh`)).data;
return api.sendMessage(`${res.data}`, event.threadID, event.messageID)
}