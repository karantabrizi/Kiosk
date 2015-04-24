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
        {"id":"6", "code":"TUVWXYZA", "title":"COUPON TUVWXYZA", "subtitle":"SPEND $50 OR MORE", "expiration":"Valid 4/20/15-4/27/15"}
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
