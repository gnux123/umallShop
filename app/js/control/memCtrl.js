'use strict';
//prodsController
var memCtrl = function($scope, Data, $stateParams){
    $scope.prods = Data[0];
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
    		var _h = $(window).height() - 46,
                nav_h = $(".navs").height();
    		$(".sideMenu").height(_h + nav_h);
    		$(".memberPage").height(_h+nav_h);
    		$(".memberPage .main").css("min-height",_h-nav_h);
    		$(".memberPage .main > div").height(_h-nav_h);

            $(".bonusPage").height(_h - nav_h + 27);
    	}

        function bonusPos(){
            var _bonusFrame_h = $(".bonusList").height(),
                _bonusLists_h = $(".bonusList > ul").height(),
                _bonusMargin = ((_bonusLists_h - _bonusFrame_h)/2) - 60;
            $(".bonusList > ul").css("-webkit-transform","translate3d(0,-"+_bonusMargin+"px,0)");
        }
    });

    //bonusChange
    $scope.bonusChange = function(){
        Zepto(function($){
            $(".mask, .bonusPop").show();

        });
    }

    $scope.maskHide = function(){
        Zepto(function($){
            $(".mask, .bonusPop").hide();
        });        
    }


    //bonus
    $scope.isCurrentCouponIndex = function (index) { return $scope.currentIndex === index; };

    $scope.prevCoupon = function () {
        $scope.currentIndex = ($scope.currentIndex < $scope.user.couponLists.length - 1) ? ++$scope.currentIndex : 0;
    };
    $scope.nextCoupon = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.user.couponLists.length - 1;
    };
}