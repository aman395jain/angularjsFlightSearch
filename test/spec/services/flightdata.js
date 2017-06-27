'use strict';

describe('Service: flightData', function () {

  // load the service's module
  beforeEach(module('myAssignmentTaskApp'));

  // instantiate service
  var flightData;
  beforeEach(inject(function (_flightData_) {
    flightData = _flightData_;
  }));

  it('should do something', function () {
    expect(!!flightData).toBe(true);
  });

});
