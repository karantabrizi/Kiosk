app.controller("myCtrl", function($scope) {
    $scope.mainTitle = "My Precious Coupons";
    
    $scope.showDetails = function(code) {
        alert(code);
    };
    
    $scope.coupons = [
        {"id":"1", "code":"ABCD", "title":"Coupon A", "subtitle":"How do you like 'em?", "expiration":"Valid until 4/27/15"},
        {"id":"2", "code":"EFGH", "title":"Coupon B", "subtitle":"How do you like 'em?", "expiration":"Valid 4/20/15-4/27/15"},
        {"id":"3", "code":"HIJK", "title":"Coupon C", "subtitle":"How do you like 'em?", "expiration":"Valid until 4/27/15"},
        {"id":"4", "code":"LMNO", "title":"Coupon D", "subtitle":"How do you like 'em?", "expiration":"Valid 4/20/15-4/27/15"}
    ];
});
