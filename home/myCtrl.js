app.controller("myCtrl", function($scope, $location) {
    $scope.showDetails = function(mycid) {
        location.href = "../details#/?mycid=" + mycid.toString();
    };
    
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
    
    $scope.getCoupon = function(ccid) {
        var coupon
        for(x in $scope.coupons) {
            if (x.code === ccid)
                coupon = x;
            else
                continue;
        }
        return x;
    };
});
