'use strict';
//shopCartController
var shopCtrl = function($scope, Data ,$stateParams){ 
    $scope.steps = $stateParams.steps;
    $scope.prods = Data[0];
    $scope.user = Data[1].addressList;
    $scope.coupons = Data[1].priceLists;
    $scope.memberCoupon = true;

    Zepto(function($){
        $(".discountPop").hide();
        $(".discountNavs li").each(function(){
            $(this).click(function(){
               var _index = $(this).index() + 1;
               $(this).addClass("current").siblings(".current").removeClass("current");
               $("#disconPop_"+_index).show().siblings(".discountPop").hide();
            });
        });
    });

    $scope.discountClose = function(){
        Zepto(function($){
            $(".current").removeClass("current");
            $(".discountPop").hide();
        });
    }



    $scope.addItems = function(){

    }

    $scope.reduceItems = function(){

    }

    // var update = function() {
    //     $scope.counter++;
    //     Data[0].price = prods.price;
    //     Data[0].piece = prods.piece;
    //     alert($scope.counter);
    // };
}