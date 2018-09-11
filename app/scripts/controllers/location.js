'use strict';

/**
 * @ngdoc function
 * @name myAssignmentTaskApp.controller:LocationCtrl
 * @description
 * # LocationCtrl
 * Controller of the myAssignmentTaskApp
 */
var locationCtrl = function ($scope,$location,$rootScope,flightData,$state,$timeout,$http,sharedService) {
    $scope.outboundFlight="";
    $scope.intboundFlight="";
    var cityForOB= {};
    var city = []

    $scope.destCity=[];
    var destCity1=[];
    // var deferred = $q.defer();
    $scope.username=$rootScope.username;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);

    }
  $rootScope.$on('place')
  console.log($rootScope)

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
    city = angular.copy($scope.places)
    console.log(city)
    $scope.$emit('place',$scope.places)

    $scope.$apply();
  }

  var geocoder = new google.maps.Geocoder();
    console.log(geocoder);

  // function codeLatLng(lat, lng) {
  //
  //   var latlng = new google.maps.LatLng(lat, lng);
  //   geocoder.geocode({'latLng': latlng}, function (results, status) {
  //     console.log(status)
  //     if (status == google.maps.GeocoderStatus.OK) {
  //       //console.log(results);
  //       if (results[1]) {
  //         var indice = 0;
  //         for (var j = 0; j < results.length; j++) {
  //           if (results[j].types[0] == 'locality') {
  //             indice = j;
  //             break;
  //           }
  //         }
  //         console.log(results[j]);
  //         for (var i = 0; i < results[j].address_components.length; i++) {
  //           if (results[j].address_components[i].types[0] == "locality") {
  //             //this is the object you are looking for City
  //             var city = results[j].address_components[i];
  //           }
  //           if (results[j].address_components[i].types[0] == "administrative_area_level_1") {
  //             //this is the object you are looking for State
  //             var region = results[j].address_components[i];
  //           }
  //           if (results[j].address_components[i].types[0] == "country") {
  //             //this is the object you are looking for
  //             var country = results[j].address_components[i];
  //           }
  //         }
  //       }
  //     }
  //   })
  // }






    var showPositionForCity = function (position) {
      var longi=position.coords.longitude;
      var lati=position.coords.latitude;
      $scope.city = $http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng=lati,longi&sensor=false');
      console.log($scope.city)
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
    console.log(flightData);
    console.log(sharedService)
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
