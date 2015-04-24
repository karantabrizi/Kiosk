app.controller("myCtrl", function($scope, $location) {
    $scope.mycid = $location.search().mycid;
    
    $scope.coupons = [
        {"id":"1", "code":"ABCDEFGH", "discount":"20%", "title":"EXTRA 20% OFF WITH JCP CARD PURCHASE", "subtitle":"", "expiration":"Valid 4/27-5/17"},
        {"id":"2", "code":"EFGHHIJK", "discount":"10%", "title":"$15 BONUSCASH", "subtitle":"WHEN YOU SPEND $50 OR MORE", "expiration":"Valid 4/27-5/17"},
        {"id":"3", "code":"HIJKLMNO", "discount":"15%", "title":"EXTRA 15% OFF", "subtitle":"WHEN YOU SPEND $40 OR MORE", "expiration":"Valid 4/27-5/17"},
        {"id":"4", "code":"LMNOPQRW", "discount":"10%", "title":"$20 BONUSCASH", "subtitle":"WHEN YOU SPEND $60 OR MORE", "expiration":"Valid 4/27-5/17"},
        {"id":"5", "code":"PQRSTUVW", "discount":"20%", "title":"EXTRA 20% OFF WITH JCP CARD PUCHASE", "subtitle":"", "expiration":"Valid 4/27-5/31"},
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
        console.log(currentCoupon.title);
        $scope.selectedCoupon = currentCoupon;
    };

    $scope.printCoupon = function(elemId, mycode) {
        var couponDetails = document.getElementById(elemId).innerHTML;

        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
            var popupWin = window.open('', '_blank', 'width=800,height=800, left=100,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
            popupWin.window.focus();
            popupWin.document.write('<!DOCTYPE html><html><head><title>Coupon -- ' + mycode + '</title>' +
                '<script type="application/javascript" src="../jquery-1.8.2.js"></script>' +
                '<script type="application/javascript" src="../jquery.qrcode-0.11.0.js"></script>' +
                '</head><body style="background-color: #FAFBFA; text-align: center;"><div>' + couponDetails +
                '</div><p></p><div id="div-qr"></div></body>' +
                '<script>$(document).ready(function(){ $("#div-qr").qrcode({text: "' + mycode + '"}); });</script></html>');
        } else {
            var popupWin = window.open('', '_blank', 'width=800,height=800,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
            popupWin.document.open();
            popupWin.document.write('<!DOCTYPE html><html><head><title>Coupon -- ' + mycode + '</title>' +
                '<script type="application/javascript" src="../jquery-1.8.2.js"></script>' +
                '<script type="application/javascript" src="../jquery.qrcode-0.11.0.js"></script>' +
                '</head><body style="background-color: #FAFBFA; text-align: center;"><div>' + couponDetails +
                '</div><p></p><div id="div-qr"></div></body>' +
                '<script>$(document).ready(function(){ $("#div-qr").qrcode({text: "' + mycode + '"}); });</script></html>');
            popupWin.document.close();
        }
        popupWin.document.close();
    };
    
    $scope.isSelected = function(boxID){
      return $scope.selectedCoupon.id === boxID;
    };
});
