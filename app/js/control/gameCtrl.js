'use strict';

var gameCtrl = function($scope, Data, $stateParams){
    $scope.gameImg = "game_0";
    $scope.change = function(){
        Zepto(function($){
            setTimeout(function(){
                $(".popup_hits").css("display","block");
            },1000);              
        });
        //$scope.gameImg = "game_1";
    }

    window.addEventListener('shake', shakeEventDidOccur, false);
    
    //define a custom method to fire when shake occurs.
    function shakeEventDidOccur () {
        Zepto(function($){
            if($stateParams.pages == 1){
                $(".main-animate").find(".wrap, .lightBall").removeClass("linear");
                $(".main-animate").find(".lightBall").addClass("lightBall-run");
               setTimeout(function(){
                    $(".popup_hits").css("display","block");
                },7000); 
            }else{
                setTimeout(function(){
                    $(".popup_hits").css("display","block");
                },1000);
            }       
        });
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
                $(".popup_hits").css("display","block");
            },10000);
        });

        function sizefix(){
            var _h = $(window).height(),
                _navH = $(".navs").height();
            $(".gameEvent").height(_h - _navH);
        }
    });

    //
    $scope.shadowCtrl = function(){
        $scope.gHelp = false;
        Zepto(function($){
            $(".gameHelp_btn").show();
            $(".shadow_bg").removeClass("showSlide");
            $(".game_notice").hide();
        });
    }
}