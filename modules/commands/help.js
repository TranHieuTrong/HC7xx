module.exports.config = {
 name: "help",
 version: "1.1.2",
 hasPermssion: 0,
 credits: "HelyT",
 description: "Help giống Spermbot :3",
 commandCategory: "MODULE (LỆNH)",
 usages: "[lệnh]",
 cooldowns: 1,
};
module.exports.handleEvent = function ({ api, event }) {
 const { commands } = global.client;
	
 if (!event.body) return;

 const { threadID, messageID, body } = event;

 if (body.indexOf("help") != 0) return;

 const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);


 if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;

 const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
 const command = commands.get(splitBody[1].toLowerCase());

 const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

 return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client }) {
const { commands } = global.client;
const { threadID, messageID } = event;
const command = commands.get((args[0] || "").toLowerCase());
const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
if (!command) {
const command = commands.values();
var tl = ["Có một cây gỗ dài 8m. Một bác thợ mộc muốn cưa cây gỗ đó thành những khúc gỗ dài 16dm. Biết rằng, mỗi lần cưa hết 5 phút, cưa được một khúc gỗ thì bác ấy nghỉ ngơi thêm 3 phút nữa. Hỏi bác thợ mộc cưa xong cây gỗ hết thời gian bao nhiêu phút?","Bố mẹ có 6 người con trai, mỗi người con trai có 1 em gái. Hỏi gia đình đó có bao nhiêu người?","Cái gì mà bạn có, khi bạn chia sẻ với tôi, nhưng khi bạn chia sẻ bạn sẽ không có nó?","Làm thế nào cậu bé đá quả bóng 3 mét và sau đó quả bóng trở lại với cậu bé?","Cái gì chặt không đứt, bứt không rời, phơi không khô, đốt không cháy?","Trên lông, dưới lông. Tối lồng làm một. Hỏi là gì?","Cái gì không ai đào mà sâu?","Cái gì đen khi bạn mua nó, đỏ khi dùng nó và xám xịt khi vứt nó đi?","Có hai bình rộng miệng đựng đầy nước. Làm sao để cho tất cả nước vào trong một cái chậu mà vẫn biết nước nào của bình nào (không được cho cả bình hay bất kỳ dụng cụ đựng nước nào vào chậu)?","2 con vịt đi trước 2 con vịt, 2 con vịt đi sau 2 con vịt, 2 con vịt đi giữa 2 con vịt. Hỏi có mấy con vịt?","Đố bạn có bao nhiêu chữ C trong câu sau đây: ”Cơm, canh, cháo gì tớ cũng thích ăn!","Cái gì tay trái cầm được còn tay phải có muốn cầm cũng không được?","Bàn gì mà lại bước gần bước xa?","Con mèo nào cực kỳ sợ chuột?","Cái gì có kích thước bằng con voi nhưng chẳng nặng gram nào cả?","Người ta phát hiện ra xác chết của một chàng trai treo cổ chết ở nóc nhà. Dưới chân cậu ta cách khoảng 20 cm đến sàn nhà là một vũng nước lớn. Hỏi cậu ta làm sao để có thể leo lên nóc nhà mà tự tử được?","Có 1 đàn chim đậu trên cành, người thợ săn bắn cái rằm. Hỏi chết mấy con?","Con gấu trúc ao ước gì mà không bao giờ được?","Có 1 chiếc thuyền tối đa là chỉ chở được hai người, nếu thêm người thứ 3 sẽ bị chìm ngay lập tức. Hỏi tại sao người ta trông thấy trên chiếc thuyền đó có ba anh Mỹ đen và ba anh Mỹ trắng ngồi trên chiếc thuyền đó mà không bị chìm?","Có 1 người đứng ở chân cầu. Ở giữa cầu có một con gấu rất hung dữ không cho ai qua cầu hết. Người đó sẽ mất hết 5 phút để đi từ chân cầu cho đến giữa cầu và con gấu cũng chỉ ngủ có 5 phút là tỉnh dậy. Hỏi người đó làm sao để qua được bên kia?","Ở Việt Nam, một thằng mù và ba thằng điếc đi ăn phở, mỗi người ăn một tô. Mỗi tô phở là 10 ngàn đồng. Hỏi ăn xong họ phải trả bao nhiêu tiền?","Giả sử ta có 1 khúc vải, cắt nó ra làm 100 khúc, thời gian để cắt 1 khúc vải là 5 giây. Hỏi nếu cắt liên tục không ngừng nghỉ thì trong bao lâu sẽ cắt xong?","Có 2 USD (tiền giấy loại 1 USD) trong cả 2 chiếc ví. Nhưng có một chiếc ví có số tiền gấp đôi chiếc ví còn lại. Làm sao điều này có thể xảy ra ?","Một con ốc sên phải leo lên đỉnh của cái cột cao 10m. Mỗi ngày nó leo được 4m và mỗi đêm nó bị tuột xuống 3m. Vậy khi nào con ốc sên kia leo lên đến đỉnh nếu nó bắt đầu vào sáng thứ 2?","Có 3 đồng xu trong đó có 1 đồng giả và nó nhẹ hơn đồng thật đồng thật ? Làm thế nào bạn tìm được đồng xu giả với 1 lần cân ?","Hiện nay ông cụ 56 tuổi và cháu 14 tuổi. Hỏi bao nhiêu năm nữa thì tuổi của ông gấp đôi tuổi của cháu ?","Chúng ta có thể trừ đi 1 từ số 1111 bao nhiêu lần?","Một người thợ may có 1 tấm vải dài 10 mét vải. Mỗi ngày anh ta cắt một mảnh dài 2 mét. Vậy sau bao nhiêu ngày thì anh ta sẽ cắt hết số vải đó?","2 con vịt đi trước 2 con vịt, 2 con vịt đi sau 2 con vịt, 2 con vịt đi giữa 2 con vịt. Hỏi có mấy con vịt?"];
var tle = tl[Math.floor(Math.random() * tl.length)];
var lon = `[Đố Bạn Biết?]: ${tle}.`;
return api.sendMessage(lon, event.threadID, event.messageID);
}
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};