'use strict';

/**
 * @ngdoc function
 * @name myAssignmentTaskApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the myAssignmentTaskApp
 */
angular.module('myAssignmentTaskApp')
  .controller('LoginCtrl', function ($scope,loginpageservice,$location,sharedService, flightData) {
    $scope.lUname='';
    $scope.lPass='';
    $scope.loginDataToCompare='';
    $scope.logPart=function(){
      $scope.loginDataToCompare=loginpageservice.loginService($scope.lUname,$scope.lPass);
      if (!$scope.loginDataToCompare) {
        alert("wrong data");
      } else {
        $location.path("/location");
      }
      //
    }
    sharedService.shareData('aman');
    //
    // console.log(sharedService.getFirstName())
    // sharedService.myObj()
    // console.log(flightData)
    // console.log(sharedService.myObjDate)
    //
    // console.log(flightData.getAirportcity)

  });
