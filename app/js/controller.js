var umallApp = angular.module('umallApp',['ui.router']);
angular.module('umallApp').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/prods");  
    $stateProvider
    .state('prods', {
        url: '/prods', 
        views: {
            'main': {
                templateUrl: 'view/prods.html'
                //controller:  'LoginCtrl',
            }
        }
    })
    .state('shop', {
        url: '/shopCart/:steps/:message', 
        views: {
            'main': {
                templateUrl: 'view/shopcart.html',
                controller:  'shopCtrl'
            }
        }
    })
});

//shopCart
var shopCtrl = function($scope, $stateParams){
    $scope.steps = $stateParams.steps;
    $scope.message = $stateParams.message;
    // console.log($stateParams.steps);
    if($scope.steps == 1){
     alert($scope.steps + "," + $scope.message);
    }
}

umallApp.controller('shopCtrl',shopCtrl);