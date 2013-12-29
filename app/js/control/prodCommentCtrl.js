'use strict';
//prodsController
var prodCommentCtrl = function($scope, $sce ,Data, $stateParams){
    $scope.recomnList = Data[2].recommandLists;
    
    //getUrl
    $scope.gerUrl = function(){
    	return $sce.trustAsResourceUrl($scope.recomnList[$stateParams.index].website);
    }
}
