 const request = require("request");
const fs = require("fs")
const axios = require("axios")
 module.exports.config = {
  name: "gai",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Dũngkon",
  description: "Random ảnh giá",
  commandCategory: "Hình Ảnh",
  usages: "gai",
  cooldowns: 5,
  dependencies: {}
    
};

module.exports.run = async({api, event, Currencies}) => {
var data = await Currencies.getData(event.senderID);
  var money = data.money
  const moneyUser = (await Currencies.getData(event.senderID)).money;
  if (100 > moneyUser) return api.sendMessage("Hết tiền kìa bạn ơi", event.threadID, event.messageID);
    var link = [
"https://i.imgur.com/G8JTDUl.jpg",
"https://i.imgur.com/I755rri.jpg",
"https://i.imgur.com/L1FC5Ir.jpg",
"https://i.imgur.com/ax30104.jpg",
"https://i.imgur.com/saimlP4.jpg",
"https://i.imgur.com/GGfygcC.jpg",
"https://i.imgur.com/GGfygcC.jpg",
"https://i.imgur.com/y8cPYKs.jpg",
"https://i.imgur.com/jWsDIQf.jpg",
"https://i.imgur.com/uGNgllz.jpg",
"https://i.imgur.com/WyVdCdx.jpg",
"https://i.imgur.com/x4GjO4e.jpg",
"https://i.imgur.com/j4IdeZ9.jpg",

];
     Currencies.setData(event.senderID, options = {money: money - 100})
   var callback = () => 
   api.sendMessage({
    body:`Xin 100 của bạn nhá\nẢnh Gái\nSố Ảnh: ${link.length}`,
    attachment: fs.createReadStream(__dirname + "/cache/gai.jpg")
  }, event.threadID, (err, info) =>
        setTimeout(() => {api.unsendMessage(info.messageID) } , 3000000));
       request(link[Math.floor(Math.random() * link.length)]).pipe(fs.createWriteStream(__dirname+"/cache/gai.jpg")).on("close",() => callback());
   };