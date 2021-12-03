module.exports.config = {
    name: "yeuduong",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Yuuki",
    description: "hê",
    commandCategory: "Lyrics",
    cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`YÊU ĐƯƠNG CON CẶC BỐ MẸ Ở NHÀ CÒNG LƯNG NUÔI ĐI HỌC, CON VỚI CHẢ CÁI MẤT DẠY VÃI LỒN =))`, event.threadID, event.messageID);