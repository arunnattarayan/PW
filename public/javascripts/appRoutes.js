angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeClrt'
        })

        // nerds page that will use the NerdController
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'HomeClrt'
        });

    $locationProvider.html5Mode(true);

}]);
