module.exports.config = {
  name: "date2",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "NTKhang",
  description: "Xem giờ bằng ảnh\nCredits: NTKhang",
  commandCategory: "other",
  usages: "date2",
  cooldowns: 5,

};

function wrapText(ctx, text, maxWidth) {
  return new Promise(resolve => {
    if (ctx.measureText(text).width < maxWidth) return resolve([text]);
    if (ctx.measureText("W").width > maxWidth) return resolve(null);
    const words = text.split(" ");
    const lines = [];
    let line = "";
    while (words.length > 0) {
      let split = false;
      while (ctx.measureText(words[0]).width >= maxWidth) {
        const temp = words[0];
        words[0] = temp.slice(0, -1);
        if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
        else {
          split = true;
          words.splice(1, 0, temp.slice(-1));
        }
      }
      if (ctx.measureText(`${line}${words[0]}`).width < maxWidth)
        line += `${words.shift()} `;
      else {
        lines.push(line.trim());
        line = "";
      }
      if (words.length === 0) lines.push(line.trim());
    }
    return resolve(lines);
  });
}

module.exports.run = async function({ api, event, args, client, __GLOBAL }) {
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas, Canvas } = require("canvas");
  const fs = require("fs-extra");
  const axios = require("axios");
  let pathImg = __dirname + "/cache/clock.png";

  const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");

  var cadao = ((await axios.get("http://le31.glitch.me/poem")).data).data;
  //câu ca dao
  
  var texta = gio;
  var textb = cadao;
  
  /* var imgg = [
    "https://bit.ly/3s2ZYIJ",
    "https://bit.ly/3t21nk8",
    "https://bit.ly/3dMPV5y",
    "https://bit.ly/3uqpRUu",
    "https://bit.ly/39OVT4H",
    "https://bit.ly/3muvb6i"]*/
  var imgg = [
    "https://i.imgur.com/VCA5Joj.jpg",
    "https://i.imgur.com/8qk4gq0.jpg",
    "https://i.imgur.com/6ZjNlbi.jpg",
"https://i.imgur.com/94IkCeb.jpg",
"https://i.imgur.com/EEUi9oL.jpg",
"https://i.imgur.com/MIiTvlJ.jpg",
"https://i.imgur.com/vs9xqN8.jpg",
"https://i.imgur.com/QGg400s.jpg",
"https://i.imgur.com/hyVuzSi.jpg",
"https://i.imgur.com/8DhdagS.jpg",
"https://i.imgur.com/ZgUzj7n.jpg",
"https://i.imgur.com/09sMeCa.jpg",
"https://i.imgur.com/cMTh52I.jpg",
"https://i.imgur.com/fyI9CfD.jpg",
"https://i.imgur.com/UmmIlsu.jpg",
"https://i.imgur.com/4WsRt8I.jpg",
"https://i.imgur.com/LuMut9Z.jpg",
"https://i.imgur.com/Q7IEWIK.jpg",
"https://i.imgur.com/MtMmAfg.jpg",
"https://i.imgur.com/DrQ3hXE.jpg",
"https://i.imgur.com/o8NOTJc.jpg",
"https://i.imgur.com/EOtXVfp.jpg",
"https://i.imgur.com/tlDelJi.jpg",
"https://i.imgur.com/MiRJAOj.jpg",
"https://i.imgur.com/H62Z4LB.jpg",
"https://i.imgur.com/YhVnJG7.jpg",
"https://i.imgur.com/QauSEUZ.jpg",
"https://i.imgur.com/FhIE3s3.jpg",
"https://i.imgur.com/6wFwstD.jpg",
"https://i.imgur.com/u50w6Sa.jpg",
"https://i.imgur.com/Fycp3Ts.jpg",
"https://i.imgur.com/fq12fHN.jpg",
"https://i.imgur.com/FVZJnzn.jpg",
"https://i.imgur.com/nDrLBq7.jpg",
"https://i.imgur.com/nb6iFP7.jpg",
"https://i.imgur.com/z8EPV75.jpg",
"https://i.imgur.com/ZjZubI5.jpg",
"https://i.imgur.com/G7dRiTf.jpg",
"https://i.imgur.com/k4G8gGl.jpg",
"https://i.imgur.com/yUOQsoS.jpg",
"https://i.imgur.com/nhHknkP.jpg",
"https://i.imgur.com/YVyclHs.jpg",
"https://i.imgur.com/gNWbcUy.jpg",
"https://i.imgur.com/tVeiome.jpg",
"https://i.imgur.com/nOxp4jG.jpg",
"https://i.imgur.com/IihgeWe.jpg",
"https://i.imgur.com/xEsmGi4.jpg",
"https://i.imgur.com/PnzxBYX.jpg",
"https://i.imgur.com/lIMRFKF.jpg",
"https://i.imgur.com/VwEMmWu.jpg",
"https://i.imgur.com/oBQK4kp.jpg",
"https://i.imgur.com/YiQrAdz.jpg",
"https://i.imgur.com/8f5gMMU.jpg",
"https://i.imgur.com/6yKT4Eg.jpg",
"https://i.imgur.com/eA7DrNS.jpg",
"https://i.imgur.com/p6il1y5.jpg",
"https://i.imgur.com/5NS0W6C.jpg",
"https://i.imgur.com/0MlyO7q.jpg",
"https://i.imgur.com/VvqgeTK.jpg",
"https://i.imgur.com/BYuRUMY.jpg",
"https://i.imgur.com/rrPI777.jpg",
"https://i.imgur.com/RwaxYIw.jpg",
"https://i.imgur.com/fFhU9du.jpg",
"https://i.imgur.com/vvWUOcw.jpg",
"https://i.imgur.com/YDT4Hds.jpg",
"https://i.imgur.com/2LWc59P.jpg",
"https://i.imgur.com/vSnspQh.jpg",
"https://i.imgur.com/iGmbqnE.jpg",
"https://i.imgur.com/tmum9qY.jpg",
"https://i.imgur.com/8jtJgBe.jpg",
"https://i.imgur.com/v8VufLC.jpg",
"https://i.imgur.com/aLVyRGJ.jpg",
"https://i.imgur.com/MZkL8Wb.jpg",
"https://i.imgur.com/9gPTvOg.jpg",
"https://i.imgur.com/vkikzJU.jpg",
"https://i.imgur.com/jDga12m.jpg",
"https://i.imgur.com/TeKvXbb.jpg",
"https://i.imgur.com/umK7cXb.jpg",
"https://i.imgur.com/NjmFog4.jpg",
"https://i.imgur.com/9xpKqmN.jpg",
"https://i.imgur.com/1T32JFN.jpg",
"https://i.imgur.com/4Ofv4U7.jpg",
"https://i.imgur.com/AkmS63y.jpg",
"https://i.imgur.com/bfVjTz2.jpg",
"https://i.imgur.com/kJKTlsc.jpg",
"https://i.imgur.com/KDutnzG.jpg",
"https://i.imgur.com/ROBhAGW.jpg",
"https://i.imgur.com/y7Puihp.jpg",
"https://i.imgur.com/jq9J9Q0.jpg",
"https://i.imgur.com/gKMT5vr.jpg",
"https://i.imgur.com/BZ8RZIi.jpg",
"https://i.imgur.com/AaFkoZt.jpg",
"https://i.imgur.com/MrH0CZ6.jpg",
"https://i.imgur.com/rUfAPgo.jpg",
"https://i.imgur.com/5jGvxAj.jpg",
"https://i.imgur.com/T3FhiwT.jpg",
"https://i.imgur.com/NqsXf9r.jpg",
"https://i.imgur.com/0q3h1vy.jpg",
"https://i.imgur.com/Rdhs7Er.jpg",
"https://i.imgur.com/69iJaRx.jpg",
"https://i.imgur.com/ch0EjaP.jpg",
"https://i.imgur.com/ZvKEFZU.jpg",
"https://i.imgur.com/8MLB3ji.jpg",
"https://i.imgur.com/qToKsyn.jpg",
"https://i.imgur.com/Ke9mL6N.jpg",
"https://i.imgur.com/8qR3scn.jpg",
"https://i.imgur.com/OEaIzev.jpg",
"https://i.imgur.com/wJk5spB.jpg",
"https://i.imgur.com/3Q3qcTD.jpg",
"https://i.imgur.com/K6xywTF.jpg",
"https://i.imgur.com/yti7JDB.jpg",
"https://i.imgur.com/lyyyK5c.jpg",
"https://i.imgur.com/6br7DS1.jpg",
"https://i.imgur.com/OsTst2P.jpg",
"https://i.imgur.com/PuMMMM7.jpg",
"https://i.imgur.com/oQc2Jsp.jpg",
"https://i.imgur.com/WxN2fEU.jpg",
"https://i.imgur.com/6Rtxi3w.jpg",
"https://i.imgur.com/Y7ClyeZ.jpg",
"https://i.imgur.com/OWbLqrG.jpg",
"https://i.imgur.com/sZUjbKS.jpg",
"https://i.imgur.com/bfAv7sp.jpg",
"https://i.imgur.com/6FddsGV.jpg",
"https://i.imgur.com/sgHTh5U.jpg",
"https://i.imgur.com/rWlZBkv.jpg",
"https://i.imgur.com/AvqYkbt.jpg",
"https://i.imgur.com/6TSHnoE.jpg"
  ];
  var imgrd = imgg[Math.floor(Math.random() * imgg.length)];

  let getimg = (await axios.get(`${imgrd}`, { responseType: "arraybuffer" }))
    .data;
  fs.writeFileSync(pathImg, Buffer.from(getimg, "utf-8"));
  let baseImage = await loadImage(pathImg);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 10, 5, canvas.width, canvas.height);
  ctx.font = "28px Courier New";//Courier New
  ctx.fillStyle = "#FF0000";
  ctx.textAlign = "start";
  let fontSize = 500;
  ctx.fillText(texta, (baseImage.width/2 - texta.length/2*15), baseImage.height/2);

 ctx.fillText(textb, baseImage.width/2-textb.length/2*14, baseImage.height/2 + 30);
  ctx.beginPath();
const imageBuffer = canvas.toBuffer();
  
  
fs.writeFileSync(pathImg, imageBuffer);
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};