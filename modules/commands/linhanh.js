module.exports.config = {
  name: "linhanh",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thắng",
  description: "Hàng đặt riêng của bạn chủ bot,nếu thích thì cứ xài ^^",
  commandCategory: "random-img",
  usages: "linhanh",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.postimg.cc/jjCJPpPC/109837445-282616832989661-1963125029764218129-n.jpg",
"https://i.postimg.cc/cCGgq6j8/117149726-1022008304898971-323345301192424564-n.jpg",
"https://i.postimg.cc/85JMQ2zx/117222810-1196851697340908-8778481517711120770-n.jpg",
"https://i.postimg.cc/PJHx39pW/117321487-324153365404243-590286150744710170-n.jpg",
"https://i.postimg.cc/j57wky8b/118144679-621892202090381-6462756720784070912-n.jpg",
"https://i.postimg.cc/CMbnGHBC/118285247-1459476801108028-8348319697321345505-n.jpg",
"https://i.postimg.cc/BQM6phqF/118472387-227210785396278-3652237927833619143-n.jpg",
"https://i.postimg.cc/cLCJbQHb/118525536-618223435543883-7015646649376778379-n.jpg",
"https://i.postimg.cc/L5kqm2KQ/118620749-357589418587492-6577412905643819707-n.jpg",
"https://i.postimg.cc/DzYLNvnq/122443631-351051569508828-1722240360415540782-n.jpg",
"https://i.postimg.cc/kGWSDW8c/133531188-1256691478036650-8099558070912611722-n.jpg",
"https://i.postimg.cc/LXL5V2X4/136057813-812278846294788-6057501317504555730-n.jpg",
"https://i.postimg.cc/X73GQGdR/137660899-860901034726748-8517145507172642193-n.jpg",
"https://i.postimg.cc/zBsWJxLv/149934869-342708837127012-7042758931246359641-n.jpg",
"https://i.postimg.cc/65NRg1J1/158889229-174728734313167-579902029696864800-n.jpg",
"https://i.postimg.cc/tC51fqzY/165467275-957198615088441-6047729299822596888-n.jpg",
"https://i.postimg.cc/R03NNcxH/166332706-209148674318542-2595861052703604485-n.jpg",
"https://i.postimg.cc/wjjtYCWF/171650682-473026717150374-7214587452300271780-n.jpg",
"https://i.postimg.cc/rwfrdVdv/188815836-305368701252099-4618645337799490807-n.jpg",
"https://i.postimg.cc/tCtPjt9R/210224899-292284005910325-8291526221679817890-n.jpg",
"https://i.postimg.cc/8cbCq4Mq/231660522-606972103618298-2867133162636110649-n.jpg",
"https://i.postimg.cc/SQLj2S3D/236884909-926179981655103-601149545584838378-n.jpg",
"https://i.postimg.cc/L8WsKng6/237084820-565985298180600-3498273562631161671-n.jpg",
"https://i.postimg.cc/HkvrY6Rm/237586106-329528615583264-7378653693454431230-n.jpg",
"https://i.postimg.cc/tgL7PY9m/238620166-978282559634351-7304706930771297954-n.jpg",
"https://i.postimg.cc/9FW0G3jV/240480616-988854904991896-4203829381239150474-n.jpg",
"https://i.postimg.cc/bwynNDvx/240497080-371863711091066-3650837696998993956-n.jpg",
"https://i.postimg.cc/s28GcT4m/240996627-3018074361783520-1374492060414132441-n.jpg",
     ];
     var callback = () => api.sendMessage({body:`Hàng đặt riêng của bạn chủ bot ^^`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
