//'use strict';
var prodCtrl = function($scope, $document, Data, $location, $stateParams, scroller){
    $scope.prods = Data[0];
    $scope.colorful = $scope.colorful2 = 0;
    $scope.active = false;
    $scope.goTo = "prodGifts";
    $scope.hashGo = "prods/spec";
    $scope.currentIndex = 0;
    $scope.moreIcon = "fa-plus";

    //prodToCart
    $scope.prodTrans = function(){
        var specLength1 = $scope.prods.prodSpec1.length,
            specLength2 = $scope.prods.prodSpec1.length;
        if(specLength1 == 0 && specLength2 == 0){
            $scope.hashGo = "shopCart/1/";
            // alert($scope.hashGo);
        }else{
            $scope.hashGo = "prods/spec";
            // alert($scope.hashGo);
        }
    }

    //prodImgSlide
    $scope.setCurrentSlideIndex = function (index) { $scope.currentIndex = index; };
    $scope.isCurrentSlideIndex = function (index) { return $scope.currentIndex === index; };
    $scope.prevSlide = function () {
        $scope.currentIndex = ($scope.currentIndex < $scope.prods.img.length - 1) ? ++$scope.currentIndex : 0;
    };
    $scope.nextSlide = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.prods.img.length - 1;
    };

    //scrollTo
    $scope.prodSpecNavs = function(){
        if($scope.active == false){
            $scope.active = true;
            var _y = document.getElementById("prodGifts").getBoundingClientRect().top;
            scroller.scrollTo(0, _y, 1000);
            $scope.moreIcon = "fa-minus";
        }else{
            $scope.active = false;
            $scope.moreIcon = "fa-plus";
            scroller.scrollTo(0, 0, 1000);
        }
    }

    $scope.scroll = $($document).scroll();
    $scope.$watch('scroll', function(newValue) {
        console.log(newValue);
    });
}
