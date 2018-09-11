'use strict';

describe('Controller: DownloadflightlistcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('myAssignmentTaskApp'));

  var DownloadflightlistcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DownloadflightlistcontrollerCtrl = $controller('DownloadflightlistcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
   // expect(DownloadflightlistcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
