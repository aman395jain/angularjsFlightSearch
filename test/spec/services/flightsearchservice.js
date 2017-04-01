'use strict';

describe('Service: flightSearchService', function () {

  // load the service's module
  beforeEach(module('myAssignmentTaskApp'));

  // instantiate service
  var flightSearchService;
  beforeEach(inject(function (_flightSearchService_) {
    flightSearchService = _flightSearchService_;
  }));

  it('should do something', function () {
    expect(!!flightSearchService).toBe(true);
  });

});
