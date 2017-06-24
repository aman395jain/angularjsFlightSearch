'use strict';

/**
 * @ngdoc function
 * @name myAssignmentTaskApp.controller:LocationCtrl
 * @description
 * # LocationCtrl
 * Controller of the myAssignmentTaskApp
 */
angular.module('myAssignmentTaskApp')
  .controller('LocationCtrl', function ($scope,$location,$rootScope,flightData) {
    $scope.outboundFlight="";
    $scope.intboundFlight="";
    var destCity={};
    $scope.username=$rootScope.username;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }

    function showPosition(position) {
      var longi=position.coords.longitude;
      var lati=position.coords.latitude;
      $scope.map = {
        center: {
          longitude: longi,latitude:lati} ,
        zoom: 10

      };

      $scope.places=[
        {
          id:101,
          longitude:longi,
          latitude:lati
        }

      ];

      $scope.$apply();

    }
    flightData.flightsAirport.then(function (response) {
      $scope.cityForOB = response.flightAirportName;
      destCity=response.flightAirportName;
      console.log($scope.cityForOB)
      console.log(destCity.city)
    })

    $scope.flightSearchToflightDetails= function(onboundCity,inboundCity){
        $scope.outboundFlight=onboundCity;
        $scope.intboundFlight=inboundCity;
        $location.path("/flightSearch");


    }
  });


