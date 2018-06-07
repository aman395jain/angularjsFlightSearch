'use strict';

/**
 * @ngdoc function
 * @name myAssignmentTaskApp.controller:LocationCtrl
 * @description
 * # LocationCtrl
 * Controller of the myAssignmentTaskApp
 */
var locationCtrl = function ($scope,$location,$rootScope,flightData,$state,$timeout) {
    $scope.outboundFlight="";
    $scope.intboundFlight="";
    var cityForOB= {};

    $scope.destCity=[];
    var destCity1=[];

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
    // function airportDataFromFlightFactory() {
    //
    //   flightData.flightsAirport.then(function (response) {
    //     cityForOB = response.flightsAirportName;
    //     for(var i=0;i<(cityForOB).length;i++){
    //
    //       $scope.destCity.push(cityForOB[i].city)
    //     }
    //     console.log($scope.destCity)
    //   });
    // }

    function cityDataFromFlightFactory() {
      flightData.getAirportcity.then(function (response) {
        cityForOB = response.flightCityName;
        for(var i=0;i<(cityForOB).length;i++){

          destCity1.push(cityForOB[i].code)
        }
        console.log(destCity1[0])
      })
    }


    $scope.flightSearchToflightDetails = function (onboundCity, inboundCity) {
      $scope.outboundFlight = onboundCity;
      $scope.intboundFlight = inboundCity;

      $timeout(function () {
          $state.go('flightSearch')
        }, 1000
      )
      $scope.$on('LOAD', function () {
        $scope.loading = true;
      })
      $scope.$on('UNLOAD', function () {
        $scope.loading = false;
      })
    }
  }

  locationCtrl.prototype.airportDataFromFlightFactory = function () {
  flightData.getAirportcity.then(function (response) {
    var cityForOB = response.flightCityName;
    for(var i=0;i<(cityForOB).length;i++){

      destCity1.push(cityForOB[i].code)
    }
    console.log(destCity1[0])
  })
}

angular.module('myAssignmentTaskApp')
  .controller('LocationCtrl', locationCtrl)
