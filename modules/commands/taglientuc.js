module.exports.config = {
    name: "taglientuc",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "VanHung & Dựa trên demo của NTKhang",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "taglientuc @mention",
    cooldowns: 90,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn gọi hồn", event.threadID);
    let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu gọi hồn!");
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 3000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 4000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 5000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 6000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 6500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 7000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 7500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 8000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 8500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 9000);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 9500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 10000);
 }