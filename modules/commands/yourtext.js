module.exports.config = {
    name: "yourtext",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "teri",
    description: "text",
    commandCategory: "mã hóa",
    usages: "yourtext <nội dung>",
    cooldowns: 5
};

module.exports.run = async ({ event, api, args }) => {
   var text = args.join(" ").toLowerCase();
       text = text.toLowerCase();
         text = text.replace(/\./g, ``)
  .replace(/a/g, `ɐ`)
  .replace(/à/g, `à`)
  .replace(/á/g, `á`)
  .replace(/ạ/g, `ạ`)
  .replace(/ả/g, `ả`)
  .replace(/ã/g, `ã`)
  .replace(/â/g, `â`)
  .replace(/ầ/g, `ầ`)
  .replace(/ấ/g, `ấ`)
  .replace(/ậ/g, `ậ`)
  .replace(/ẩ/g, `ẩ`)
  .replace(/ẫ/g, `ẫ`)
  .replace(/ă/g, `ă`)
  .replace(/ằ/g, `ằ`)
  .replace(/ắ/g, `ắ`)
  .replace(/ặ/g, `ặ`)
  .replace(/ẳ/g, `ẳ`)
  .replace(/ẵ/g, `ẵ`)
  .replace(/b/g, `q`)
  .replace(/c/g, `ɔ`)
  .replace(/đ/g, `đ`)
  .replace(/d/g, `p`)
  .replace(/e/g, `ǝ`)
  .replace(/è/g, `è`)
  .replace(/é/g, `é`)
  .replace(/ẹ/g, `ẹ`)
  .replace(/ẻ/g, `ẻ`)
  .replace(/ẽ/g, `ẽ`)
  .replace(/ê/g, `ê`)
  .replace(/ề/g, `ề`)
  .replace(/ế/g, `ế`)
  .replace(/ệ/g, `ệ`)
  .replace(/ể/g, `ể`)
  .replace(/ễ/g, `ễ`)
  .replace(/f/g, `ɟ`)
  .replace(/g/g, `ƃ`)
  .replace(/h/g, `g̶`)
  .replace(/i/g, `ı`)
  .replace(/j/g, `ɾ`)
  .replace(/ì/g, `ì`)
  .replace(/í/g, `í`)
  .replace(/ị/g, `ị`)
  .replace(/ỉ/g, `ỉ`)
  .replace(/ĩ/g, `ĩ`)
  .replace(/k/g, `ʞ`)
  .replace(/l/g, `l`)
  .replace(/m/g, `ɯ`)
  .replace(/n/g, `u`)
  .replace(/o/g, `o`)
  .replace(/ò/g, `ò`)
  .replace(/ó/g, `ó`)
  .replace(/ọ/g, `ọ`)
  .replace(/ỏ/g, `ỏ`)
  .replace(/õ/g, `õ`)
  .replace(/ô/g, `ô`)
  .replace(/ồ/g, `ồ`)
  .replace(/ố/g, `ố`)
  .replace(/ộ/g, `ộ`)
  .replace(/ổ/g, `ổ`)
  .replace(/ỗ/g, `ỗ`)
  .replace(/ơ/g, `ơ`)
  .replace(/ờ/g, `ờ`)
  .replace(/ớ/g, `ớ`)
  .replace(/ợ/g, `ợ`)
  .replace(/ở/g, `ở`)
  .replace(/ỡ/g, `ỡ`)
 .replace(/p/g, `d`)
  .replace(/q/g, `b`)
  .replace(/r/g, `ɹ`)
  .replace(/s/g, `s`)
  .replace(/t/g, `ʇ`)
  .replace(/u/g, `n`)
  .replace(/ù/g, `ù`)
  .replace(/ú/g, `ú`)
  .replace(/ụ/g, `ụ`)
  .replace(/ủ/g, `ủ`)
  .replace(/ũ/g, `ũ`)
  .replace(/ư/g, `ư`)
  .replace(/ừ/g, `ừ`)
  .replace(/ứ/g, `ứ`)
  .replace(/ự/g, `ự`)
  .replace(/ử/g, `ử`)
  .replace(/ữ/g, `ữ`)
  .replace(/v/g, `ʌ`)
  .replace(/x/g, `x`)
  .replace(/y/g, `ʎ`)
  .replace(/ỳ/g, `ỳ`)
  .replace(/ý/g, `ý`)
  .replace(/ỷ/g, `ỷ`)
  .replace(/ỹ/g, `ỹ`)
  .replace(/w/g, `ʍ`)
  .replace(/z/g, `z`)
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