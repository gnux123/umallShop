'use strict';
//prodsController
var sideMenuCtrl = function($scope, Data, $stateParams){
    $scope.prods = Data[0];
    $scope.menuChoice = function() {
    	var now_text = $stateParams.pageName;
        alert(now_text);
    }

}