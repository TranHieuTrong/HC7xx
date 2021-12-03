module.exports.config = {
  name: "ghéop",
  version: "1.0.5",
  hasPermssion: 0,
  credits: "KhanhMilo",
  description: "Ghép đôi với 1 đứa trong nhóm",
  commandCategory: "Group",
  usages: "ghép",
  cooldowns: 1,
  dependencies: {
		"fs-extra": "",
		"axios": "" 
	},
  envConfig: {
       cooldownTime: 300000
  }
};

module.exports.run = async function ({ api, event, args, Threads, Users,Currencies }) {
  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  const money = (await Currencies.getData(event.senderID)).money;
  if(money < 6000) api.sendMessage("Bạn cần trên 5000 đô cho 1 lần ghép hãy tích cực làm việc hoặc xin admin bot!\n🤑Có làm mới có ăn🤑",event.threadID,event.messageID)
  else{
  var chietkhau = (5000 / 100) * 15;
  var moneytru = 5000 + chietkhau;
  await Currencies.increaseMoney(event.senderID, parseInt("-"+moneytru))
  var mention = Object.keys(event.mentions)[0];
  var emoji = ["♥️","❤️","💛","💚","💙","💜","🖤","💖","💝","💓","💘","💍","🎁","💋","💎","💠","🌈","🌍","🌕","☀️"]
  var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];

  if (!mention) {
    let all = (await Threads.getInfo(event.threadID)).participantIDs;
    
    await all.splice(all.indexOf(api.getCurrentUserID()), 1);
    await all.splice(all.indexOf(event.senderID), 1);
    var random = all[Math.floor(Math.random() * all.length)];
    let data = await api.getUserInfo(parseInt(random));
    let dt = await api.getUserInfo(event.senderID);
    let getgif = (await axios.get(`https://4boxvn.com/api/yeu.php`)).data;
    let gif = (await axios.get(getgif.url, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync( __dirname + "/cache/gif.gif", Buffer.from(gif, 'utf-8'));
    let Avatar1 = (await axios.get(`https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync( __dirname + "/cache/avt1.png", Buffer.from(Avatar1, 'utf-8'));
	let Avatar2 = (await axios.get(`https://graph.facebook.com/${random}/picture?width=512&height=512&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, 'utf-8'));
	  
    let name_1 = dt[event.senderID].name;
    let name_2 = data[parseInt(random)].name;
    let imglove = [] ;
    imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
    imglove.push(fs.createReadStream(__dirname + "/cache/gif.gif"));
    imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
    if (name_2 == undefined) {
      api.changeNickname( `${ dt[event.senderID].gender == 2 ? "Vợ của" : dt[event.senderID].gender == 1 ? "Chồng của" : "BêĐê của" } ${name_1} ${random_emoji}`, event.threadID, parseInt(random) );
      api.changeNickname( `${ data[parseInt(random)].gender == 2 ? "Vợ của" : data[random].gender == 1 ? "Chồng của" : "BêĐê của" } 1 người chưa biết tên ${random_emoji}`, event.threadID, event.senderID );
	} else {
      api.changeNickname( `${ dt[event.senderID].gender == 2 ? "Vợ của" : dt[event.senderID].gender == 1 ? "Chồng của" : "BêĐê của" } ${name_1} ${random_emoji}`, event.threadID, parseInt(random) );
      api.changeNickname( `${ data[parseInt(random)].gender == 2 ? "Vợ của" : data[random].gender == 1 ? "Chồng của" : "BêĐê của" } ${name_2} ${random_emoji}`, event.threadID, event.senderID );
      api.sendMessage( { body: `Hoàn thanh ghép đôi bạn đã mất ${moneytru} đô! triết khấu 15%\nHai bạn đã ghép đôi thành công\n\n💓 ${name_1} - ${name_2} 💓` ,  attachment: imglove , mentions : [{tag: `${name_1}`, id: event.senderID} , {tag: `${name_2}`, id: random} ]}, event.threadID );
      }
  }
   else {
    let data = await api.getUserInfo(mention);
    let dt = await api.getUserInfo(event.senderID);
    let getgif = (await axios.get(`https://4boxvn.com/api/yeu.php`)).data;
    let gif = (await axios.get(getgif.url, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync( __dirname + "/cache/gif.gif", Buffer.from(gif, 'utf-8'));
    let Avatar1 = (await axios.get(`https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync( __dirname + "/cache/avt1.png", Buffer.from(Avatar1, 'utf-8'));
	let Avatar2 = (await axios.get(`https://graph.facebook.com/${mention}/picture?width=512&height=512&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, 'utf-8'));
    let imglove = [];
    imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
    imglove.push(fs.createReadStream(__dirname + "/cache/gif.gif"));
    imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
    let name_1 = dt[event.senderID].name;
    let name_2 = data[mention].name;
    if (name_2 == undefined) {
      api.changeNickname( `${ dt[event.senderID].gender == 2 ? "Vợ của" : dt[event.senderID].gender == 1 ? "Chồng của" : "BêĐê của" } ${name_1} ${random_emoji}`, event.threadID, mention );
      api.changeNickname( `${ data[mention].gender == 2 ? "Vợ của" : data[mention].gender == 1 ? "Chồng của" : "BêĐê của" } 1 người chưa biết tên ${random_emoji}`, event.threadID, event.senderID );
      } else {
      api.changeNickname( `${dt[event.senderID].gender == 2 ? "Vợ của" : dt[event.senderID].gender == 1 ? "Chồng của" : "BêĐê của" } ${name_1} ${random_emoji}`, event.threadID, mention );
      api.changeNickname( `${data[mention].gender == 2 ? "Vợ của" : data[mention].gender == 1 ? "Chồng của" : "BêĐê của" } ${name_2} ${random_emoji}`, event.threadID, event.senderID );
      api.sendMessage( { body: `Hoàn thanh ghép đôi bạn đã mất ${moneytru} đô! triết khấu 15%\nHai bạn đã ghép đôi thành công\n\n💓 ${name_1} - ${name_2} 💓` ,  attachment: imglove , mentions : [{tag: `${name_1}`, id: event.senderID} , {tag: `${name_2}`, id: mention} ]}, event.threadID );
      }
  }
}
};