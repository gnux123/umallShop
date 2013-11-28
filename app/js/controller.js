//prodsController
var navsProdCtrl = function($scope, Data, $stateParams){
    $scope.prods = Data[0];
    $scope.backShow = false;
    var _backLength = window.history.length;
    if(_backLength >= 2){
        //alert(_backLength);
        $scope.backShow = true;
    }else{
        $scope.backShow = false;
        return false;
    }

    //show
    $scope.$back = function() {
        window.history.back();
    };
}
var prodCtrl = function($scope, Data, $stateParams){
    $scope.prods = Data[0];
}

var prodSpecCtrl = function($scope, Data, $stateParams){
    $scope.prods = Data[0];
}

var prodCtrl = function($scope, Data, $stateParams){
    $scope.prods = Data[0];
    $scope.colorful = $scope.colorful2 = 0;
    $scope.active = false;
    $scope.btnText = "+more";
    
    $scope.prodSpecNavs = function(){
        if($scope.active == false){
            $scope.active = true;
            $scope.btnText = "-more";
        }else{
            $scope.active = false;
            $scope.btnText = "+more";
        }
    }

    $scope.prodTrans = function(){
        var specLength1 = $scope.prods.prodSpec1.length,
            specLength2 = $scope.prods.prodSpec1.length;
        if(specLength1 == 0 && specLength2 == 0){
            $scope.hashGo = "shopCart/1/";
        }else{
            $scope.hashGo = "prods/spec";
        }
    }
}

//shopCartController
var shopCtrl = function($scope, Data ,$stateParams){ 
    $scope.steps = $stateParams.steps;
    $scope.prods = Data[0];
    $scope.user = Data[1];
    $scope.memberCoupon = true;

    $scope.memberOwn = function(){
        if($scope.memberCoupon == true){
            $scope.memberCoupon = false;
        }else{
            $scope.memberCoupon = true;
        }       
    }

    $scope.addItems = function(){

    }

    $scope.reduceItems = function(){

    }

    // var update = function() {
    //     $scope.counter++;
    //     Data[0].price = prods.price;
    //     Data[0].piece = prods.piece;
    //     alert($scope.counter);
    // };
}

var bonusCtrl = function($scope, Data ,$stateParams){ 
    Zepto(function($){
        $(window).resize(function(){
            sizefix();
            bonusPos();
        });
        sizefix();
        bonusPos();
        function sizefix(){
            var _h = $(window).height(),
                _navH = $(".navs").height();
            $(".main").height(_h - _navH - 20);
        }

        function bonusPos(){
            var _bonusFrame_h = $(".bonusList").height(),
                _bonusLists_h = $(".bonusList > ul").height(),
                _bonusMargin = ((_bonusLists_h - _bonusFrame_h)/2) - 60;

            $(".bonusList > ul").css("-webkit-transform","translate3d(0,-"+_bonusMargin+"px,0)");
        }

    });
}

var gameCtrl = function($scope, Data ,$stateParams){ 
}

umallApp.controller('shopCtrl',shopCtrl);
umallApp.controller('navsProdCtrl',navsProdCtrl);
umallApp.controller('prodCtrl',prodCtrl);
umallApp.controller('bonusCtrl',bonusCtrl);
umallApp.controller('gameCtrl',gameCtrl);
umallApp.controller('prodSpecCtrl',prodSpecCtrl);
