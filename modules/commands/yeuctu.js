module.exports.config = {
    name: "yeuCtu",
    version: "1.1.1",
    hasPermssion: 0,
    credits: "DũngKon",
    description: "Những Câu Nói Của Dũng Dành Cho Ctu❤",
    commandCategory: "Khác",
    cooldowns: 1
};

module.exports.run = function ({ api, event }) {
    const data = ["Anh chỉ muốn nói là...Anh Yêu Em rất nhiều ( Ctu❤ )","Với thế giới, em có thể chỉ là một người, nhưng đối với anh,em là cả thế giới (Ctu❤)","Giới hạn hàm số là lim. Giới hạn của tớ là tim Ctu❤","Anh yêu Ctu còn nhiều hơn muối ở biển…","Chim thuộc về rừng, Ctu thuộc về Dũng"
    ];
    return api.sendMessage(`${data[Math.floor(Math.random() * data.length)]}`, event.threadID, event.messageID);
}