'use strict';

umallApp.directive('scrollPosition', function($window) {
  return {
    scope: {
      scroll: '=scrollPosition'
    },
    link: function(scope, element, attrs) {
      var windowEl = angular.element($window);
      var handler = function() {
        scope.scroll = windowEl.scrollTop();
      }
      windowEl.on('scroll', scope.$apply.bind(scope, handler));
      handler();
    }
  };
});


umallApp.controller('shopCtrl',shopCtrl);
umallApp.controller('navsProdCtrl',navsProdCtrl);
umallApp.controller('prodCtrl',prodCtrl).animation('.slide-animation', function () {
    return {
        addClass: function (element, className, done) {
            if (className == 'ng-hide') {
                //TweenMax.to(element, 0.5, {left: -element.parent().width(), onComplete: done });
            }
            else {
                done();
            }
        },
        removeClass: function (element, className, done) {
            if (className == 'ng-hide') {
                element.removeClass('ng-hide');

                //TweenMax.set(element, { left: element.parent().width() });
                //TweenMax.to(element, 0.5, {left: 0, onComplete: done });
            }
            else {
                done();
            }
        }
    };
});

umallApp.controller('gameCtrl',gameCtrl);
umallApp.controller('prodSpecCtrl',prodSpecCtrl);
umallApp.controller('prodCommentCtrl',prodCommentCtrl);

//umallMember
umallApp.controller('memCtrl',memCtrl);
umallApp.controller('sideMenuCtrl',sideMenuCtrl);
umallApp.controller('navsMemberCtrl',navsMemberCtrl);
