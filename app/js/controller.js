var umallApp = angular.module('umallApp',['ui.router']);
//ui-router
angular.module('umallApp').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/index");  
    $stateProvider
    .state('index', {
        url: '/index', 
        views: {
            'main': {
                templateUrl: 'view/main.html',
                controller:  'mainCtrl',
            }
        }
    })
    .state('prods', {
        url: '/prods', 
        views: {
            'main': {
                templateUrl: 'view/prods.html',
                controller:  'prodCtrl',
            }
        }
    })
    .state('shop', {
        url: '/shopCart/:steps/', 
        views: {
            'main': {
                templateUrl: 'view/shopcart.html',
                controller:  'shopCtrl'
            }
        }
    })
});


//factory
umallApp.factory('Data', function(){
    return [{
        img: 'http://img2.u-mall.com.tw/UserFiles/Product/00470/00470304/26ad40e9-227c-44b1-acde-268123ce3c64.jpg',     
        name: '六圓環生技特級納豆營養素六盒', 
        subdes: '閃購模式又稱限時搶購模式，起源於法國網站Vente Privée。閃購模式即是以互聯網為媒介的B2C電子零售交易活動，以限時特賣的形式，定期定時推出國際知名品牌的商品，一般以原價1-5折的價格供專屬會員限時搶購，每次特賣時間持續5-10天不等',
        priceSpecial: 3000,
        priceOrg: 6000,
        prodSpec1: ["紅","綠","黃"],
        prodSpec2: ["S","M","L","XL","2XL","3XL"],
        piece: 1
    },
    {
        name: "蘇靖文",
        sex: "男",
        mobile: "0987-797768"
    }];
});

//prodsController
var prodCtrl = function($scope, Data, $stateParams){
    $scope.prods = Data[0];
}

//shopCartController
var shopCtrl = function($scope, Data ,$stateParams){ 
    $scope.steps = $stateParams.steps;
    $scope.prods = Data[0];
    $scope.user = Data[1];
    $scope.counter = 0;




    var update = function() {
        $scope.counter++;
        Data[0].price = prods.price;
        Data[0].piece = prods.piece;
        alert($scope.counter);
    };
}

umallApp.controller('shopCtrl',shopCtrl);
umallApp.controller('prodCtrl',prodCtrl);
