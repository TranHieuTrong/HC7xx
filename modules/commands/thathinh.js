var fs = require("fs");
module.exports.config = {
	name: "thathinh",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Long LTD",
	description: "Những câu thả thính ngọt ngào nhất từ Admin deeptry <3 hihi",
	commandCategory: "group",
	usages: "[tán gái chứ k chơi gay]",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	var sentenses = [
		{
			body: "Điều ngọt ngào nhất",
			attachment: fs.createReadStream("./modules/commands/voice/dieungotngao.mp3")
		},
		{
			body: "Em ơi gió lạnh gần kề",
			attachment: fs.createReadStream("./modules/commands/voice/giolanh.mp3")
		},
		{
			body: "Em là cô gái có trái tim màu đỏ",
			attachment: fs.createReadStream("./modules/commands/voice/emlacogai.mp3")
		},
		{
			body: "Em là nơi bình yên nhất",
			attachment: fs.createReadStream("./modules/commands/voice/binhyen.mp3")
		},
		{
			body: "Hoa Hướng Dương là biểu tượng của Mặt Trời đó",
			attachment: fs.createReadStream("./modules/commands/voice/hoahuongduong.mp3")
		},
		{
			body: "Toán hình được 2",
			attachment: fs.createReadStream("./modules/commands/voice/hoctoanhinh.mp3")
		},
		{
			body: "Em đi đứng làm sao",
			attachment: fs.createReadStream("./modules/commands/voice/hoiemdidung.mp3")
		},
		{
			body: "Kim là phải có chỉ nhaaa",
			attachment: fs.createReadStream("./modules/commands/voice/kimvoichi.mp3")
		},
		{
			body: "Anh là con người đảm đang ~",
			attachment: fs.createReadStream("./modules/commands/voice/naucom.mp3")
		},
		{
			body: "Làm gì có bồ đâu",
			attachment: fs.createReadStream("./modules/commands/voice/nangdacomu.mp3")
		},
		{
			body: "Nuôi cá và trồng thêm rau",
			attachment: fs.createReadStream("./modules/commands/voice/nhangian.mp3")
		},
		{
			body: "Sao em xinh thế?",
			attachment: fs.createReadStream("./modules/commands/voice/nhinem.mp3")
		},
		{
			body: "Rượu ngon quên đi muộn sầu",
			attachment: fs.createReadStream("./modules/commands/voice/ruoungon.mp3")
		},
		{
			body: "1 vòng trái đất anh gặp em",
			attachment: fs.createReadStream("./modules/commands/voice/traidathinhtron.mp3")
		},

	];
	api.sendMessage(sentenses[Math.floor(Math.random() * parseInt(sentenses.length))], event.threadID, event.messageID);
}