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
    flightData.flightsAirport.then(function (response) {
     cityForOB = response.flightsAirportName;
      for(var i=0;i<(cityForOB).length;i++){

        $scope.destCity.push(cityForOB[i].city)
      }
      console.log($scope.destCity)
    });

    flightData.getAirportcity.then(function (response) {
     cityForOB = response.flightCityName;
      for(var i=0;i<(cityForOB).length;i++){

        destCity1.push(cityForOB[i].code)
      }
      console.log(destCity1[0])
    })

    $scope.flightSearchToflightDetails= function(onboundCity,inboundCity){
        $scope.outboundFlight=onboundCity;
        $scope.intboundFlight=inboundCity;
        $location.path("/flightSearch");


    }

  });

