'use strict';
//prodsController
var memCtrl = function($scope, Data, $stateParams){
    $scope.prods = Data[0];
    $scope.user = Data[1]; //userData
    $scope.currentIndex = 0;
    
    Zepto(function($){
    	detectWindow();
    	$(window).resize(function(){ detectWindow(); });

    	function detectWindow(){
    		var _h = $(window).height() - 46;
    		$(".sideMenu").height(_h + 46);
    		$(".memberPage").height(_h+46);
    		$(".memberPage .main").css("min-height",_h-46);
    		$(".memberPage .main > div").height(_h-16);
    	}
    });


    //bonus
    $scope.isCurrentCouponIndex = function (index) { return $scope.currentIndex === index; };

    $scope.prevCoupon = function () {
        $scope.currentIndex = ($scope.currentIndex < $scope.user.couponLists.length - 1) ? ++$scope.currentIndex : 0;
    };
    $scope.nextCoupon = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.user.couponLists.length - 1;
    };


    Zepto(function($){
        $(window).resize(function(){
            sizefix();
            bonusPos();
        });
        sizefix();
        bonusPos();
        function sizefix(){
            var _h = $(window).height(),
                _navH = $(".navs").height();
            $(".bonusPage").height(_h - _navH - 20);
        }

        function bonusPos(){
            var _bonusFrame_h = $(".bonusList").height(),
                _bonusLists_h = $(".bonusList > ul").height(),
                _bonusMargin = ((_bonusLists_h - _bonusFrame_h)/2) - 60;

            $(".bonusList > ul").css("-webkit-transform","translate3d(0,-"+_bonusMargin+"px,0)");
        }

    });
}