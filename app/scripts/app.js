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
    'uiGmapgoogle-maps',
    'ui.router'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('/', {
        url: "/",
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .state('/Login', {
        url: "/Login",
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
      })
      .state('/register', {
        url: "/register",
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
      })
      .state('/location', {
        url: "/location",
        templateUrl: 'views/location.html',
        controller: 'LocationCtrl',
      })
      .state('/flightSearch', {
        url: "/flightSearch",
        templateUrl: 'views/flightsearch.html',
        controller: 'FlightsearchCtrl',
      })
  });
