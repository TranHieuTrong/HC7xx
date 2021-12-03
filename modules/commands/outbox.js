module.exports.config = {
	name: "outbox",
	version: "1.0.5",
	hasPermssion: 2,
	credits: "CatalizCS",
	description: "Tự động outbox sau khoảng thời gian đã request!",
	commandCategory: "system",
    dependencies: {
        "moment-timezone": ""
    },
	cooldowns: 5
};

module.exports.convertTime = (timestamp, separator) => {
    var pad = function(input) {return input < 10 ? "0" + input : input;};
    var date = timestamp ? new Date(timestamp * 1000) : new Date();
    return [
        pad(date.getHours()),
        pad(date.getMinutes()),
        pad(date.getSeconds())
    ].join(typeof separator !== 'undefined' ?  separator : ':' );
}

module.exports.handleSchedule = async ({ api, schedule }) => {
    try {
        await api.removeUserFromGroup(api.getCurrentUserID(), schedule.target);
        return api.sendMessage(`[OutBox] Đã rời khỏi nhóm có ID ${schedule.target}`, __GLOBAL.settings.ADMINBOT[0], (error, info) => {
            if (error) return require(process.cwd() + "/utils/log")(`Đã rời khỏi nhóm có ID ${schedule.target}`, "[ OUTBOX ]");
        });
    }
    catch {
        return api.sendMessage(`Không thể rời khỏi nhóm có ID ${schedule.target}!`, __GLOBAL.settings.ADMINBOT[0], (error, info) => {
            if (error) return require(process.cwd() + "/utils/log")(`Không thể rời khỏi nhóm có ID ${schedule.target}!`, "error");
        });
    }
} 

module.exports.handleReply = ({ event, api, handleReply }) => {
    const moment = global.nodemodule["moment-timezone"];
    
    if (handleReply.author != event.senderID) return;

    switch (handleReply.type) {
        case "inputThreadID": {
            if (isNaN(event.body)) return api.sendMessage("[OutBox] ThreadID bạn nhập không đúng định dạng!", event.threadID, event.messageID);
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`[OutBox] Thời gian bạn cần hẹn giờ(Lưu ý phải theo định dạng: HH:mm):`, event.threadID, (error, info) => {
                global.client.handleReply.push({
                    type: "inputTime",
                    name: this.config.name,
                    author: event.senderID,
                    messageID: info.messageID,
                    target: event.body
                })
            })
        }

        case "inputTime": {
            const time = moment().utcOffset("+07:00");
            const regex = /([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/;

            if (!regex.test(event.body)) return api.sendMessage(`[OutBox] Format thời gian không chính xác!`, event.threadID, event.messageID);
            const timeSplited = event.body.split(":"),
                    hour = timeSplited[0],
                    minute = timeSplited[1];
                
            if (hour > time.hours()) time.add(1, "days");

            time.set({ hour, minute });

            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`[OutBox] Nhập lý do tự động rời:`, event.threadID, (error, info) => {
                global.client.handleReply.push({
                    type: "inputReason",
                    name: this.config.name,
                    author: event.senderID,
                    messageID: info.messageID,
                    target: handleReply.target,
                    timeTarget: time.unix()
                })
            })
        }

        case "inputReason": {
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(
                "=== OutBox ===" +
                "\n\n» Thread cần rời: " + handleReply.target +
                "\n» Thời gian rời: " + this.convertTime(handleReply.timeTarget) +
                "\n» Lý do: " + event.body,
                event.threadID, (error, info) => {
                    return api.sendMessage(`[OutBox] Đã nhận được lệnh rời khỏi nhóm này vào lúc ${this.convertTime(handleReply.timeTarget)} với lý do ${event.body}`, handleReply.target, (error, info) => {
                        if (error) return api.sendMessage(`[OutBox] Thread cần ban có ID không tồn tại, có thể đã bị kick từ trước!`, event.threadID, event.messaegID);
                        else return global.client.handleSchedule.push({
                            commandName: this.config.name, 
                            timestamp: handleReply.timeTarget, 
                            target: handleReply.target, 
                            reason: event.body,
                            event
                        })
                    })
                }
            )
        }
    }
}

module.exports.run = ({  event, api }) => {
    return api.sendMessage(`[OutBox] ID thread bạn cần hẹn giờ tự động rời:`, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "inputThreadID",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        })
    })
}