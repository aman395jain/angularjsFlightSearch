'use strict';

/**
 * @ngdoc service
 * @name myAssignmentTaskApp.flightData
 * @description
 * # flightData
 * Factory in the myAssignmentTaskApp.
 * created by Aman Jain(24/07/2017)
 */
angular.module('myAssignmentTaskApp')
  .factory('flightData', function ($http) {
    // Service logic
    // ...

    var flightsAirportName=[];
    var flightAirportNameFromJson=[];
    var flightAirportNameFromResponse=[];
    var flightCityNameFromResponse=[];

    // Public API here
    function flightsAirport() {
      return $http.get('../json/flight.json').then(function (response) {
        for(var i=0;i<(response.data.trips.data.airport).length;i++){
          flightAirportNameFromResponse.push(response.data.trips.data.airport[i]);
        }

        console.log(flightAirportNameFromResponse)
        return {flightsAirportName:flightAirportNameFromResponse};
      });
    }

    function getAirportcity() {
      return $http.get('../json/flight.json').then(function (response) {
        for(var j=0;j<(response.data.trips.data.city).length;j++){
          flightCityNameFromResponse.push(response.data.trips.data.city[j]);
        }

        console.log(flightCityNameFromResponse)
        return {flightCityName:flightCityNameFromResponse};
      });
    }
return{
  flightsAirport:flightsAirport(),
    getAirportcity:getAirportcity()
    }
  });
