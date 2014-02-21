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

    //ecouponTranslateValue
    $scope.couponValue = function(i){
        if($scope.eCoupons[i].value > 1){
           return "NT$"+$scope.eCoupons[i].value;
        }else{
            return ($scope.eCoupons[i].value*10)+"折";
        }
    }


    Zepto(function($){
        $(window).scroll(function(){
            var _y = $(this).scrollTop();
            if(_y <= 0){
                $(".priceInfo").removeClass("prFixed");               
            }
        });
        $(".discountPop").hide();
        $(".discountNavs li").each(function(){
            $(this).click(function(){
                $(".priceInfo").addClass("prFixed");

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
                if(_index == 1 || _index == 2){
                    alert("您已選擇完成，請繼續下一步驟。");
                }
                $("#payWay_"+_index).show().siblings(".payments").hide();
                
            });
        });

        var _shopH = $(window).height() - $(".navs").height() - 20;
        $(".shopFinal").css("min-height",_shopH);
    });

    $scope.discountClose = function(){
        Zepto(function($){
            $(".current").removeClass("current");
            $(".discountPop").hide();
            $(".discount_tips").show();
            $(".priceInfo").removeClass("prFixed");
        });
    }

    // var update = function() {
    //     $scope.counter++;
    //     Data[0].price = prods.price;
    //     Data[0].piece = prods.piece;
    //     alert($scope.counter);
    // };
}