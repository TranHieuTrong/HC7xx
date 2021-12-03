module.exports.config = {
  name: "tarot",
   version: "1.0.0",
    hasPermssion: 0,
     credits: "Jukie~",
      description: "xem các điều thú vị về bạn",
       commandCategory: "game",
        usages: "",
         cooldowns: 5
         };

         module.exports.run = async ({ api, event,args }) => {
         const axios = global.nodemodule["axios"];
         const res = await axios.get(`https://le31.glitch.me/tarot`);
         var data = res.data.data;
         var name = res.data.name;
         var suite = res.data.suite;
         var description = res.data.description;
         var interpretation = res.data.interpretation;
         return api.sendMessage(`⚡️${data.name}\n≻───── ⋆✩⋆ ─────≺\n⚡️${data.suite}\n⚡️${data.description}\n⚡️${data.interpretation}\n≻───── ⋆✩⋆ ─────≺\nDùng lệnh /ggdich và reply tin nhắn này để dịch sang tiếng Việt`, event.threadID, event.messageID)
         }