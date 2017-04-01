'use strict';

describe('Directive: downloadFlightList', function () {

  // load the directive's module
  beforeEach(module('myAssignmentTaskApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<download-flight-list></download-flight-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the downloadFlightList directive');
  }));
});
