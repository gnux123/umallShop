'use strict';
//prodsController
var navsMemberCtrl = function($scope, Data, $stateParams){
    //$scope.prods = Data[0];
    //$scope.sideMenu = false;
    $scope.eCoupons = Data[1].couponLists;

   	$scope.sideBar = function() {
   		Zepto(function($){
   			$(".memberPage").toggleClass("sideShow");
   		});
   	}

   	//pageNames
   	$scope.memPageName = function(){
   		switch($stateParams.pageName){
   			case 'login':
   				return '<div class="logo"><img src="images/SS LOGO.png"></div>';
   			break;
   			case 'graphic':
   				return '<div class="memTitle">會員資料</div>';
   			break;
   			case 'history':
   				return '<div class="memTitle">交易記錄</div>';
   			break;
   			case 'bonus':
   				return '<div class="memTitle">我的折價券<span>'+$scope.eCoupons.length+'</span></div>';
   			break;
   			case 'userguide':
   				return '<div class="memTitle">使用說明</div>';
   			break;
   		}
   	}

}