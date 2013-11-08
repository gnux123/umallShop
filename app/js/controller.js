var umallApp = angular.module('umallApp',['ui.router']);
angular.module('umallApp').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/prods");  
    $stateProvider
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
        url: '/shopCart/:steps/:name/:price', 
        views: {
            'main': {
                templateUrl: 'view/shopcart.html',
                controller:  'shopCtrl'
            }
        }
    })
});

//prodsController
var prodCtrl = function($scope, $stateParams){
    $scope.prods = {
        name: '六圓環生技特級納豆營養素六盒', 
        subdes: '閃購模式又稱限時搶購模式，起源於法國網站Vente Privée。閃購模式即是以互聯網為媒介的B2C電子零售交易活動，以限時特賣的形式，定期定時推出國際知名品牌的商品，一般以原價1-5折的價格供專屬會員限時搶購，每次特賣時間持續5-10天不等',
        price: 400000000
    };

    //$scope.prods.price = $stateParams.price;
    //console.log($scope.prods.price);

}

//shopCartController
var shopCtrl = function($scope, $stateParams){
    $scope.steps = $stateParams.steps;
    $scope.name = $stateParams.name;
    $scope.price = $stateParams.price;
    // console.log($stateParams.steps);
    // if($scope.steps == 1){
    //  alert($scope.steps + "," + $scope.message);
    // }

    //alert($scope.name + "," + $scope.price);
}

umallApp.controller('shopCtrl',shopCtrl);
umallApp.controller('prodCtrl',prodCtrl);