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
    'ui.router',
    '720kb.datepicker',
    'ngAnimate',
    'ui.bootstrap'
  ])
  // .run(function ($templateCache) {
  //   $templateCache.put('views/flightcarousel.html','this is flightcarousel directive template')
  // })
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
  //  $locationProvider.html5Mode(true);
    var passengerDetails = {}
    // noinspection JSAnnotator
    $stateProvider
      .state('/', {
        url: "/",
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .state('Login', {
        url: "/Login",
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
      })
      .state('register', {
        url: "/register",
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
      })
      .state('location', {
        resolve: {
    //       if(navigator.geolocation) {
    //
    // }
  },
        url: "/location",
        templateUrl: 'views/location.html',
        controller: 'LocationCtrl',
      })
      .state('flightSearch', {
        url: "/flightSearch",
        templateUrl: 'views/flightsearch.html',
        controller: 'FlightsearchCtrl',
      })
      .state('formValidation' , {
        url: "/formValidation",
        templateUrl: 'views/validationform.html',
        controller: 'ValidationformCtrl'
      })
      .state('formValidation.passengerDetailPage', {
        url: "/passengerDetailPage",
        templateUrl: 'views/passengerdetailpage.html',
        controller: 'ValidationformCtrl',
        resolve: {

        }
      })
  });
