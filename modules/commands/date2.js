module.exports.config = {

  name: "date", version: "1.0.0", 

  hasPermssion: 0,

  credits: "NTKhang",

  description: "Xem lịch", 

  commandCategory: "Other",

  usages: "date",

  cooldowns: 5, 



};

module.exports.run = async function({ api, Users, Threads, event, __GLOBAL }) {
  //lấy ca dao từ api
  const axios = require("axios");
var data = (await axios.get("http://le31.glitch.me/poem")).data;
  //câu ca dao
  var cadao = data.data
  //ngày giờ
  const moment = require('moment-timezone');
    var ngay = moment.tz('Asia/Ho_Chi_Minh').format('D/MM/YYYY');
    var gio = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss');
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  //âm lịch (chưa có :))
  if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ Hai'
  if (thu == 'Tuesday') thu = 'Thứ Ba'
  if (thu == 'Wednesday') thu = 'Thứ Tư'
  if (thu == "Thursday") thu = 'Thứ Năm'
  if (thu == 'Friday') thu = 'Thứ Sáu'
  if (thu == 'Saturday') thu = 'Thứ Bảy'
return api.sendMessage(`📅 Ngày: ${ngay} (${thu})\n⏰Giờ: ${gio}\n\nCa dao: ${cadao}..`, event.threadID, event.messageID);



}