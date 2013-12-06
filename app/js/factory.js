'use strict';
//factory
umallApp.factory('Data', function(){
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
        piece: 1,

    },
    {
        name: "蘇靖文",
        sex: "男",
        mobile: "0987-797768",
        address: ["台北市","南港區","昆陽街95-1號6樓"],
        addressList: [
            "台北市南港區昆陽街95-1號6樓",
            "台北市大安區安南路一段33-7號4樓"
        ],
        couponLists: [
            {value:"100元", dateStart:"102/11/30", dateEnd:"102/12/03", Event:"會員專屬活動禮", eventLimte:"僅限森活價$ 600 (含)以上"},
            {value:"200元", dateStart:"102/11/30", dateEnd:"102/12/03", Event:"SOGO專屬優惠券", eventLimte:"僅限森活價$ 700 (含)以上"},
            {value:"8折", dateStart:"102/12/30", dateEnd:"103/12/30", Event:"會員專屬活動禮", eventLimte:"僅限森活價$ 800 (含)以上"},
            {value:"9折", dateStart:"102/11/30", dateEnd:"102/12/03", Event:"會員專屬活動禮-2", eventLimte:"僅限森活價$ 1000 (含)以上"}
        ]
    }];
});