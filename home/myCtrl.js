app.controller("myCtrl", function($scope) {
    $scope.showDetails = function(mycid) {
        location.href = "../details#/?mycid=" + mycid.toString();
    };
    
    $scope.coupons = [
        {"id":"1", "code":"ABCDEFGH", "discount":"20%", "title":"EXTRA 20% OFF WITH JCP CARD PURCHASE", "subtitle":"", "expiration":"Valid 4/27-5/17", "image":"../images/coupon6.jpg"},
        {"id":"2", "code":"EFGHHIJK", "discount":"10%", "title":"$15 BONUSCASH", "subtitle":"WHEN YOU SPEND $50 OR MORE", "expiration":"Valid 4/27-5/17", "image":"../images/coupon2.png"},
        {"id":"3", "code":"HIJKLMNO", "discount":"15%", "title":"EXTRA 15% OFF", "subtitle":"WHEN YOU SPEND $40 OR MORE", "expiration":"Valid 4/27-5/17", "image":"../images/coupon3.png"},
        {"id":"4", "code":"LMNOPQRW", "discount":"10%", "title":"$20 BONUSCASH", "subtitle":"WHEN YOU SPEND $60 OR MORE", "expiration":"Valid 4/27-5/17", "image":"../images/coupon4.png"},
        {"id":"5", "code":"PQRSTUVW", "discount":"20%", "title":"EXTRA 20% OFF WITH JCP CARD PUCHASE", "subtitle":"", "expiration":"Valid 4/27-5/31", "image":"../images/coupon1.jpg"},
        {"id":"6", "code":"TUVWXYZA", "discount":"15%", "title":"EXTRA 15% OFF", "subtitle":"WHEN YOU SPEND $40 OR MORE", "expiration":"Valid 4/27-5/31", "image":"../images/coupon1.jpg"}
    ];
    
    
});
