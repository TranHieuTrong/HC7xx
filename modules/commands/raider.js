module.exports.config = {
  name: "raiden shogun ",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Teri",
  description: "Random ảnh raiden shogun ",
  commandCategory: "random-img",
  usages: "ball",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://imgur.com/tY5vVPq.jpg",
"https://imgur.com/Nc4uA5v.jpg",
"https://imgur.com/iXOGHaq.jpg",
"https://imgur.com/pN5PIfN.jpg",
"https://imgur.com/OIMrc6i.jpg",
"https://imgur.com/trglBix.jpg",
"https://imgur.com/NwzcPkf.jpg",
"https://imgur.com/VdAESOH.jpg",
"https://imgur.com/EB0MKf5.jpg",
"https://imgur.com/w7VosR1.jpg",
"https://imgur.com/tusgzoT.jpg",
"https://imgur.com/VC57a7W.jpg",
"https://imgur.com/JLFp45T.jpg",
"https://imgur.com/twVHoCU.jpg",
"https://imgur.com/AyKXYk6.jpg",
"https://imgur.com/lIs30Ui.jpg",
"https://imgur.com/waO8BXL.jpg",
"https://imgur.com/5ZndR7K.jpg",
"https://imgur.com/cQOxKeS.jpg",
"https://imgur.com/EVUQur7.jpg",
"https://imgur.com/MUZx0WS.jpg",
"https://imgur.com/XlSt8yn.jpg",
"https://imgur.com/tKmwPKX.jpg",
"https://imgur.com/usFHJYc.jpg",
"https://imgur.com/q787uH8.jpg",
"https://imgur.com/ZLRmuxN.jpg",
"https://imgur.com/KMQ9mzB.jpg",
"https://imgur.com/pNCFcAq.jpg",
"https://imgur.com/02k1Nt7.jpg",
"https://imgur.com/tgMsntV.jpg",
"https://imgur.com/qhOno82.jpg",
"https://imgur.com/fSG0oWn.jpg",
"https://imgur.com/ci8rtGi.jpg",
"https://imgur.com/4d8yy2p.jpg",
"https://imgur.com/ODHoPKP.jpg",
"https://imgur.com/7Mf5WO8.jpg",
"https://imgur.com/5nqSHK6.jpg",
"https://imgur.com/Vm4GZhx.jpg",
"https://imgur.com/14k1wpw.jpg",
"https://imgur.com/GBg4Miv.jpg",
"https://imgur.com/Jlzm72b.jpg",
"https://imgur.com/lPIpzyh.jpg",
"https://imgur.com/9k51wuc.jpg",
"https://imgur.com/NMlN3o5.jpg",
"https://imgur.com/nBYqmlg.jpg",
"https://imgur.com/sc4frAB.jpg",
"https://imgur.com/tDKtry4.jpg",
"https://imgur.com/ndaAFu5.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 100) api.sendMessage("Bạn cần 100 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 10})
   var callback = () => api.sendMessage({body:`Raiden shogun nè mlem đi\nSố Ảnh: ${link.length}\n-100 đô !`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };