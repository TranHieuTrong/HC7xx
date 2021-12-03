module.exports.config = {
    name: "joker",
    version: "0.0.1",
    hasPermssion: 0,
    credits: "DinhPhuc",
    description: "Những Câu Nói Của Joker",
    commandCategory: "Khác",
    cooldowns: 5
};

module.exports.run = function ({ api, event }) {
    const data = ["Nếu mày giỏi việc gì đừng bao giờ làm miễn phí.",

    "Họ cười tao vì tao không giống họ Tao cười họ vì họ quá giống nhau.",

    "Không quan trọng mày là ai đừng mất công thanh minh, những gì mày đang làm sẽ định nghĩa con người mày.",

    "Cách hợp lí nhất để sống trong thế giới này đó là phá bỏ những nguyên tắc.",

    "Tao tin rằng những gì không thể giết chết được mày sẽ làm mày khác biệt hơn.",

    "Nếu mày phải giải thích trò đùa, thì sẽ không có trò đùa nào hết!",

    "Tao đâu có bị điên, tao chỉ tỉnh táo khác bọn mày thôi.",

    "Sao phải nghiêm túc vậy chứ?!",

    "Cười không chỉ để che giấu đi nỗi buồn, cười còn là để che giấu đi sự khinh bỉ.",

    "Chúng ta đang sống trong một thế giới của những kẻ đạo đức giả, nơi mọi người cầu nguyện cho sự thất bại của mày, nhưng lại cười với mày như thể yêu mày cùng một lúc.",

    "Tao từng nghĩ rằng cuộc đời mình là một bi kịch, nhưng giờ tao nhận ra, đó là một vở hài kịch.",

    "Điều đó có làm mày chán nản không? Để biết mày thực sự cô đơn đến mức nào?",

    "Có những thời điểm, sai lầm của mày được coi là trò đùa. Nhưng khi không đúng thời điểm, ngay cả những trò đùa của mày cũng bị coi là sai lầm.",

    "Nếu mày không thích tao, hãy lấy một chiếc xe hơi. Lái xe xuống địa ngục. Chúc mày có một chuyến đi vui vẻ.",

    "Hãy mỉm cười, vì nó sẽ khiến người khác bối rối. Bởi vì nó dễ dàng hơn là giải thích những gì đang giết chết mày bên trong.",

    "Đôi khi mày phải đóng vai một kẻ ngốc để đánh lừa kẻ ngốc nghĩ rằng họ đang lừa mày.",

    "Mày thấy đấy, trong những giây phút cuối cùng, con người sẽ cho mày thấy bản chất thực sự của chúng.",

    "Cùng tạo một nụ cười trên khuôn mặt này nào!",

    "Nếu ai đó ghét mày mà không có lý do gì, hãy cho hắn một lý do.",

    "Một ngày nào đó ai đó sẽ cho mày một cú tồi tệ đến mức mày sẽ trở nên không thể chịu tổn thương nữa.",

    "Dù trong hoàn cảnh nào, hãy luôn nở một nụ cười.",

    "Mọi người muốn nhìn thấy mày thất bại. Hãy làm họ thất vọng.",

    "Mày sẽ không bao giờ thành công nếu mày quan tâm đến những gì người khác nghĩ.",

    "Mày sẽ không bao giờ hiểu được tổn thương mà mày đã gây ra cho ai đó cho đến khi điều tương tự xảy ra với mày.",

    "Một số người mang khuôn mặt vui vẻ để che giấu nỗi đau và một số người mang khuôn mặt đáng thương để làm tổn thương người khác.",

    "Đứng một mình không có nghĩa là tao đơn độc mà có nghĩa là tao đủ mạnh mẽ để tự mình giải quyết mọi việc.",

    "Giả vờ hạnh phúc khi mày đang chịu tổn thương, điều đó được gọi là đối phó với điều tồi tệ và duy trì sự mạnh mẽ.",

    "Cuộc sống là một người thầy tuyệt vời đến nỗi khi mày không học được một bài học nào đó, nó sẽ lặp lại điều đó để dạy mày.",

    "Không ai ở bên mày vĩnh viễn, hãy học cách tồn tại một mình.",

    "Thời buổi bây giờ, mày chẳng thể dựa vào ai khác ngoài chính mình.",

    "Need Not To Know."

    ];
    return api.sendMessage(`${data[Math.floor(Math.random() * data.length)]}`, event.threadID, event.messageID);
}