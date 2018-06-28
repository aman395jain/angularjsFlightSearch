'use strict';

/**
 * @ngdoc function
 * @name myAssignmentTaskApp.controller:FlightsearchCtrl
 * @description
 * # FlightsearchCtrl
 * Controller of the myAssignmentTaskApp
 */
angular.module('myAssignmentTaskApp')
  .controller('FlightsearchCtrl', function ($scope,$location,flightSearchService,$state) {
    $scope.nextPage = 'nextPage';   //to check the ng-class
    var testObject1 = {};
    var testObject2 = {};
    var dseObj = {};

      $scope.$emit('LOAD')
      $scope.backTolocation= function () {
        // $location.path("/location");
        $state.go('location')
      }

      $scope.toFormPage = function () {
        $state.go('formValidation')
      }

    $scope.xyz = flightSearchService.then(function (response) {
      $scope.airportName = response.flightAirportName;
      console.log($scope.airportName)
      testObject1 = angular.copy($scope.airportName[0]); //angular.copy is a deep copy
      testObject2 = angular.copy(testObject1);
      console.log(testObject1)
      console.log(testObject2)
      console.log(testObject1.name === testObject2.name);
      testObject2.PinCode = {};
      testObject2.PinCode.streat = 'xyx'
      angular.extend(dseObj,testObject1,testObject2); //shallow copy
      console.log(dseObj)
      console.log(testObject1)
      testObject2.PinCode.streat = 'xyxdjhfufhfh'
      console.log(testObject2)
      console.log(dseObj.PinCode === testObject2.PinCode)
    })

    $scope.fTextScope = 'AMAN';
    $scope.$watch('fTextScope', function () {
      $scope.sTextScope = $scope.fTextScope;
      console.log($scope.$$watchersCount)

    })

    $scope.$watch('sTextScope', function () {
      $scope.fTextScope = $scope.sTextScope;
      console.log($scope.fTextScope)

    })


    $scope.$watch('airportNames', function () {
      $scope.airportNames=$scope.airportNames;
    })
    $scope.$watch('cityCode', function () {
      $scope.cityCode=$scope.cityCode;
    })
    $scope.$watch('airportCode', function () {
      $scope.airportCode=$scope.airportCode;
    })


    var testFunction = function () {
      console.log($scope.$$watchersCount)
    }
    testFunction.prototype.testFunction1 = function () {
      console.log("in testFunction1")
    }


   // $scope.sTextScope = $scope.fTextScope;

    // $timeout(function () {
    //   $scope.sTextScope = $scope.fTextScope;
    //
    // })


  });
