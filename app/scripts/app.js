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
    'ui.bootstrap'
  ])

    // run part is executed after config part and all services instance and constants are injected here
  // .run(function ($templateCache) {'ngAnimate',
  //   $templateCache.put('views/flightcarousel.html','this is flightcarousel directive template')
  // })

  .run(['$http', 'SessionService', function ($http, configs, SessionService) {
    $http.get('https://api.github.com/users/naorye/repos').then(function (ret) {
      console.log('dgghsjakL')
    });
  }])

  // for spin loader

  .run(['$rootScope', '$state', function ($rootScope, $state) {

    $rootScope.$on('$stateChangeStart', function () {
      $rootScope.stateIsLoading = true;
    });


    $rootScope.$on('$stateChangeSuccess', function () {
      $rootScope.stateIsLoading = false;
    });

  }])


  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('sessionInjector')

  })

  // config part executed before the run part so provider and constants are injected here
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
        controller: 'ValidationformCtrl',
        resolve: {

        }
      })
      .state('formValidation.passengerDetailPage', {
        url: "/passengerDetailPage/:passengerDetails",
        templateUrl: 'views/passengerdetailpage.html',
        controller: 'ValidationformCtrl'

      })
  });
