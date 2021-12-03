module.exports.config = {
	name: "sendt",	version: "1.0.0", 
	hasPermssion: 2,
	credits: "NTKhang",
	description: "Send tin", 
	commandCategory: "Admin",
	usages: "sendt",
	cooldowns: 5, 
	dependencies: "",

};

module.exports.run = async function({ api, Users, Threads, event, args }) {
  let {body} = event
  var content = `${body}`;
  var text = content.slice(content.indexOf(" ")+1);
 var text2 = text.slice(text.indexOf(" "));
var tid = args[0];
  api.sendMessage(text2, tid)
  
  
  
}