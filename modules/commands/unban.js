module.exports.config = {
    name: "unban",
    version: "2.0.0",
    hasPermssion: 0,
    credits: "NTKhang & Editor BY DuyVuongUwU",
    description: "Cảnh cáo thành viên  đủ 3 lần sẽ ban khỏi nhóm (nhớ set qtv cho bot nha)\nAuthor: NTKhang",
    commandCategory: "group",
    usages: "[args]",
    cooldowns: 5
};

module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    let {messageID, threadID, senderID} = event;
    var info = await api.getThreadInfo(threadID);
    const out = msg => api.sendMessage(msg, threadID, messageID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return out(`Bot không có quyền để sử dụng lệnh này.`);
    var fs = require("fs-extra");
    
    if (!fs.existsSync(__dirname + `/cache/databan.json`)) {
            const dataaa = {bans: {}, banned: {}};
            fs.writeFileSync(__dirname + `/cache/databan.json`, JSON.stringify(dataaa));
                    }
  var databan = JSON.parse(fs.readFileSync(__dirname + `/cache/databan.json`)); //đọc nội dung file
  if(!databan.bans.hasOwnProperty(threadID)) {
            databan.bans[threadID] = {}; 
            fs.writeFileSync(__dirname + `/cache/databan.json`, JSON.stringify(databan, null, 2));
    
  }
  var id = parseInt(args[0]), mybox = databan.banned[threadID];
  var info = await api.getThreadInfo(threadID);
  if (!info.adminIDs.some(item => item.id == senderID) && !(global.config.ADMINBOT).includes(senderID)) return out(`Chỉ có quản trị viên mới có thể sử dụng được lệnh này.`);
  if(!id) return out(`Nhập uid người cần được unban.`);
  databan.banned;
  var name = (await api.getUserInfo(id))[id].name
  if(!mybox.includes(id)) return out(`${name} chưa bị ban khỏi nhóm.`);
  out(`${name} đã được vào lại nhóm.`);
  mybox.splice(mybox.indexOf(id), 1);
  delete databan.bans[threadID][id]
  fs.writeFileSync(__dirname + `/cache/databan.json`, JSON.stringify(databan, null, 2));
}