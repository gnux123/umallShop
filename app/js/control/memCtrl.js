'use strict';
//prodsController
var memCtrl = function($scope, Data, $stateParams){
    $scope.prods = Data[0];
    $scope.eCoupons = Data[1].couponLists;
    $scope.user = Data[1]; //userData
    $scope.currentIndex = 0;

    Zepto(function($){
    	detectWindow();
        bonusPos();
    	
        $(window).resize(function(){ 
            detectWindow(); 
            bonusPos();
        });

    	
        function detectWindow(){
    		var _h = $(window).height(),
                nav_h = $(".navs").height();
            //alert(_h+","+nav_h);
    		$(".memberPage").height(_h);
    		$(".memberPage .main").css("min-height",_h - nav_h);
    		$(".memberPage .main > div").height(_h - nav_h);

            $(".bonusPage").height(_h - (nav_h+20));
    	}


        function bonusPos(){
            var _bonusFrame_h = $(".bonusList").height(),
                _bonusLists_h = $(".bonusList > ul").height(),
                _bonusMargin = ((_bonusLists_h - _bonusFrame_h)/2) - 60;
            $(".bonusList > ul").css("-webkit-transform","translate3d(0,-"+_bonusMargin+"px,0)");
        }
    });

    //ecouponTranslateValue
    $scope.couponValue = function(i){
        if($scope.eCoupons[i].value > 1){
           return "NT$"+$scope.eCoupons[i].value;
        }else{
            return ($scope.eCoupons[i].value*10)+"折";
        }
    }

    //bonusChange
    $scope.bonusChange = function(){
        Zepto(function($){ $(".mask, .bonusPop").show(); });
    }

    $scope.maskHide = function(){
        Zepto(function($){ $(".mask, .bonusPop").hide(); });        
    }


    //bonus
    $scope.isCurrentCouponIndex = function (index) { return $scope.currentIndex === index; };

    $scope.prevCoupon = function () {
        $scope.currentIndex = ($scope.currentIndex < $scope.user.couponLists.length - 1) ? ++$scope.currentIndex : 0;
    };
    $scope.nextCoupon = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.user.couponLists.length - 1;
    };

    $scope.alert = function(){
        alert("此功能尚在建置中。");
    }

    $(".Pop").hide();
    $scope.alertOpen = function() {
        $(".Pop").show().siblings(".Pop").hide();         
    }
    $scope.alertClose = function() {
        $(".Pop").hide();   
    }

}