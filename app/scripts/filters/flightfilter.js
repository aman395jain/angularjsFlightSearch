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
    return function (input,airportNames) {
      var output=[];
      var userExists = false;
      if (angular.isUndefined(airportNames)) {
        output = input;
      } else {
        angular.forEach(input, function (item) {
          if (!userExists){
            if (item.match(airportNames.ignoreCase)) {
              item = airportNames;
              if (input.includes(item.toUpperCase())) {
                output.push(input);
              }
              userExists=true;
            }
          } if (angular.isUndefined(airportNames)) {
            output = input;
          }
        });
      }
      return output.toString();
    };
  });
