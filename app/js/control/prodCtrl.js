//'use strict';
var prodCtrl = function($scope, $document, Data, $location, $stateParams){
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

    //
    Zepto(function($){
        // $(window).scrollTop(0,0);
        $(window).scroll(function(){
            // $(".recommands_zone").css({
            //    'position':'fixed',
            //    'top':'-200px'     
            // });
            var _y = $(this).scrollTop();
            if(_y >= 60){
                $(".recommands_zone").addClass("fixed");
                // $(".recommands_zone").css({
                //     "position":"fixed",
                //     "-webkit-transition":"0s",
                //     "-webkit-transform":"translate3d(0,0,0)",
                //     "z-index":"3"
                // });
            }else if(_y < 60){
                $(".recommands_zone").removeClass("fixed");
                // $(".recommands_zone").css({
                //     "position":"relative"                 
                // });    
            }

            // // alert('SCROLLING!');
            // var stopListener = $(window).mouseup(function(){ // listen to mouse up
            //     // alert('STOPPED SCROLLING!');
            //     stopListner(); // Stop listening to mouse up after heard for the first time

            // });
        });
    });


    //popUp alert
    $(".alertPop").hide();
    $scope.alertOpen = function() { $(".alertPop").show();}
    $scope.alertClose = function() { $(".alertPop").hide(); }
}
