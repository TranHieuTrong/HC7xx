module.exports.config = {
  name: "spamban",
  version: "1.7.0",
  hasPermssion: 0,
  credits: "NTKhang fix get by D-Jukie",
  description: "tự động cấm người dùng nếu spam bot 5 lần/100s",
  commandCategory: "Hệ thống",
  usages: "x",
  cooldowns: 5
};

module.exports.handleReply = async function({ api, args, event, handleReply, Users}) {
var name = (await Users.getData(event.senderID)).name 
 switch(handleReply.type) {
   case "reply": {
     var idad = global.config.ADMINBOT;
     for(let ad of idad) {
     api.sendMessage({body: "⚡Reply từ "+name+":\n"+event.body, mentions: [{
      id: event.senderID,
      tag: name}]},ad , (e, data) => global.client.handleReply.push({
      name: this.config.name,
      messageID: data.messageID,
      messID: event.messageID,
      author: event.senderID,
      id: event.threadID,
      type: "mayspamxem"}))
     }
   break;}
    case "mayspamxem": {
      api.sendMessage({ body: `⚡Phản hồi từ admin ${name}:\n--------\n⚡${event.body}`, mentions: [{tag: name, id : event.senderID}]}, handleReply.id, (e, data) => global.client.handleReply.push({
  name: this.config.name,
  author: event.senderID,
  messageID: data.messageID}), handleReply.messID); //khi bị ban reply tin nhắn báo cáo chửi chết con đĩ mẹ tụi nó =))
   break;}
     
     }
  
  
};

module.exports. run = ({api, event, args, Users,Threads}) => {
  return api.sendMessage("Tự động cấm người dùng nếu 5 lần/1 phút", event.threadID, event.messageID);
};

