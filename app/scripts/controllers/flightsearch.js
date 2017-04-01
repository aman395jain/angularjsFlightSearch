'use strict';

/**
 * @ngdoc function
 * @name myAssignmentTaskApp.controller:FlightsearchCtrl
 * @description
 * # FlightsearchCtrl
 * Controller of the myAssignmentTaskApp
 */
angular.module('myAssignmentTaskApp')
  .controller('FlightsearchCtrl', function ($scope,$location,flightSearchService) {
      $scope.backTolocation= function () {
        $location.path("/location")
      }
    flightSearchService.then(function (response) {
      $scope.airportName = response.flightAirportName;
      console.log($scope.airportName)
    })

  });


