module.exports.config = {
  name: "dns", // Tên lệnh, được sử dụng trong việc gọi lệnh
  version: "1.0.0", // phiên bản của module này
  hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
  credits: "BerVer", // Công nhận module sở hữu là ai
  description: "Kiểm tra dns", // Thông tin chi tiết về lệnh
  commandCategory: "group", // Thuộc vào nhóm nào
  usages: "dns [domain]", // Cách sử dụng lệnh
  cooldowns: 5, // Thời gian một người có thể lặp lại lệnh
  dependencies: {
    "dns": ""
  }, //Liệt kê các package module ở ngoài tại đây để khi load lệnh nó sẽ tự động cài!
  // Info là phần chi tiết thêm của cách sử dụng lệnh
  // Key: Từ khoá thuộc trong usages
  // prompt: Chi tiết dữ liệu đầu vào của key
  // type: Định dạng dữ liệu đầu vào của key
  // example: Ví dụ ¯\_(ツ)_/¯ 
  info: [
    {
      key: 'domain',
      prompt: 'nhập tên miền cânf loonkup',
      type: 'Văn Bản',
      example: 'dns berver.tech'
    }
      ],
  envConfig: {
    //Đây là nơi bạn sẽ setup toàn bộ env của module, chẳng hạn APIKEY, ...
  }
};
module.exports.run = function({ api, event, args, client, __GLOBAL }) {
  //Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯ 
  // Accessing dns module 
const dns = global.nodemodule['dns']; 

// Setting options for dns.lookup() 
// method, all as true 
const options = { 
  all:true, 
}; 

// Calling dns.lookup() for hostname
// geeksforgeeks.org and displaying 
// them in console as a callback 
var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
var a =args.join()
return dns.lookup(a, options, (err, addresses) => 
 out(addresses))
}