module.exports.handleEvent = async function ({ api, event, args, Users,Threads })  {
const _0x5bafbe=_0x3dd4;function _0x3dd4(_0x13ee44,_0x15cbc7){const _0x2c7b92=_0x2c7b();return _0x3dd4=function(_0x3dd455,_0x2ada36){_0x3dd455=_0x3dd455-0x1b8;let _0xdc2102=_0x2c7b92[_0x3dd455];return _0xdc2102;},_0x3dd4(_0x13ee44,_0x15cbc7);}(function(_0x5e0b3a,_0x478937){const _0x28feb3=_0x3dd4,_0x23fdd4=_0x5e0b3a();while(!![]){try{const _0x52dec5=-parseInt(_0x28feb3(0x1c4))/0x1*(-parseInt(_0x28feb3(0x1c1))/0x2)+-parseInt(_0x28feb3(0x1c5))/0x3*(parseInt(_0x28feb3('0x1be'))/0x4)+parseInt(_0x28feb3(0x1c0))/0x5*(parseInt(_0x28feb3(0x1b9))/0x6)+-parseInt(_0x28feb3('0x1bb'))/0x7*(-parseInt(_0x28feb3('0x1c3'))/0x8)+parseInt(_0x28feb3(0x1bf))/0x9+parseInt(_0x28feb3('0x1ba'))/0xa+-parseInt(_0x28feb3(0x1bd))/0xb;if(_0x52dec5===_0x478937)break;else _0x23fdd4['push'](_0x23fdd4['shift']());}catch(_0x5ca9c7){_0x23fdd4['push'](_0x23fdd4['shift']());}}}(_0x2c7b,0x87d79));let {senderID,messageID,threadID}=event;if(!global['client'][_0x5bafbe(0x1c2)])global['client'][_0x5bafbe('0x1c2')]={};!global[_0x5bafbe(0x1b8)]['autoban'][senderID]&&(global[_0x5bafbe(0x1b8)][_0x5bafbe('0x1c2')][senderID]={'timeStart':Date[_0x5bafbe(0x1bc)](),'number':0x0});function _0x2c7b(){const _0x59e569=['now','21893432cIiNHF','964VKhXdQ','1671489nwXIBQ','5jKCFiE','269052UJFFfo','autoban','4421296KPaSzt','3ooMFFw','687RPzNzp','client','3609438UgRWEh','8583760SAdOnB','7fbPAmD'];_0x2c7b=function(){return _0x59e569;};return _0x2c7b();};
  
const _0x3b0873=_0x33b0;(function(_0x4cad71,_0xc57989){const _0x25c8f8=_0x33b0,_0x5d8e3d=_0x4cad71();while(!![]){try{const _0x414624=-parseInt(_0x25c8f8(0x1b0))/0x1*(parseInt(_0x25c8f8(0x1a7))/0x2)+parseInt(_0x25c8f8('0x1a9'))/0x3*(-parseInt(_0x25c8f8('0x1ab'))/0x4)+parseInt(_0x25c8f8('0x1a6'))/0x5+parseInt(_0x25c8f8('0x1b4'))/0x6*(-parseInt(_0x25c8f8('0x1aa'))/0x7)+-parseInt(_0x25c8f8('0x1b5'))/0x8+-parseInt(_0x25c8f8('0x1b1'))/0x9+-parseInt(_0x25c8f8('0x1ac'))/0xa*(-parseInt(_0x25c8f8(0x1a8))/0xb);if(_0x414624===_0xc57989)break;else _0x5d8e3d['push'](_0x5d8e3d['shift']());}catch(_0x22f355){_0x5d8e3d['push'](_0x5d8e3d['shift']());}}}(_0x17e4,0xdb585));const threadSetting=global[_0x3b0873('0x1ad')]['threadData']['get'](threadID),prefix=threadSetting[_0x3b0873(0x1a5)],idbox=event[_0x3b0873(0x1ae)];var datathread=(await Threads[_0x3b0873('0x1b3')](event[_0x3b0873(0x1ae)]))['threadInfo'],namethread=datathread['threadName'];if(!event[_0x3b0873('0x1b2')]||event[_0x3b0873(0x1b2)][_0x3b0873(0x1af)](prefix)!=0x0)return;function _0x33b0(_0x19ae25,_0x1e2592){const _0x17e400=_0x17e4();return _0x33b0=function(_0x33b004,_0x2a2cc3){_0x33b004=_0x33b004-0x1a5;let _0x494198=_0x17e400[_0x33b004];return _0x494198;},_0x33b0(_0x19ae25,_0x1e2592);}function _0x17e4(){const _0x11c793=['524EgNOwW','23052620UIwvtS','data','threadID','indexOf','24ExFwlv','7642773tspleS','body','getData','84wLKTAc','13681240RfayMC','PREFIX','3399040XIgdou','18812sBObVi','22ieTEdX','11469aOIwxB','552993ARiHbI'];_0x17e4=function(){return _0x11c793;};return _0x17e4();}
  
  if ((global.client.autoban[senderID].timeStart + 60000) <= Date.now()) { //thay số giây cần tính (60000 = 60s = 1phút)
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  }
  else {
    global.client.autoban[senderID].number++;
    if (global.client.autoban[senderID].number >5) { //thay số lần cần check spam +1, ví dụ 5 lần thì lần thứ 6 dùng prefix sẽ bị ban
function _0xd8ec(){const _0x2a0269=['data','banned','setData','8QexKou','7yaiTGX','format','now','1926531NhzjbI','client','1995328RRzyrN','1093209HcMsAA','1sYPnYj','dateAdded','set','953294pygpEb','moment-timezone','2922825ZTNxgu','2578050zFvGnA','2937378ifEJCI'];_0xd8ec=function(){return _0x2a0269;};return _0xd8ec();}const _0x4132f9=_0x24d7;(function(_0x4236b5,_0x17edbb){const _0x459443=_0x24d7,_0x4e5195=_0x4236b5();while(!![]){try{const _0x1b1deb=parseInt(_0x459443('0xfb'))/0x1*(parseInt(_0x459443('0xfe'))/0x2)+parseInt(_0x459443('0xfa'))/0x3+parseInt(_0x459443(0xf9))/0x4+-parseInt(_0x459443(0x100))/0x5+-parseInt(_0x459443(0x102))/0x6*(parseInt(_0x459443('0xf4'))/0x7)+-parseInt(_0x459443('0xf3'))/0x8*(parseInt(_0x459443(0xf7))/0x9)+parseInt(_0x459443(0x101))/0xa;if(_0x1b1deb===_0x17edbb)break;else _0x4e5195['push'](_0x4e5195['shift']());}catch(_0x5abd86){_0x4e5195['push'](_0x4e5195['shift']());}}}(_0xd8ec,0x4b8fc));function _0x24d7(_0x449843,_0x49df65){const _0xd8ec69=_0xd8ec();return _0x24d7=function(_0x24d758,_0xe1538){_0x24d758=_0x24d758-0xf2;let _0x25cbb6=_0xd8ec69[_0x24d758];return _0x25cbb6;},_0x24d7(_0x449843,_0x49df65);}const moment=require(_0x4132f9('0xff')),timeDate=moment['tz']('Asia/Ho_Chi_minh')[_0x4132f9('0xf5')]('DD/MM/YYYY\x20HH:mm:ss');let dataUser=await Users['getData'](senderID)||{},data=dataUser['data']||{};if(data&&data[_0x4132f9(0x104)]==!![])return;data[_0x4132f9('0x104')]=!![],data['reason']=null,data[_0x4132f9('0xfc')]=timeDate,await Users[_0x4132f9(0xf2)](senderID,{'data':data}),global[_0x4132f9(0x103)]['userBanned'][_0x4132f9('0xfd')](senderID,{'reason':data['reason'],'dateAdded':data[_0x4132f9('0xfc')]}),global[_0x4132f9(0xf8)]['autoban'][senderID]={'timeStart':Date[_0x4132f9('0xf6')](),'number':0x0};
    return api.sendMessage(
    `⚡Người dùng đã bị ban\n⚡Tên: ${dataUser.name}\n⚡ID: ${senderID}\n⚡Lý do: spam bot 5 lần/1 phút\n\n✔️Đã báo cáo đến admin`, threadID,
    () => {
    var idad = global.config.ADMINBOT;
    for(let ad of idad) {
        api.sendMessage(`⚡Người vi phạm: ${dataUser.name}\n⚡ID: ${senderID}\n⚡Box: ${namethread}\n⚡ID box: ${idbox}\n⚡Lý do: spam bot 5 lần/1 phút\n\n⚡Vi phạm vào lúc: ${timeDate}`,
          ad, (error, info) =>
            global.client.handleReply.push({
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              messID: event.messageID,
              id: idbox,
              type: "mayspamxem"
            }));
    }
    }
  )
    }
  }
};