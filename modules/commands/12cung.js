const fs = require("fs");
module.exports.config = {
	name: "12 cung hoàng đạo",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Long LTD", 
	description: "no prefix",
	commandCategory: "không cần dấu lệnh",
	usages: "12 cung hoàng đạo",
    cooldowns: 5, 
};

module.exports.handleReply = async function({ api, event, handleReply }) {
	console.log("tét");
	switch(event.body){
		case "1":
			api.sendMessage({
				body: "1. Ma Kết♑️( 22/12 – 19/1 )\n\nCon số may mắn trong ngày: 26, 89 (Tình cảm: Ma Kết luôn biện minh cho sự ngu dốt của mình vì vậy bạn đang vướng phải một số vấn đề nhỏ.Công việc: Bạn mất nhiều thời gian để cân bằng lại giữa công việc và tình cảm.Tiền bạc: Cung hoàng đạo này hiếm khi có tiền tiết kiệm).", 
				attachment: fs.createReadStream(__dirname + `/cache/maket.png`)
			}, event.threadID, event.messageID);
			break;
		case "2":
			api.sendMessage({
				body: "\n2. Bảo Bình♒️( 20/1 – 18/2 )\n\nCon số may mắn trong ngày: 10, 78 (Tình cảm: Bảo Bình không muốn làm người khác mất mặt nên bạn đã chuẩn bị hết tâm lý từ ban đầu rồi.Công việc: Đừng vội trách cứ ai trong lúc này, bạn sẽ không biết đối diện với cấp trên ra sao đâu.Tiền bạc: Ai cũng cần tiền cả nên có vay phải có trả nhé).", 
				attachment: fs.createReadStream(__dirname + `/cache/baobinh.png`)
			}, event.threadID, event.messageID);
			break;
		case "3":
			api.sendMessage({
				body: "3. Song Ngư♓️( 19/2 – 20/3 )\n\nCon số may mắn trong ngày: 22, 78 (Tình cảm: Song Ngư và người ấy không có sự thấu hiểu lẫn nhau nên lúc nào bạn cũng là người gây sự trước.Công việc: Trong công việc, nếu không muốn bị người khác để ý hãy làm tốt công việc của mình là được.Tiền bạc: Tạm thời đừng đầu tư bất cứ khoản gì nhé).", 
				attachment: fs.createReadStream(__dirname + `/cache/songngu.png`)
			}, event.threadID, event.messageID); 
			break;
		case "4":
			api.sendMessage({
				body: "4. Bạch Dương♈️( 21/3 – 19/4 )\n\nCon số may mắn trong ngày: 23, 56 (Tình cảm: Bạch Dương không có cách nào làm cho người ấy yêu mình trở lại được nên bạn cảm thấy rất bất mãn.Công việc: Cung hoàng đạo này không muốn bị người khác bắt thóp nên bạn đã chọn cách lừa đồng nghiệp.Tiền bạc: Hãy chi tiêu cho những việc thật sự cần thiết thay vì chi tiêu hoang phí như bây giờ nhé).", 
				attachment: fs.createReadStream(__dirname + `/cache/bachduong.png`)
			}, event.threadID, event.messageID); 
			break;
		case "5":
			api.sendMessage({
				body: "5. Kim Ngưu♉️( 20/4 – 20/5 )\n\nCon số may mắn trong ngày: 11, 67 (Tình cảm: Kim Ngưu thông minh nhạy bén bình thường đang bị lu mờ dần do một số thế lực từ gia đình của bạn.Công việc: Trong công việc, Kim Ngưu là người không có tiếng nói, bởi vậy bạn rất hay bị bắt nạt.Tiền bạc: Dù bạn có cẩn thận đến mấy cũng bị người khác lừa tiền mà thôi).", 
				attachment: fs.createReadStream(__dirname + `/cache/kimnguu.png`)
			}, event.threadID, event.messageID); 
			break;
		case "6":
			api.sendMessage({
				body: "6. Song Tử♊️( 21/5 – 21/6 )\n\nCon số may mắn trong ngày: 70, 99 (Tình cảm: Song Tử bị Sao Kim làm khó trong chuyện tình cảm nên dù có cố gắng đến mấy cũng không có được tình cảm của người khác.Công việc: Hôm nay chỉ vì những lời nói trong lúc xúc động mà cung hoàng đạo này đã khiến cho cấp dưới hiểu nhầm.Tiền bạc: Song Tử không muốn người khác vay tiền).", 
				attachment: fs.createReadStream(__dirname + `/cache/songtu.png`)
			}, event.threadID, event.messageID); 
			break;
		case "7":
			api.sendMessage({
				body: "7. Cự Giải♋️( 22/6 – 22/7)\n\nCon số may mắn trong ngày: 31, 68 (Tình cảm: Cự Giải vẫn bình yên sau những cơn sóng lớn mà không cần sợ một thể lực nào quấy phá cả.Công việc: Trong công việc, bạn không quá nhiệt tình nên cấp trên cũng đánh giá thấp sự chủ động của bạn.Tiền bạc: Cự Giải không muốn trả tiền người khác mà bạn chỉ muốn tiêu thôi).", 
				attachment: fs.createReadStream(__dirname + `/cache/cugiai.png`)
			}, event.threadID, event.messageID); 
			break;
		case "8":
			api.sendMessage({
				body: "8. Sư tử♌️( 24/7 – 22/8 )\n\nCon số may mắn trong ngày: 14, 88 (Tình cảm: Sư Tử trong ngày hôm nay cần tránh tiếp xúc với những người mới quen vì có thể họ sẽ đem lại nhiều bất lợi cho bạn đấy.Công việc: Trong công việc, Sư Tử đang dần làm quen với việc phải được và mất gì khi mình không lựa chọn đúng.Tiền bạc: Trong chuyện tiền bạc, cung hoàng đạo này khá sòng phẳng nên ai cũng thoải mái với bạn).", 
				attachment: fs.createReadStream(__dirname + `/cache/sutu.png`)
			}, event.threadID, event.messageID); 
			break;
		case "9":
			api.sendMessage({
				body: "9. Xử Nữ♍️( 24/8 – 22/9 )\n\nCon số may mắn trong ngày: 25, 90 (Tình cảm: Xử Nữ ngày càng mạnh mẽ là nhờ có Thường Cương tiếp sức.Công việc: Cung hoàng đạo này khá thông minh khi liên tục lựa chọn những phần việc phù hợp với mình.Tiền bạc: Xử Nữ quá tiết kiệm và không dám chi tiêu gì cho bản thân).", 
				attachment: fs.createReadStream(__dirname + `/cache/xunu.png`)
			}, event.threadID, event.messageID); 
			break;
		case "10":
			api.sendMessage({
				body: "10. Thiên Bình♎️( 23/9 – 22/10 )\n\nCon số may mắn trong ngày: 22, 45 (Tình cảm: Thiên Bình một khi đã dứt khoát trong chuyện tình cảm thì bạn sẽ không dính líu thêm một chút nào nữa.Công việc: Thiên Bình mong muốn những dự định của mình được thuận lợi.Tiền bạc: Cung hoàng đạo này biết chi tiêu tiết kiệm nên cũng có một khoản kha khá).", 
				attachment: fs.createReadStream(__dirname + `/cache/thienbinh.png`)
			}, event.threadID, event.messageID); 
			break;
		case "11":
			api.sendMessage({
				body: "11. Bọ Cạp♏️( 24/11 – 21/11 )\n\nCon số may mắn trong ngày: 34, 89 (Tình cảm: Bọ Cạp không muốn người khác hiểu nhầm về mối quan hệ của mình và người ấy nên bạn liên tục có những hành động rất khó hiểu.Công việc: Bọ Cạp không cần phải tỏ ra đáng thương đâu vì bạn làm gì cũng không che được mắt cấp trên đâu.Tiền bạc: Cung hoàng đạo này rất suy tính trong việc chi tiêu).", 
				attachment: fs.createReadStream(__dirname + `/cache/bocap.png`)
			}, event.threadID, event.messageID); 
			break;
		case "12":
			api.sendMessage({
				body: "12. Nhân Mã♐️( 22/11 – 21/12 )\n\nCon số may mắn trong ngày: 25, 60 (Tình cảm: Nhân Mã hôm nay rất thiếu suy nghĩ khi liên tục tin tưởng người ấy vượt qua rào cản với mình và có cuộc sống mới.Công việc: Chòm sao này rất mệt mỏi khi phải làm những chuyện trái với đạo đức nghề nghiệp.Tiền bạc: Nhân Mã không nên chi tiêu bừa bãi trong thời điểm này).", 
				attachment: fs.createReadStream(__dirname + `/cache/nhanma.png`)
			}, event.threadID, event.messageID); 
			break;
		default:
	}
}

module.exports.handleEvent = function({ api, event}) {
	if (event.body.indexOf("12 cung hoàng đạo")==0 || (event.body.indexOf("cung")==0)) {
		api.sendMessage({
			body: "==== 12 CUNG HOÀNG ĐẠO ====\n 1. Ma Kết ♑️\n 2. Bảo Bình ♒️\n 3. Song Ngư ♓️\n 4. Bạch Dương ♈️\n 5.  Kim Ngưu ♉️\n 6. Song Tử ♊️\n 7. Cự Giải ♋️\n 8. Sư tử ♌️\n 9. Xử Nữ ♍️\n10. Thiên Bìn h♎️\n11. Bọ Cạp ♏️\n12. Nhân Mã ♐️\n\nReply tin nhắn theo số để xem thêm về từng con giáp <3",
			//attachment: fs.createReadStream(__dirname + `/cache/12cung.jpeg`)
		}, event.threadID, (error, info) => global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: event.senderID}), event.messageID);
	}
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

}