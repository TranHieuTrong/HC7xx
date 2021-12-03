module.exports.config = {
  name: "Goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.event = function({ api, event }) {
  if (event.senderID !== "100071816351772") {//id bot
    var aid = ["100025536690946"];//id admin(s)
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Tag tao làm đéo gì bạn êi🌚","Tag ăn cặc à ?" "Tag ad tao có chuyện gì k ?" "Tag cc ib thẳng mà nói"];//(các) câu bot rep
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }