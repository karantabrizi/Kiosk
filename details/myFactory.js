app.factory('dataFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:8080/myapp/mycoupon';
    var dataFactory = {};

    dataFactory.printQRCode = function (ccode) {
        return $http.get(urlBase + '/' + ccode);
    };

    return dataFactory;
}]);
