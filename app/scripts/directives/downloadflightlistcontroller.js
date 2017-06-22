'use strict';

/**
 * @ngdoc function
 * @name myAssignmentTaskApp.controller:DownloadflightlistcontrollerCtrl
 * @description
 * # DownloadflightlistcontrollerCtrl
 * Controller of the myAssignmentTaskApp
 */



angular.module('myAssignmentTaskApp')
  .controller('DownloadflightlistcontrollerCtrl', function () {

    console.log("we are DownloadflightlistcontrollerCtrl controller")
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
