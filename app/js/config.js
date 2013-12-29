'use strict';
var umallApp = angular.module('umallApp',['ui.router','ngRoute','ngSanitize','ngAnimate','ngTouch','duScroll']);
umallApp.filter('encodeURIComponent', function() {
  return window.encodeURIComponent;
});