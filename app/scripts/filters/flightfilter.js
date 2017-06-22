'use strict';

/**
 * @ngdoc filter
 * @name myAssignmentTaskApp.filter:flightFilter
 * @function
 * @description
 * # flightFilter
 * Filter in the myAssignmentTaskApp.
 */
angular.module('myAssignmentTaskApp')
  .filter('flightFilter', function () {
    return function (input) {
      return 'flightFilter filter: ' + input;
    };
  });
