'use strict';
//factory
umallApp.factory('Data', function(){
    //prodsData
    return [{
        nums: '995124662',
        img: ["images/prod_opi00.jpg","images/prod_opi01.jpg","images/prod_opi02.jpg","images/prod_opi03.jpg"],
        name: '【OPI】霓彩革命限量六色迷你組',
        pushText: '全球同步上市 2014最新色',
        subdes: '★OPI 專業級美甲指甲油<br/>★獨家專利含有天然絲胺基酸和珍貴珍珠粉<br/>★色澤飽和度達到最恆彩效果<br/>★上色後不易脫落<br/>★刷毛軟硬適中上色更完美',
        gifts: 'SPA維他命強韌護甲油',
        parts: '清新花香卸指甲油化妝棉',
        specDetail: "「美國原裝進口‧網路經銷直營‧品質保證，請消費者安心購買」 <br/>˙產品容量:指甲油3.75ml*6 <br/>˙保存期限:3年 <br/>˙製造日期:詳見瓶底/瓶身/盒身 <br/>˙製 造 廠:美國OPI Products Inc.，N.Hollywood，CA USA",
        priceSpecial: "950",
        priceOrg: "1,200",
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
            {value:"NT$ 100", dateStart:"102/11/30", dateEnd:"102/12/03", Event:"會員專屬活動禮", eventLimte:"僅限森活價NT$ 600 (含)以上", ticketNum: "560001124"},
            {value:"NT$ 200", dateStart:"102/11/30", dateEnd:"102/12/03", Event:"SOGO專屬優惠券", eventLimte:"僅限森活價NT$ 700 (含)以上", ticketNum: "560001123"},
            {value:"8折", dateStart:"102/12/30", dateEnd:"103/12/30", Event:"會員專屬活動禮", eventLimte:"僅限森活價NT$ 800 (含)以上", ticketNum: "560001122"},
            {value:"9折", dateStart:"102/11/30", dateEnd:"102/12/03", Event:"會員專屬活動禮-2", eventLimte:"僅限森活價NT$ 1000 (含)以上", ticketNum: "560001121"}
        ],
        priceLists: [
            {bonusPrice: "6000", startDate:"102/11/30", endDate:"102/12/11"},
            {discountPrice: "300", startDate:"102/10/30", endDate:"102/12/01"}
        ]
    },
    //recommandData
    {
        recommandLists: [
            {cate:"新聞",title:"瑪麗亞凱莉2013性感新作 OPI珠光磨砂限量版",subDes:"名人也愛用",from:"ETtoday",website:"http://m.ettoday.net/news/20130226/167924.htm"},
            {cate:"達人推薦",title:"聖誕樹聖誕紅還有麋鹿 各色聖誕節指彩特蒐",subDes:"指尖也要繽紛聖誕節",from:"妞新聞",website:"http://www.niusnews.com/=P2z6q6u4"},
            {cate:"達人推薦",title:"指彩 知性 優雅 浪漫 時尚",subDes:"這些顏色 不買有點對不起自己><”",from:"PIXNET",website:"http://shockisgood.pixnet.net/blog/post/26015807-%E7%9F%A5%E6%80%A7%E7%9A%84%E3%80%81%E5%84%AA%E9%9B%85%E7%9A%84%E3%80%81%E6%B5%AA%E6%BC%AB%E7%9A%84%E3%80%81%E6%99%82%E5%B0%9A%E7%9A%84%E3%80%82opi%E3%80%82f16%E3%80%8E"},
            {cate:"開箱文",title:"O.P.I 限量18K金箔指甲油'不開箱文'",subDes:"快開快開(急)",from:"mobile01",website:"http://m.mobile01.com/topicdetail.php?f=371&t=3024642"},
            {cate:"鄉民推薦",title:"網路上買OPI指甲油疑問",subDes:"原來可能用到山寨版(驚..)",from:"mobile01",website:"http://m.mobile01.com/topicdetail.php?f=373&t=1794715#4"},
            {cate:"品牌故事",title:"品牌經典商品25強爭霸賽-OPI之指甲油",subDes:"難怪OPI讓女生如此著迷",from:"BeautyPlus",website:"http://beautyplus.iswii.net/special-report/story/31450"},
        ]
    }];
});