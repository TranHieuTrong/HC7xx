module.exports.config = {
    name: "yaytext",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SEN",//đổi cl
    description: "yaytext",
    commandCategory: "game",
    usages: "yaytext <nội dung>",
    cooldowns: 5
};

module.exports.run = async ({ event, api, args }) => {
   var text = args.join("").toLowerCase();
       text = text.toLowerCase();
         text = text.replace(/\./g, ``)
  .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|a/g, `𝑎`)
  .replace(/b/g, `𝑏`)
  .replace(/c/g, `𝑐`)
  .replace(/d|đ/g, `𝑑`)
  .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|e/g, `𝑒`)
  .replace(/f/g, `𝑓`)
  .replace(/g/g, `𝑔`)
  .replace(/h/g, `ℎ`)
  .replace(/i/g, `𝑖`)
  .replace(/ì|í|ị|ỉ|ĩ|i/g, `𝑗`)
  .replace(/k/g, `𝑘`)
  .replace(/l/g, `𝑙`)
  .replace(/m/g, `𝑚`)
  .replace(/n/g, `𝑛`)
  .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|o/g, `𝑜`)
  .replace(/p/g, `𝑝`)
  .replace(/q/g, `𝑞`)
  .replace(/r/g, `𝑟`)
  .replace(/s/g, `𝑠`)
  .replace(/t/g, `𝑡`)
  .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|u/g, `𝑢`)
  .replace(/v/g, `𝑣`)
  .replace(/x/g, `𝑥` )
  .replace(/ỳ|ý|ỵ|ỷ|ỹ|y/g, `𝑦`)
  .replace(/w/g, `𝑤`)
  .replace(/z/g, `𝑧`)
  .replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
  var arr = text.replace("\n", "").split("\n").filter(item => item.length != 0);
  var num = (arr.length/6)-1;
  var main = arr.slice(0,6);
  var extra = arr.splice(6);
  var msg = "";
  var mainlength = main.length;
  for(let i = 0; i < mainlength; i++) {
    var txt = main[i];
    for(let o = 0; o < num; o++) {
      txt += extra[i+(o*6)];
    }
    msg += txt+"\n";
  }
  return api.sendMessage(msg+"", event.threadID, event.messageID);
}