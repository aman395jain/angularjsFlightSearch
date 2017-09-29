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

        if(angular.isUndefined(airportNames)) {
          output = input;
        } else {
          angular.forEach(input, function (item) {
            if(item.match(airportNames.ignoreCase)){
              if (input.includes(item)){
                output.push(input);
              }
            } if(angular.isUndefined(airportNames)) {
              console.log("the value of item:");
              output = input;
            }
          });
        }
        return output;
    };
  });
