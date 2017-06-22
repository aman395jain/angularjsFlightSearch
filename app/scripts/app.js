'use strict';

/**
 * @ngdoc overview
 * @name myAssignmentTaskApp
 * @description
 * # myAssignmentTaskApp
 *
 * Main module of the application.
 */
angular
  .module('myAssignmentTaskApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        })
      .when('/Login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
       })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
       })
      .when('/location', {
        templateUrl: 'views/location.html',
        controller: 'LocationCtrl',
       })
      .when('/flightSearch', {
        templateUrl: 'views/flightsearch.html',
        controller: 'FlightsearchCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
