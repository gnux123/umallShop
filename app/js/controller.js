//prodsController
var prodCtrl = navsProdCtrl = function($scope, Data, $stateParams){
    $scope.prods = Data[0];
    $scope.$back = function() { 
        window.history.back();
    };
}

var prodCtrl = function($scope, Data, $stateParams){
    $scope.prods = Data[0];
    //zepto
    Zepto(function($){
        $(".more_btn a").click(function(){
            $(".priceZone, .shopCart_btn, .prodShow").toggleClass("hidein");
            $(".prod_specNavs").toggleClass("active");
            $(this).toggle($(this).text("-more"));
        });
    });
}

//shopCartController
var shopCtrl = function($scope, Data ,$stateParams){ 
    $scope.steps = $stateParams.steps;
    $scope.prods = Data[0];
    $scope.user = Data[1];
    $scope.counter = 0;

    var update = function() {
        $scope.counter++;
        Data[0].price = prods.price;
        Data[0].piece = prods.piece;
        alert($scope.counter);
    };
}

var bonusCtrl = function($scope, Data ,$stateParams){ 
    Zepto(function($){
        $(window).resize(function(){
            sizefix();
            bonusPos();
        });
        sizefix();
        //bonusPos();
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

umallApp.controller('shopCtrl',shopCtrl);
umallApp.controller('prodCtrl',prodCtrl);
umallApp.controller('bonusCtrl',bonusCtrl);
