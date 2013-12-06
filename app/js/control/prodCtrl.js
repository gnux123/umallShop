'use strict';
var prodCtrl = function($scope, Data, $stateParams, $location, $anchorScroll){
    $scope.prods = Data[0];
    $scope.colorful = $scope.colorful2 = 0;
    $scope.active = false;
    $scope.btnText = "+more";
    $scope.currentIndex = 0;

    $scope.setCurrentSlideIndex = function (index) { $scope.currentIndex = index; };

    $scope.isCurrentSlideIndex = function (index) { return $scope.currentIndex === index; };

    $scope.prevSlide = function () {
        $scope.currentIndex = ($scope.currentIndex < $scope.prods.img.length - 1) ? ++$scope.currentIndex : 0;
    };

    $scope.nextSlide = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.prods.img.length - 1;
    };


    $scope.prodSpecNavs = function(){


        if($scope.active == false){
            $scope.active = true;
            //$scope.btnText = "-more";
            $location.hash("prodGifts");
            $anchorScroll();
        }else{
            $scope.active = false;
            //$scope.btnText = "+more";
            $location.hash("pageView");
            $anchorScroll();
        }
    }

    $scope.prodTrans = function(){
        var specLength1 = $scope.prods.prodSpec1.length,
            specLength2 = $scope.prods.prodSpec1.length;
        if(specLength1 == 0 && specLength2 == 0){
            $scope.hashGo = "shopCart/1/";
        }else{
            $scope.hashGo = "prods/spec";
        }
    }
}