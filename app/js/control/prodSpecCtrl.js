'use strict';
var prodSpecCtrl = function($scope, Data, $stateParams){
    $scope.prods = Data[0];

    $scope.choice = function(){
    	alert("您已選擇完成，請繼續下一步驟。");
    }

}