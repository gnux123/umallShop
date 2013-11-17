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
                //controller:  'mainCtrl'
            },
            'navs': {
                templateUrl: 'view/navs_main.html'
            }
        }
    })
    .state('prods', {
        url: '/prods', 
        views: {
            'main': {
                templateUrl: 'view/prods.html',
                controller:  'prodCtrl'
            },
            'navs': {
                templateUrl: 'view/navs_prod.html',
                controller: 'navsProdCtrl'
            },
        }
    })
    .state('shop', {
        url: '/shopCart/:steps/', 
        views: {
            'main': {
                templateUrl: 'view/shopcart.html',
                controller:  'shopCtrl'
            },
            'navs': {
                templateUrl: 'view/navs_prod.html',
                controller: 'navsProdCtrl'
            },
        }
    })
});


//factory
umallApp.factory('Data', function(){
    return [{
        nums: '901122345',
        img: 'http://img2.u-mall.com.tw/UserFiles/Product/00470/00470304/26ad40e9-227c-44b1-acde-268123ce3c64.jpg',     
        name: '六圓環生技特級納豆營養素六盒',
        pushText: '好吃又不會跳針!!目前預購中喔~',
        subdes: '閃購模式又稱限時搶購模式，起源於法國網站Vente Privée。閃購模式即是以互聯網為媒介的B2C電子零售交易活動',
        priceSpecial: "3,000",
        priceOrg: "6,000",
        prodSpec1: ["紅","橙","綠","黃","藍","靛","紫"],
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
var prodCtrl = navsProdCtrl = function($scope, Data, $stateParams){
    $scope.prods = Data[0];
    $scope.$back = function() { 
        window.history.back();
    };
}

var prodCtrl = function($scope, Data, $stateParams){
    $scope.prods = Data[0];
    //zepto
    Zepto(function($){
        $(".more_btn a").click(function(){
            $(".priceZone, .shopCart_btn, .prodShow").toggleClass("hidein");
            $(".prod_specNavs").toggleClass("active");
            $(this).toggle($(this).text("-more"));
        });
    });
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
