'use strict';
//prodsController
var loginCtrl = function($scope, Data, $stateParams){
    $scope.prods = Data[0];

    Zepto(function($){
    	detectWindow();
    	$(window).resize(function(){ detectWindow(); });

    	function detectWindow(){
    		var _h = $(window).height() - 46;
    		$(".sideMenu").height(_h + 46);
    		$(".memberPage").height(_h+46);
    		$(".memberPage .main").css("min-height",_h-46);
    		$(".memberPage .main > div").height(_h-16);
    	}
    });
}