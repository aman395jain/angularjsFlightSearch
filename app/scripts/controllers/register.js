'use strict';

/**
 * @ngdoc function
 * @name myAssignmentTaskApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the myAssignmentTaskApp
 */
angular.module('myAssignmentTaskApp')
  .controller('RegisterCtrl', function ($scope,regpageservice) {
    $scope.rUname='';
    $scope.rPword='';
    $scope.regPart=function(){
      $scope.regDataToLocalStorage=regpageservice.regService($scope.rUname,$scope.rPword);
    }

  });
