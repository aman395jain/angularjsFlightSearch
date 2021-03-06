'use strict';

/**
 * @ngdoc service
 * @name myAssignmentTaskApp.flightSearchService
 * @description
 * # flightSearchService
 * factory in the myAssignmentTaskApp.
 */


angular.module('myAssignmentTaskApp')
  .factory('flightSearchService', function ($http) {
    var flightAirportName=[];
    var flightAirportNameFromJson=[];
    var flightAirportNameFromResponse=[];
  var count=0;

    return $http.get('../json/flight.json').then(function (response) {
    flightAirportNameFromJson= response.data.trips.data.airport;
    for(var i=0;i<(response.data.trips.data.airport).length;i++){
      flightAirportNameFromResponse.push(response.data.trips.data.airport[i]);
    }
      console.log(flightAirportNameFromResponse)
      return {flightAirportName:flightAirportNameFromResponse};
  });
  });

