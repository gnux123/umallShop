'use strict';
//shopCartController
var shopCtrl = function($scope, Data ,$stateParams){ 
    $scope.steps = $stateParams.steps;
    $scope.prods = Data[0];
    $scope.user = Data[1];
    $scope.memberCoupon = true;

    $scope.memberOwn = function(){
        if($scope.memberCoupon == true){
            $scope.memberCoupon = false;
        }else{
            $scope.memberCoupon = true;
        }       
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