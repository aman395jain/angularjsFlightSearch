'use strict';

/**
 * @ngdoc directive
 * @name myAssignmentTaskApp.directive:flightTable
 * @description
 * # flightTable
 */
angular.module('myAssignmentTaskApp')
  .directive('flightTable', function (flightSearchService) {
    return {
      templateUrl:'../views/flighttable.html',
      restrict: 'E',
      scope:{
        airportNameDir:'&'

      },
      transclude: true,
      link: function postLink(scope, element, attrs) {
        flightSearchService.then(function (response) {
          scope.airportNameDir = response.flightAirportName;
        })
      }
    };
  });
