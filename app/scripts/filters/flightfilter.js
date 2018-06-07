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
  })

.filter('cityFilter', function () {
  return function (input, cityCode) {
    var output = [];
    var userExists = false;
    if (angular.isUndefined(cityCode)) {
      output = input;
    } else {
      angular.forEach(input, function (item) {
        console.log('value of item :' +item);
        if (!userExists) {
          if (item.match(cityCode.ignoreCase)) {
            item = cityCode;
            if (input.includes(item)) {
              output.push(input);
            }
            userExists = true;
          }
        }
        if (angular.isUndefined(cityCode)) {
          output = input;
        }
      });
    }
    return output.toString();
  };
})

.filter('airportCodeFilter', function () {
    return function (input,airportCode) {
      var output=[];
      var userExists = false;
      if (angular.isUndefined(airportCode)) {
        output = input;
      } else {
        angular.forEach(input, function (item) {
          if (!userExists){
            if (item.match(airportCode.ignoreCase)) {
              item = airportCode;
              if (input.includes(item.toUpperCase())) {
                output.push(input);
              }
              userExists=true;
            }
          } if (angular.isUndefined(airportCode)) {
            output = input;
          }
        });
      }
      return output.toString();
    };
});
