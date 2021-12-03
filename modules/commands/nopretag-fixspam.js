const fs = global.nodemodule["fs-extra"]; //để thêm attachment nếu muốn
module.exports.config = {
    name: "nopretag-fixspam",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "manhIT",
    description: "nopre-fixspam",
    commandCategory: "NoPrefix",
    usages: "noprefix",
    cooldowns: 5,
};
module.exports.event = async({ api, event, Users }) => {
    var { threadID, messageID, senderID } = event;

    if (senderID !== "100069410211537") { //chỗ này thay id bot vào
        var mention = Object.keys(event.mentions)[0];
        let tag = event.mentions[mention];
        let output = "Sủa con cặc đụ mẹ mày nín mỏ chó lại"; //câu mà bot rep
        let varinput = ["‎bot ngu", "bot óc chó", "dm bot", "cmm bot"]; //danh sách input
        for (const i of varinput) {
            input = i + tag;
            if (event.body.indexOf(input) == 0 && event.body.length == input.length) {
                return api.sendMessage({
                    body: output + tag,
                    mentions: [{
                        tag: tag.replace("@", ""),
                        id: mention
                    }]
                }, threadID, messageID);
            }
        }
    }
}
module.exports.run = function({}) {}