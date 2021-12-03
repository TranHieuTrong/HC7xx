module.exports.config = {
  name: "chemeb", // Tên lệnh, được sử dụng trong việc gọi lệnh
  version: "1.0.0", // phiên bản của module này
  hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
  credits: "BerVer", // Công nhận module sở hữu là ai
  description: "Cân bằng phương trình với tốc độ nhanh hơn người yêu cũ trở mặt", // Thông tin chi tiết về lệnh
  commandCategory: "general", // Thuộc vào nhóm nào
  usages: "chemeb [Phương trình]", // Cách sử dụng lệnh
  cooldowns: 5, // Thời gian một người có thể lặp lại lệnh
  dependencies: {
    "chem-eb": ""
  }, //Liệt kê các package module ở ngoài tại đây để khi load lệnh nó sẽ tự động cài!
  // Info là phần chi tiết thêm của cách sử dụng lệnh
  // Key: Từ khoá thuộc trong usages
  // prompt: Chi tiết dữ liệu đầu vào của key
  // type: Định dạng dữ liệu đầu vào của key
  // example: Ví dụ ¯\_(ツ)_/¯ 
  info: [
    {
      key: 'Phương trình',
      prompt: 'Nhập phương trình',
      type: 'Văn Bản',
      example: 'chemeb H2+O2=H2O'
    },
  ],
  envConfig: {
    //Đây là nơi bạn sẽ setup toàn bộ env của module, chẳng hạn APIKEY, ...
  }
};
module.exports.run = function({ api, event, args, client, __GLOBAL }) {
  //Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯ 
    const chemeb = global.nodemodule["chem-eb"];
//     if (event.type != "message_reply") {
//         var msg = event.messageReply.body;
//         console.log(event.messageReply.body)
//         if (msg.includes('(') && msg.includes(')')) return api.sendMessage(getText('notSupportXYz'), event.threadID, event.messageID);
//         var balanced = chemeb(msg);
//         return api.sendMessage(`=> ${balanced.outChem}`, event.threadID, event.messageID);
//     }
// else
    var msg = args.join(" ");
    if (msg.includes('(') && msg.includes(')')) return api.sendMessage(getText('notSupportXYz'), event.threadID, event.messageID);
    var balanced = chemeb(msg);
    return api.sendMessage(`=> ${balanced.outChem}`, event.threadID, event.messageID);
}