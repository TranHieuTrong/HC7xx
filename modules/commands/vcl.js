const fs = require("fs");
module.exports.config = {
name: "vcl",
	version: "1.0.0",
  	hasPermssion: 0,
    	description: "Vcl",
      	commandCategory: "Không cần dấu lệnh",
        	usages: "noprefix",
          	cooldowns: 5,
            };
            module.exports.onLoad = () => {
                const fs = require("fs-extra");
                    const request = require("request");
                        const dirMaterial = __dirname + `/noprefix/`;
                            if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
                                if (!fs.existsSync(dirMaterial + "vcl.mp4")) request("https://tinyurl.com/yj5kwoc2").pipe(fs.createWriteStream(dirMaterial + "vcl.mp4"));
                                }
                                module.exports.handleEvent = function({ api, event }) {
                                	var { threadID, messageID } = event;
                                  	if (event.body.indexOf("Vl")==0 || (event.body.indexOf("Vc")==0)){
                                    	  var msg = {
                                        				body: "Vãi cả lồn!",
                                                				attachment: fs.createReadStream(__dirname + `/noprefix/vcl.mp4`)
                                                        			}
                                                              			return api.sendMessage(msg, threadID, messageID);
                                                                    		}
                                                                        	}
                                                                          	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                                                            }