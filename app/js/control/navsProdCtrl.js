'use strict';
//prodsController
var navsProdCtrl = function($scope, Data, $stateParams){
    $scope.prods = Data[0];
    $scope.backShow = false;
    var _backLength = window.history.length;
    if(_backLength >= 2){
        $scope.backShow = true;
    }else{
        $scope.backShow = false;
        return false;
    }

    //pageName

    //show
    $scope.$back = function() {
        window.history.back();
    };

    //gameHelp
    $scope.gameHelp = function() {
        Zepto(function($){
            $(".gameHelp_btn").hide();
            $(".shadow_bg").addClass("showSlide");
            $(".game_notice").show();
        });
    }
}