'use strict';
//factory
umallApp.factory('Data', function(){
    //prodsData
    return [{
        nums: '995072314',
        img: ["http://img1.u-mall.com.tw/UserFiles/Product/00402/00402155/e8d44f44-4136-456d-b7f7-a9fc519da7bc.jpg",
        "http://img1.u-mall.com.tw/UserFiles/Product/00402/00402154/847b5a4e-788b-4d16-86ff-035bcbe94a0c.jpg",
        "http://img1.u-mall.com.tw/UserFiles/Product/00402/00402156/43e88c1e-d1ef-4e3e-903a-edeed3b23d8c.jpg"],
        name: '摩洛哥綠色塔金鍋',
        pushText: '好吃又不會跳針!!目前預購中喔~',
        subdes: '★日本HARIO原裝進口★耐熱玻璃耐熱溫度差120℃★特殊耐熱透明玻璃上蓋，可看出烹煮變化',
        gifts: '鍋子/卡式爐/瓦斯罐*3',
        parts: '鍋蓋/鍋體/說明書',
        specDetail: '產品名稱: SCANPAN Tagine 思康經典塔吉鍋 28CM<br>產品編號:SC2835T 產品材質:鈦合金陶瓷複合鋁/陶瓷 產品產地:丹麥 產品尺寸:湯鍋直徑28公分 配備：平底鍋蓋X1 塔吉陶瓷鍋蓋X1',
        priceSpecial: "1,900",
        priceOrg: "2,775",
        prodSpec1: ["紅","橙","綠","黃","藍","靛","紫"],
        prodSpec2: ["S","M","L","XL","2XL","3XL"],
        piece: 1

    },
    //userData
    {
        addressList: [
            {name:"蘇小文",sex:"男",mobile:"0987-797768",zip:"11599",city:"台北市",area:"南港區",address:"昆陽街95-1號6樓"},
            {name:"王小三",sex:"男",mobile:"0987-797768",zip:"11599",city:"台北市",area:"南港區",address:"昆陽街95-1號6樓"},
            {name:"李姍姍",sex:"女",mobile:"0987-797768",zip:"11599",city:"台北市",area:"南港區",address:"昆陽街95-1號6樓"}
        ],
        couponLists: [
            {value:"100元", dateStart:"102/11/30", dateEnd:"102/12/03", Event:"會員專屬活動禮", eventLimte:"僅限森活價$ 600 (含)以上", ticketNum: "560001124"},
            {value:"200元", dateStart:"102/11/30", dateEnd:"102/12/03", Event:"SOGO專屬優惠券", eventLimte:"僅限森活價$ 700 (含)以上", ticketNum: "560001123"},
            {value:"8折", dateStart:"102/12/30", dateEnd:"103/12/30", Event:"會員專屬活動禮", eventLimte:"僅限森活價$ 800 (含)以上", ticketNum: "560001122"},
            {value:"9折", dateStart:"102/11/30", dateEnd:"102/12/03", Event:"會員專屬活動禮-2", eventLimte:"僅限森活價$ 1000 (含)以上", ticketNum: "560001121"}
        ],
        priceLists: [
            {bonusPrice: "6000", startDate:"102/11/30", endDate:"102/12/11"},
            {discountPrice: "300", startDate:"102/10/30", endDate:"102/12/01"}
        ]
    },
    //recommandData
    {
        recommandLists: [
            {title:"關於OPI的由來",subDes:"",from:"台灣OPI總代理",website:"http://www.opi-nail.com.tw/h_about/"},
            {title:"OPI不含BBP、DBP、DEHP、DNOP、DIDP、DINP六種塑化劑,請安心使用!",subDes:"",from:"facebook",website:"https://www.facebook.com/note.php?note_id=10150277961466013"},
            {title:"瑪麗亞凱莉2013性感新作 OPI珠光磨砂限量版",subDes:"【名人也愛用】",from:"ETtoday",website:"http://www.ettoday.net/news/20130226/167924.htm"},
            {title:"聖誕樹聖誕紅還有麋鹿 各色聖誕節指彩特蒐",subDes:"指尖也要繽紛聖誕節",from:"妞新聞",website:"http://www.niusnews.com/=P2z6q6u4"},
            {title:"指彩 知性 優雅 浪漫 時尚",subDes:"這些顏色 不買有點對不起自己><”",from:"PIXNET",website:"http://shockisgood.pixnet.net/blog/post/26015807-%E7%9F%A5%E6%80%A7%E7%9A%84%E3%80%81%E5%84%AA%E9%9B%85%E7%9A%84%E3%80%81%E6%B5%AA%E6%BC%AB%E7%9A%84%E3%80%81%E6%99%82%E5%B0%9A%E7%9A%84%E3%80%82opi%E3%80%82f16%E3%80%8E"},
            {title:"O.P.I 限量18K金箔指甲油'不開箱文'",subDes:"快開快開(急)",from:"mobile01",website:"http://www.mobile01.com/topicdetail.php?f=371&t=3024642"},
            {title:"網路上買OPI指甲油疑問",subDes:"原來可能用到山寨版(驚..)",from:"mobile01",website:"http://www.mobile01.com/topicdetail.php?f=373&t=1794715#4"},
            {title:"品牌經典商品25強爭霸賽-OPI之指甲油",subDes:"難怪OPI讓女生如此著迷",from:"BeautyPlus",website:"http://beautyplus.iswii.net/special-report/story/31450"},
            {title:"上班族OL的NG指甲油顏色",subDes:"我先去卸掉 溜~~~",from:"宅宅新聞",website:"http://news.gamme.com.tw/188354"},
            {title:"文青女孩 手繪指彩3款",subDes:"水啦~",from:"蘋果日報",website:"http://www.appledaily.com.tw/appledaily/article/supplement/20131220/"}
        ]
    }];
});