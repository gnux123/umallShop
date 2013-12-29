'use strict';
//ui-router
angular.module('umallApp')
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");  
    $stateProvider
    .state('index', {
        url: '/', 
        views: {
            'main': {
                templateUrl: 'view/main.html',
                //controller:  'mainCtrl'
            }
            // 'navs': {
            //     templateUrl: 'view/navs_main.html'
            // }
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
    .state('prodSpec', {
        url: '/prods/spec', 
        views: {
            'main': {
                templateUrl: 'view/prodSpecChoice.html',
                controller:  'prodSpecCtrl'
            },
            'navs': {
                templateUrl: 'view/navs_prod.html',
                controller: 'navsProdCtrl'
            },
        }
    })
    .state('prodComment', {
        url: '/prods/comment/:pages/:index', 
        views: {
            'main': {
                templateUrl: function($stateParams){
                    return 'view/prodcomment_'+$stateParams.pages+'.html';
                },
                controller:  'prodCommentCtrl'
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
                templateUrl: function($stateParams){
                    return 'view/shopcart_'+$stateParams.steps+'.html';
                },
                controller:  'shopCtrl'
            },
            'navs': {
                templateUrl: 'view/navs_shop.html',
                controller: 'navsProdCtrl'
            },
        }
    })
    .state('game', {
        url: '/game/:pages/', 
        views: {
            'main': 
            {
                templateUrl: function($stateParams){
                    return 'view/game_'+$stateParams.pages+'.html';
                },
                controller:  'gameCtrl'
            },
            'navs': {
                templateUrl: 'view/navs_main.html',
                controller: 'navsProdCtrl'
            },
        }
    })
    .state('member', {
        url: '/:pageName', 
        views: {
            'main': {
                templateUrl: function($stateParams){
                    return 'view/'+$stateParams.pageName+'.html';
                },
                controller: 'memCtrl'
            },
            'sideMenu': {
                templateUrl: 'view/sideMenu.html',
                controller:  'sideMenuCtrl'
            },            
            'navs': {
                templateUrl: 'view/navs_member.html',
                controller: 'navsMemberCtrl'
            }
        }
    })
});
