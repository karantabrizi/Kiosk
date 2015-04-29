app.controller("myCtrl", function($scope, $location) {
    $scope.mycid = $location.search().mycid;
    $scope.visible=false;
    $scope.coupons = [
        {"id":"1", "code":"ABCDEFGH", "discount":"20%", "title":"EXTRA 20% OFF ", "subtitle":"WITH JCP CARD PURCHASE", "expiration":"Valid 4/27-5/17"},
        {"id":"2", "code":"EFGHHIJK", "discount":"10%", "title":"$15 BONUS CASH", "subtitle":"WHEN YOU SPEND $50 OR MORE", "expiration":"Valid 4/27-5/17"},
        {"id":"3", "code":"HIJKLMNO", "discount":"15%", "title":"EXTRA 15% OFF", "subtitle":"WHEN YOU SPEND $40 OR MORE", "expiration":"Valid 4/27-5/17"},
        {"id":"4", "code":"LMNOPQRW", "discount":"10%", "title":"$20 BONUS CASH", "subtitle":"WHEN YOU SPEND $60 OR MORE", "expiration":"Valid 4/27-5/17"}, 
        {"id":"5", "code":"PQRSTUVW", "discount":"20%", "title":"EXTRA 20% OFF ", "subtitle":"WITH JCP CARD PUCHASE", "expiration":"Valid 4/27-5/31"},
        {"id":"6", "code":"TUVWXYZA", "discount":"15%", "title":"EXTRA 15% OFF", "subtitle":"WHEN YOU SPEND $40 OR MORE", "expiration":"Valid 4/27-5/31"}
    ];
    
    //default one
    $scope.selectedCoupon = $scope.coupons[0];
    if ($scope.mycid > 0) {
        $scope.selectedCoupon = $scope.coupons[$scope.mycid-1];
    }

    $scope.goHome = function() {
        location.href = "../home#/";
    };
    
    $scope.showDetails = function(currentCoupon) {
        $scope.selectedCoupon = currentCoupon;
        $scope.visible=false;
    };

    $scope.printCoupon = function(elemId, mycode) {
        var couponDetails = document.getElementById(elemId).innerHTML;
        $scope.visible=true;
    };
    
    $scope.isSelected = function(boxID){
      return $scope.selectedCoupon.id === boxID;
    };
    $scope.hideBox= function(){
        $scope.visible=false;
    }
});
