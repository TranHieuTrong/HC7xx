module.exports.config = {
  name: "tokyo revengers",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Kiểm tra thông tin nhs chat.",
  commandCategory: "MODULE (LỆNH)",
  usages: "tokyo revengers",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://static.zenmarket.jp/images/blog/1yaw4j2z.k2h",
"https://gamek.mediacdn.vn/133514250583805952/2021/4/1/ani2-16172442525491747030889.jpg",
"https://lh3.googleusercontent.com/proxy/QlAAdIj4be97QVyrvwLSwV35t28VzJEcZzMlcAyu2UFRsxyXLt0I0cOeviRQogPOSaaOPgRgHRnNejFaABc-CnWtchhbRWGhO3ZpUhPDg0xlwUuXnzjKqQfw",
"https://hosonhanvat.vn/wp-content/uploads/2021/07/Screenshot-2021-07-28-115113-450x300.jpg",
"https://salt.tikicdn.com/ts/product/07/ce/db/1e9f146f735fee957ab48aed5ad61ef7.jpg",
"https://lh3.googleusercontent.com/proxy/AGiCFE6pjRVJ86UxBZbiMs3VL-XAZ9VbTxYftGliP9Lj8WjRJNn4fBInSShcbdMJL9fwfZ6ltgmPmwujp2l8ou41VkvvWOuUtAkTrN8Ppl_6Khr8RyykE84",
"https://i.pinimg.com/736x/66/65/5b/66655be1d6acf0084a0b72d247e28003.jpg",
"https://i.pinimg.com/736x/b9/ce/8e/b9ce8e0ef4931837ccf7ad12779727bb.jpg",
"https://img.wattpad.com/cover/272652265-256-k5771.jpg",
"https://i.imgur.com/ElbhzDg.jpeg",
"https://img.wattpad.com/cover/274423000-256-k647512.jpg",
"https://cdn.zenquiz.net/external/2021/06/05/13/31d9a200-c603-11eb-b982-050901070303-compressed.jpg",
"https://wallpapercave.com/wp/wp9016519.jpg",
"https://images3.alphacoders.com/115/1155000.jpg",
"https://fsa.zobj.net/crop.php?r=9AIZrZstnPl60PuPGe04b8Z7w3HiWrEcGGQ68dvZ37dXbXj4yFMLS7gP5ftHhb0Oou6tI7_FcVDMQawAfR-81NqcbfWC4wOU5lq4Qwei9Iy5NEkUGwuX3HSFbbZ67GuZ3W4-oQz1NlxLleEHTrtyvXPcJIFULiPZOUUq7qnA5oM7K3vN8-56bPESBFp_R_rJAXRxf5IANAhni-zq",
"https://www.nawpic.com/media/2020/tokyo-revengers-nawpic-1-e1626214897245.jpg",
"https://www.whatspaper.com/wp-content/uploads/2021/07/whatspaper-182.jpg",
"https://gamek.mediacdn.vn/133514250583805952/2021/7/29/photo-1-1627541834108425725514.jpg",
"https://i.pinimg.com/550x/ce/43/57/ce4357b3366491db76ceb34c914d5a4d.jpg",
"https://64.media.tumblr.com/1d0fcea87ba5f22350c1eb33e5e6e2ad/287e89feeae23c00-41/s1280x1920/d71303aeb81b8c4d219fe2dd36e42e4637dd590c.jpg",
"https://images-na.ssl-images-amazon.com/images/I/61iIhVNLxAS.jpg",
"https://i1.sndcdn.com/artworks-By1h7AdJB7NrRTNt-3yeRqg-t500x500.jpg",
"https://img.wattpad.com/cover/270399769-288-k414998.jpg",
"https://img.wattpad.com/cover/269062880-256-k474521.jpg",
"https://img.wattpad.com/2216dfcdc7ad554275fd71c97a5cbbc7a506830f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f483967696c774f35676a31556b773d3d2d313037363538363835352e313638333134323365383861373739663137383639313733353134312e6a7067",
"https://wallpapercave.com/wp/wp9527273.jpg",
"https://image.lag.vn/upload/news/21/06/08/tokyo-revengers-bang-dang-toman-1_AYSF.jpg",
"https://danbooru.donmai.us/data/original/8c/e4/8ce4b83ecf6206dc769b5d28561278b3.jpg",
"https://dthezntil550i.cloudfront.net/io/latest/io2105090338362050015701746/1280_960/7d93c5be-bdbb-4a26-920c-fc1f7e4fd76a.jpg",
"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/24b541f2-c2d7-41c3-b89f-b0011b876444/delyji9-49ae941a-df02-4774-922c-293a909cbee4.png/v1/fill/w_1280,h_720,q_80,strp/angry_and_smiley_tokyo_revengers_by_icarus0620_delyji9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMjRiNTQxZjItYzJkNy00MWMzLWI4OWYtYjAwMTFiODc2NDQ0XC9kZWx5amk5LTQ5YWU5NDFhLWRmMDItNDc3NC05MjJjLTI5M2E5MDljYmVlNC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ihIK-42GWSs6zPthJw-C9-ExkjqXpj9CBFVe9AhkH00",
"https://pbs.twimg.com/media/E2hTd-PVUAA_Mxh.jpg",
"https://static.wikia.nocookie.net/tokyo-revengers/images/4/4e/Volume_15.png/revision/latest?cb=20200303221913",
"https://img.wattpad.com/cover/273080703-256-k310951.jpg",
"https://img.wattpad.com/cover/275154173-256-k748663.jpg",
"https://64.media.tumblr.com/43e14ab3d6447515becf5b1dceb37eb2/d77651737437ae36-08/s1280x1920/540f5545e8de8aa7749ae8332b312406b3f5778f.jpg",
"https://w0.peakpx.com/wallpaper/705/351/HD-wallpaper-mitsuya-tokyo-revengers-mitsuya-takashi.jpg",
"https://img.wattpad.com/cover/277032836-256-k994960.jpg",
"https://img.wattpad.com/cover/274159535-256-k76003.jpg",
"https://cdn.myanimelist.net/images/characters/4/388013.jpg",()
"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/626f633c-e636-4afc-8389-ccd56cbf2e61/delw6ui-ba17f6de-fcb2-4954-b2f0-403b6b5c4917.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYyNmY2MzNjLWU2MzYtNGFmYy04Mzg5LWNjZDU2Y2JmMmU2MVwvZGVsdzZ1aS1iYTE3ZjZkZS1mY2IyLTQ5NTQtYjJmMC00MDNiNmI1YzQ5MTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GPacXpY_HX4iGv7VGIACFrFkxGaz3j3-9mUj8JoJQMI",
"https://img.wattpad.com/cover/275990221-352-k363945.jpg",
"https://truyenwiki1.com/wp-content/uploads/2021/07/em-gai-cua-kurokawa-izana-tokyo-revengers-1625138296.jpg",
"https://image.lag.vn/upload/news/21/06/15/top-bang-dang-manh-nhat-tokyo-revengers-1_GFWZ.jpg",
"https://img.wattpad.com/cover/279084866-288-k373047.jpg",
"https://img.wattpad.com/cover/279625795-256-k736487.jpg",
"https://pbs.twimg.com/media/E5n-In-WYAEJ38G.jpg",
"https://img.wattpad.com/cover/279919099-256-k931306.jpg",
"https://i.pinimg.com/236x/5a/6c/f2/5a6cf2f319a44659242524c663cf7e23.jpg",
"https://i.imgur.com/TlHTeN7.jpg",
"https://cdn.myanimelist.net/images/characters/15/387997.jpg",
"https://recenthighlights.com/wp-content/uploads/2021/07/Tokyo-Revengers-Episode-16.jpg",
"https://kodansha.us/wp-content/uploads/2021/04/TokyoRevengers_019_cover.jpg",
"https://gamek.mediacdn.vn/133514250583805952/2021/7/31/ta4-16277065216561416418457.jpg",
"https://preview.redd.it/kel8ynxa2k971.png?width=449&format=png&auto=webp&s=d9bfdada60d2652d81dea476c37cffdda815ddd6",
"https://i.redd.it/n9j3t4n47j271.jpg",
"https://otakukart.com/wp-content/uploads/2021/06/Screenshot-2021-06-26-234046.jpg",
"https://img.wattpad.com/cover/274422648-256-k760182.jpg",
"https://danbooru.donmai.us/data/sample/7c/c4/sample-7cc4727714ba1dc06a2c96e924ee93fb.jpg",
  ];
	 var callback = () => api.sendMessage({body:`Ảnh tokyo revengers đây \nSố Ảnh hiện có: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };