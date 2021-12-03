module.exports.config = {
  name: "fbget",
  version: "0.0.1",
  hasPermssion: 0,
  credits: "Lợi",
  description: "fbget [link]",
  commandCategory: "media",
  usages: "fbget [link]",
  cooldowns: 5,
    dependencies: {
      "fb-tools":"",
      "axios":"",
      "fs-extra":""
    }
};

module.exports.run = async function({ api, event, args}) {
    const fs = global.nodemodule["fs-extra"];
    const axios = global.nodemodule["axios"];
    const facebookTools = global.nodemodule["fb-tools"];
    var url = args.join(" ");
    if(!url) api.sendMessage("Vui lòng nhập link video cần download !",event.threadID,event.messageID);
    else{
    api.sendMessage("Đang xử lí yêu cầu của bạn!!!", event.threadID);
    try{
    let video = await facebookTools.getVideoUrl(url);
    var body = "✅Loaded success✅"
    let path = __dirname + "/cache/a1.mp4";
    
    var getvideo = (await axios.get(`${video.hd}`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(path, Buffer.from(getvideo, "utf-8"));  
    console.log(video)
    api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/a1.mp4"), body: body}, event.threadID);
    }
    catch(e){
        api.sendMessage("Đã xảy ra lỗi khi tải video này !",event.threadID,event.messageID)
       }
    }
}