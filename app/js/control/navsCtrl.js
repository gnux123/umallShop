'use strict';
//prodsController
var navsCtrl = function($scope, Data, $stateParams){
    $scope.prods = Data[0];
    $scope.eCoupons = Data[1].couponLists;
    $scope.backShow = false;
    var _backLength = window.history.length;
    if(_backLength >= 2){
        $scope.backShow = true;
    }else{
        $scope.backShow = false;
        return false;
    }

    //show
    $scope.$back = function() {
        window.history.back();
    };

    //gameHelp
    $scope.gameHelp = function() {
        Zepto(function($){
            $(".gameHelp_btn").hide();
            $(".shadow_bg").addClass("showSlide");
            $(".game_notice").show();
        });
    }

    //MemberNav
    $scope.sideBar = function() {
        Zepto(function($){
            $(".memberPage").toggleClass("sideShow");
        });
    }

    //MemberNavPageNames
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