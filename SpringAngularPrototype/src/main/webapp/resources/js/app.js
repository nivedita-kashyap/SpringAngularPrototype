'use strict';

var AngularSpringApp = {};

var App = angular.module('AngularSpringApp', ['AngularSpringApp.filters', 'AngularSpringApp.services', 'AngularSpringApp.directives']);

// Declare app level module which depends on filters, and services

/*Routing and View*/

/*When you now navigate to AngularSpringApp, you are redirected to AngularSpringApp/#/index and the login/home block will display based on boolean value configures inside login controller .*/
/*When you now navigate to /AngularSpringApp/#/cars, you are redirected to /AngularSpringApp/#/cars and car layout page will display .*/

App.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/login', {
	        templateUrl: 'html/index',
	        controller: LoginController
	    })
    $routeProvider.when('/cars', {
        templateUrl: 'cars/layout',
        controller: CarController
    });

    $routeProvider.when('/trains', {
        templateUrl: 'trains/layout',
        controller: TrainController
    });
    
    $routeProvider.when('/railwaystations', {
        templateUrl: 'railwaystations/layout',
        controller: RailwayStationController
    });

    $routeProvider.otherwise({redirectTo: '/index'});
}]);

