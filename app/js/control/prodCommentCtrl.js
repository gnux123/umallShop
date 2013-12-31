'use strict';
//prodsController
var prodCommentCtrl = function($scope, $sce ,Data, $stateParams){
	$scope.prods = Data[0];
    $scope.recomnList = Data[2].recommandLists;
    
    Zepto(function($){
    	var _nowH = $(window).height() - $(".navs").height();
    	$(".ifmContent").height(_nowH);
    });

    //getUrl
    $scope.gerUrl = function(){
    	return $sce.trustAsResourceUrl($scope.recomnList[$stateParams.index].website);
    }
}
