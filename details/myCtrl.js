app.controller("myCtrl", function($scope, $location) {
    $scope.mycid = $location.search().mycid;
    
    $scope.coupons = [
        {"id":"1", "code":"ABCDEFGH", "title":"COUPON ABCDEFGH YES! CUT THIS ONE!", "subtitle":"WHEN YOU SPEND $50 OR MORE", "expiration":"Valid until 4/27/15"},
        {"id":"2", "code":"EFGHHIJK", "title":"COUPON EFGHHIJK", "subtitle":"SPEND $50 OR MORE", "expiration":"Valid 4/20/15-4/27/15"},
        {"id":"3", "code":"HIJKLMNO", "title":"COUPON HIJKLMNO", "subtitle":"SPEND $50 OR MORE", "expiration":"Valid until 4/27/15"},
        {"id":"4", "code":"LMNOPQRW", "title":"COUPON LMNOPQRW", "subtitle":"SPEND $50 OR MORE", "expiration":"Valid 4/20/15-4/27/15"},
        {"id":"5", "code":"PQRSTUVW", "title":"COUPON PQRSTUVW", "subtitle":"SPEND $50 OR MORE", "expiration":"Valid until 4/27/15"},
        {"id":"6", "code":"TUVWXYZA", "title":"COUPON TUVWXYZA", "subtitle":"SPEND $50 OR MORE", "expiration":"Valid 4/20/15-4/27/15"},
        {"id":"7", "code":"XYZABCDE", "title":"COUPON XYZABCDE", "subtitle":"SPEND $50 OR MORE", "expiration":"Valid until 4/27/15"},
        {"id":"8", "code":"BCDEFGHI", "title":"COUPON BCDEFGHI", "subtitle":"SPEND $50 OR MORE", "expiration":"Valid 4/20/15-4/27/15"},
        {"id":"9", "code":"FGHIJKLM", "title":"COUPON FGHIJKLM", "subtitle":"SPEND $50 OR MORE", "expiration":"Valid until 4/27/15"},
        {"id":"10", "code":"JKLMNOPQ", "title":"COUPON JKLMNOPQ", "subtitle":"SPEND $50 OR MORE", "expiration":"Valid 4/20/15-4/27/15"},
        {"id":"11", "code":"NOPQRSTU", "title":"COUPON NOPQRSTU", "subtitle":"SPEND $50 OR MORE", "expiration":"Valid until 4/27/15"},
        {"id":"12", "code":"RSTUVWXY", "title":"COUPON RSTUVWXY", "subtitle":"SPEND $50 OR MORE", "expiration":"Valid 4/20/15-4/27/15"},
        {"id":"13", "code":"VWXYZABC", "title":"COUPON VWXYZABC", "subtitle":"SPEND $50 OR MORE", "expiration":"Valid until 4/27/15"},
        {"id":"14", "code":"ZABCDEFG", "title":"COUPON ZABCDEFG", "subtitle":"SPEND $50 OR MORE", "expiration":"Valid 4/20/15-4/27/15"}
    ];
    
    //default one
    $scope.selectedCoupon = $scope.coupons[0];
    $scope.selectedCoupon = $scope.coupons[$scope.mycid-1];
    
    $scope.showDetails = function(currentCoupon) {
        console.log(currentCoupon.title);
        $scope.selectedCoupon = currentCoupon;
    };
   
    $scope.printCoupon = function(elemId) {
        var couponDetails = document.getElementById(elemId).innerHTML;

        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
            var popupWin = window.open('', '_blank', 'width=600,height=600,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
            popupWin.window.focus();
            popupWin.document.write('<!DOCTYPE html><html><head><title>Coupon</title>' +
                '    <script type="application/javascript" src="../jquery-1.8.2.js"></script><script type="application/javascript" src="../jquery.qrcode-0.11.0.js"></script>' +
                '</head><body onload="window.print()"><div></div>' + couponDetails + '<p></p><div id="div-qr"></div></body>' +
                '<script>$(document).ready(function(){ $("#div-qr").qrcode({text: "hello world"}); });</script></html>');
            popupWin.onbeforeunload = function (event) {
                popupWin.close();
                return '.\n';
            };
            

            popupWin.onabort = function (event) {
                popupWin.document.close();
                popupWin.close();
            }
        } else {
            var popupWin = window.open('', '_blank', 'width=800,height=600');
            popupWin.document.open();
            popupWin.document.write('<!DOCTYPE html><html><head><title>Coupon</title></head><body onload="window.print()">' + couponDetails + '</body></html>');
            popupWin.document.close();
        }
        popupWin.document.close();
        popupWin.close();
    };
    
});