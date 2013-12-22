'use strict';
//prodsController
var navsMemberCtrl = function($scope, Data, $stateParams){
    //$scope.prods = Data[0];
    //$scope.sideMenu = false;

   	$scope.sideBar = function() {
   		Zepto(function($){
   			$(".memberPage").toggleClass("sideShow");
   		});
   	}
}