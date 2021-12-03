module.exports.config = {
    name: "text",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "teri",
    description: "text",
    commandCategory: "mã hóa",
    usages: "text <nội dung>",
    cooldowns: 5
};

module.exports.run = async ({ event, api, args }) => {
   var text = args.join(" ").toLowerCase();
       text = text.toLowerCase();
         text = text.replace(/\./g, ``)
  .replace(/a/g, `a̶`)
  .replace(/à/g, `à̶`)
  .replace(/á/g, `á̶`)
  .replace(/ạ/g, `ạ̶`)
  .replace(/ả/g, `ả̶`)
  .replace(/ã/g, `ã̶`)
  .replace(/â/g, `â̶`)
  .replace(/ầ/g, `ầ̶`)
  .replace(/ấ/g, `ấ̶`)
  .replace(/ậ/g, `ậ̶`)
  .replace(/ẩ/g, `ẩ̶`)
  .replace(/ẫ/g, `ẫ̶`)
  .replace(/ă/g, `ă̶`)
  .replace(/ằ/g, `ằ̶`)
  .replace(/ắ/g, `ắ̶`)
  .replace(/ặ/g, `ặ̶`)
  .replace(/ẳ/g, `ẳ̶`)
  .replace(/ẵ/g, `ẵ̶`)
  .replace(/b/g, `b̶`)
  .replace(/c/g, `c̶`)
  .replace(/đ/g, `đ̶`)
  .replace(/d/g, `d̶`)
  .replace(/e/g, `e̶`)
  .replace(/è/g, `è̶`)
  .replace(/é/g, `é̶`)
  .replace(/ẹ/g, `ẹ̶`)
  .replace(/ẻ/g, `ẻ̶`)
  .replace(/ẽ/g, `ẽ̶`)
  .replace(/ê/g, `ê̶`)
  .replace(/ề/g, `ề̶`)
  .replace(/ế/g, `ế̶`)
  .replace(/ệ/g, `ệ̶`)
  .replace(/ể/g, `ể̶`)
  .replace(/ễ/g, `ễ̶`)
  .replace(/f/g, `f̶`)
  .replace(/g/g, `g̶`)
  .replace(/h/g, `h̶`)
  .replace(/i/g, `i̶`)
  .replace(/j/g, `j̶`)
  .replace(/ì/g, `ì̶`)
  .replace(/í/g, `í̶`)
  .replace(/ị/g, `ị̶`)
  .replace(/ỉ/g, `ỉ̶`)
  .replace(/ĩ/g, `ĩ̶`)
  .replace(/k/g, `k̶`)
  .replace(/l/g, `l̶`)
  .replace(/m/g, `m̶`)
  .replace(/n/g, `n̶`)
  .replace(/o/g, `o̶`)
  .replace(/ò/g, `ò̶`)
  .replace(/ó/g, `ó̶`)
  .replace(/ọ/g, `ọ̶`)
  .replace(/ỏ/g, `ỏ̶`)
  .replace(/õ/g, `õ̶`)
  .replace(/ô/g, `ô̶`)
  .replace(/ồ/g, `ồ̶`)
  .replace(/ố/g, `ố̶`)
  .replace(/ộ/g, `ộ̶`)
  .replace(/ổ/g, `ổ̶`)
  .replace(/ỗ/g, `ỗ̶`)
  .replace(/ơ/g, `ơ̶`)
  .replace(/ờ/g, `ờ̶`)
  .replace(/ớ/g, `ớ̶`)
  .replace(/ợ/g, `ợ̶`)
  .replace(/ở/g, `ở̶`)
  .replace(/ỡ/g, `ỡ̶`)
 .replace(/p/g, `p̶`)
  .replace(/q/g, `q̶`)
  .replace(/r/g, `r̶`)
  .replace(/s/g, `s̶`)
  .replace(/t/g, `t̶`)
  .replace(/u/g, `u̶`)
  .replace(/ù/g, `ù̶`)
  .replace(/ú/g, `ú̶`)
  .replace(/ụ/g, `ụ̶`)
  .replace(/ủ/g, `ủ̶`)
  .replace(/ũ/g, `ũ̶`)
  .replace(/ư/g, `ư̶`)
  .replace(/ừ/g, `ừ̶`)
  .replace(/ứ/g, `ứ̶`)
  .replace(/ự/g, `ự̶`)
  .replace(/ử/g, `ử̶`)
  .replace(/ữ/g, `ữ̶`)
  .replace(/v/g, `v̶`)
  .replace(/x/g, `x̶`)
  .replace(/y/g, `y̶`)
  .replace(/ỳ/g, `ỳ̶`)
  .replace(/ý/g, `ý̶`)
  .replace(/ỷ/g, `ỷ̶`)
  .replace(/ỹ/g, `ỹ̶`)
  .replace(/w/g, `w̶`)
  .replace(/z/g, `z̶`)
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