'use strict';

var gameCtrl = function($scope, Data ,$stateParams){
    $scope.gameImg = "game_0";
    $scope.change = function(){
        $scope.gameImg = "game_1";
    }

   Zepto(function($){

        sizefix();
        $(window).resize(function(){sizefix();});



        // var $value = 8,
        //     _deg = ($value*45)*-1;
        // $.fn.addKeyframe([{
        //     name: "board-main-run",
        //     "from":$.keyframe.browserCode()+"transform:rotate(0deg)",
        //     "to":$.keyframe.browserCode()+"transform:rotate("+(1800+_deg)+"deg)",
        // }]);


        $("a.blackCircle").on('click',function(){
            // alert(1);
            $(".main-animate").find(".wrap, .lightBall").removeClass("linear");
            $(".main-animate").find(".lightBall").addClass("lightBall-run");
            // $(".main-animate").find(".wrap").playKeyframe({
            //     name: 'board-main-run',
            //     timingFunction:'ease',
            //     repeat:'1',
            //     duration:'8000',
            //     direction:'normal',
            //     fillMode: 'forwards',
            //     delay: 0
            // });
            //$(".main-animate").find(".blackCircle").addClass("blackCircle-run");
            setTimeout(function(){
                $(".popup").css("display","block");
            },7000);
        });

        function sizefix(){
            var _h = $(window).height(),
                _navH = $(".navs").height();
            $(".gameEventr").height(_h - _navH - 20);
        }
    })
}