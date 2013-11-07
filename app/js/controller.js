'use strict';
angular.module('umallApp',['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");  
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
    .state('shopFirst', {
        url: '/shopCartFirst', 
        views: {
            'main': {
                templateUrl: 'view/prods.html'
                //controller:  'LoginCtrl',
            }
        }
    })
});