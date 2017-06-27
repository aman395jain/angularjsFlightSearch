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

    var destCity=[];
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
    flightData.flightsAirport.then(function (response) {
      $scope.cityForOB = response.flightsAirportName;
      console.log($scope.cityForOB)
      for(var i=0;i<($scope.cityForOB).length;i++){

        destCity.push($scope.cityForOB[i].city)
      }
      console.log(destCity)
    });

    flightData.getAirportcity.then(function (response) {
      $scope.cityForOB = response.flightCityName;
      console.log($scope.cityForOB)
      for(var i=0;i<($scope.cityForOB).length;i++){

        destCity1.push($scope.cityForOB[i].code)
      }
      console.log(destCity1)
    })

    $scope.flightSearchToflightDetails= function(onboundCity,inboundCity){
        $scope.outboundFlight=onboundCity;
        $scope.intboundFlight=inboundCity;
        $location.path("/flightSearch");


    }
  });


