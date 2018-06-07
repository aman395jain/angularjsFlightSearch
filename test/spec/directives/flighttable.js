'use strict';

describe('Directive: flightTable', function () {

  // load the directive's module
  beforeEach(module('myAssignmentTaskApp'));

  var element,isolateScope,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<flight-table></flight-table>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the flightTable directive');
  }));
  it('test flightSearchService return data', function () {
    spyOn(isolateScope,flightSearchService);
    isolateScope.$digest();
    expect(isolateScope,flightSearchService).toBe(false);
  });

});
