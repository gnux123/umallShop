'use strict';
var umallApp = angular.module('umallApp',['ui.router','ngSanitize','ngAnimate','ngTouch']);
// umallApp.directive('appViewControl', function() {
// 	return {
// 		restrict: 'AEC',
// 		controller: function() {
// 			Zepto(function($){
// 		        sizefix();
// 		        $(window).resize(function(){sizefix();};
		        
// 		        function sizefix(){
// 		            var _h = $(window).height(),
// 		                _navH = $(".navs").height();
// 		            $(".gameEvent").height(_h - _navH);
// 		        }

// 			});
// 		}
// 	}
// });