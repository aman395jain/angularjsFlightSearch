'use strict';

/**
 * @ngdoc directive
 * @name myAssignmentTaskApp.directive:downloadFlightList
 * @description
 * # downloadFlightList
 */
angular.module('myAssignmentTaskApp')
  .directive('downloadFlightList', function (flightSearchService) {
    var dataFromflightSearchService= {}
    return {
      templateUrl: '../views/downloadflightlist.html',
      /*controller: 'DownloadflightlistcontrollerCtrl',
      controllerAs: 'downloadflightlistcontroller.js',*/
      restrict: 'EA',
      link: function preLink(scope, element, attrs) {
        flightSearchService.then(function (response) {
          dataFromflightSearchService=response.flightAirportName;
          console.log(dataFromflightSearchService)

          /*for(var i =0; i<dataFromflightSearchService.length; i++){
            console.log(dataFromflightSearchService[i].name)

          }*/
        })
        }
      }
    var flightListDownload= function () {
      var fileName = "file_name.doc";
      var a = document.createElement("a");
      for(var i =0; i<dataFromflightSearchService.length; i++){
        console.log(dataFromflightSearchService[i].name)

      }
      var file = new Blob([dataFromflightSearchService.name], {type: 'application/doc'});
      var fileURL = window.URL.createObjectURL(file);
      a.href = fileURL;
      a.download = fileName;
      a.click();
    }

    });
