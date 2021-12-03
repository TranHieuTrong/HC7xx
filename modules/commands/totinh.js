module.exports.config = {
    name: "totinhvg",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "Mod Syn Credit(lụm)",
    description: "Tỏ tình theo cách đáng iu :3 <3",
    commandCategory: "group",
    usages: "totinh @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn tỏ tình", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Để tao tỏ tình nó hộ mày nha <3 :3");
setTimeout(() => {a({body: "Chào iem anh đứng đây từ sáng đến tối" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "Tự dưng anh gặp được em :3" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "Em đẹp quá, em xinh quá anh muốn được làm quen :3" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "Anh đã iu ebe từ cái nhìn đâu tiên :<" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "Tiếng sét ái tình đã xiên qua anh làm trái tim anh khét lẹt :v" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "Nhưng mà không sao" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "Vì yêu em, anh bất tử" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "Anh sẽ gọi em là em bé" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "Anh sẽ chiều chuộng em bé, cho em bé ăn cho em bé ngủ :3" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "Anh sẽ hôn lên trán em và bảo rằng anh yêu bbi của anh rất nhiều" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "BBi ở chung với anh, anh sẽ yêu chiều em rất nhiều" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "Thực sự anh rất yêu em <3" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "BBi làm anh thao thức nao nức đến nỗi ăn không ngon ngủ không yên" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "Anh sẽ làm osin cho công chúa của anh suốt cuộc đời" + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "Chờ anh một chút nhé bbi :3, anh nhớ em rồi lấy ảnh em ra ngắm cái" + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "Oce rồi vợ anh vẫn rất xinh tươi :3" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "Anh yêu em rất nhiều <3" + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "Bây giờ anh chỉ yêu mình em thôi :3" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "Tương lai không biết được nhưng bây giờ anh chỉ có mình em bé mà thôi ^^" + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "Anh muốn tương lai của anh với em ở bên nhau" + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a("Nói nhiều anh cũng hơi mệt chút xíu rùi")} , 90000);
setTimeout(() => {a({body: "Chốt lại nhẹ nhàng thôi :3" + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: "Anh yêu em bé rất nhiều moaaaa :3" + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: "BBi làm người yêu anh nhé <3" + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a("=)) anh trap em đấy lewlew ")} , 110000);


  
  }