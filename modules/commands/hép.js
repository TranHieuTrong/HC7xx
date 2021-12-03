module.exports.config = {
  name: "help",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hoàng",
  description: "help đó",
  commandCategory: "Help",
  usages: "help",
  cooldowns: 1,
  dependencies: {}
};

module.exports.run = async({ api, event, client, global, Currencies }) => {
   var job = [ 'có thể bạn đã biết', 'tôi là bot', 'tôi khôn hơn bạn đó', 'bây giờ bạn đã biết bot này không có help', 'help là một thứ vô dụng','help con cặc','đéo có help đâu','help đổi thành menu rồi','dùng /menu đi','help help cái lồn','bạn ngu vãi lồn','bucu tao đi rồi có help','BUỒI','help cái đéo gì help lắm','Admin bot có tên là Dũng và bán Follow dạo','admin bot bán follow dạo','NGU','show vú đi rồi cho xem help','show lồn đi rồi cho xem help' ];
    api.sendMessage(`[có thế bạn chưa biết]: ` + job[Math.floor(Math.random() * job.length)] , event.threadID, event.messageID);
  };

  