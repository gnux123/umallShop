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


    if($scope.eCoupons.length == 0){
        $scope.couponHide = true;
    }else{
        $scope.couponHide = false;
    }

    Zepto(function($){
        $(".discountPop").hide();
        $(".discountNavs li").each(function(){
            $(this).click(function(){
                var _index = $(this).index() + 1;
                $(".discount_tips").hide();
                $(this).addClass("current").siblings(".current").removeClass("current");
                $("#disconPop_"+_index).show().siblings(".discountPop").hide();

                if(_index == 1){
                    $(".couponNums").hide();
                }
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
            $(".discount_tips").show();
        });
    }

    // var update = function() {
    //     $scope.counter++;
    //     Data[0].price = prods.price;
    //     Data[0].piece = prods.piece;
    //     alert($scope.counter);
    // };
}