'use strict';
//shopCartController
var shopCtrl = function($scope, Data ,$stateParams){ 
    $scope.steps = $stateParams.steps;
    $scope.prods = Data[0];
    $scope.user = Data[1].addressList;
    $scope.coupons = Data[1].priceLists;
    $scope.eCoupons = Data[1].couponLists;
    $scope.memberCoupon = true;
    $scope.bonusPrice = $scope.coupons[0].bonusPrice;
    Zepto(function($){
        $(".discountPop").hide();
        $(".discountNavs li").each(function(){
            $(this).click(function(){
               var _index = $(this).index() + 1;
               $(this).addClass("current").siblings(".current").removeClass("current");
               $("#disconPop_"+_index).show().siblings(".discountPop").hide();
            });
        });

        $(".payments").hide();
        $(".payments").first().show();
        $(".paymentWay li").each(function(){
            $(this).click(function(){
                var _index = $(this).index()+1;
                $("#payWay_"+_index).show().siblings(".payments").hide();
            });
        });
    });

    $scope.discountClose = function(){
        Zepto(function($){
            $(".current").removeClass("current");
            $(".discountPop").hide();
        });
    }


    // var update = function() {
    //     $scope.counter++;
    //     Data[0].price = prods.price;
    //     Data[0].piece = prods.piece;
    //     alert($scope.counter);
    // };
}