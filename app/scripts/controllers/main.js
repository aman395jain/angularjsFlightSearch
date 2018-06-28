'use strict';

/**
 * @ngdoc function
 * @name myAssignmentTaskApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAssignmentTaskApp
 */
angular.module('myAssignmentTaskApp')
  .controller('MainCtrl', function ($scope) {
    $scope.links =[
      { src:"../../images/aeroplane.jpg", alt:"aeroplane", caption:""},
      { src:"../../images/aeroplane1.jpg", alt:"", caption:""},
      { src:"../../images/aeroplane2.jpg", alt:"", caption:""},
      { src:"../../images/aeroplane3.jpg", alt:"", caption:""}
    ];
  });
