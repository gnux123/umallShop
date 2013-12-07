'use strict';
var prodCtrl = function($scope, Data, $stateParams, $location, $anchorScroll, scroller){
    $scope.prods = Data[0];
    $scope.colorful = $scope.colorful2 = 0;
    $scope.active = false;
    $scope.goTo = "prodGifts";
    $scope.currentIndex = 0;

    $scope.setCurrentSlideIndex = function (index) { $scope.currentIndex = index; };

    $scope.isCurrentSlideIndex = function (index) { return $scope.currentIndex === index; };

    $scope.prevSlide = function () {
        $scope.currentIndex = ($scope.currentIndex < $scope.prods.img.length - 1) ? ++$scope.currentIndex : 0;
    };

    $scope.nextSlide = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.prods.img.length - 1;
    };


    $scope.prodSpecNavs = function($window){
        //scrollTo
        if($scope.active == false){
            $scope.active = true;
            var _y = document.getElementById("prodGifts").getBoundingClientRect().top;
            scroller.scrollTo(0, _y, 1000);
        }else{
            $scope.active = false;
            scroller.scrollTo(0, 0, 1000);
        }


        // function getScrollOffsets(w) {
 
        //     // Use the specified window or the current window if no argument 
        //     w = w || window;
 
        //     // This works for all browsers except IE versions 8 and before
        //     if (w.pageXOffset != null) return {
        //         x: w.pageXOffset,
        //         y: w.pageYOffset
        //     };
 
        //     // For IE (or any browser) in Standards mode
        //     var d = w.document;
        //     if (document.compatMode == "CSS1Compat") {
        //         return {
        //             x: d.documentElement.scrollLeft,
        //             y: d.documentElement.scrollTop
        //         };
        //     }
 
        //     // For browsers in Quirks mode
        //     return {
        //         x: d.body.scrollLeft,
        //         y: d.body.scrollTop
        //     };
        // }

        // angular.element($window).bind("scroll", function () {
        //     var offset = getScrollOffsets($window);
        //      if (offset.y >= 10) {
        //          $scope.active = false;
        //          alert(1);
        //      } else {
        //          $scope.active = true;
        //          alert(2);
        //      }
        //     scope.$apply();
        // });
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