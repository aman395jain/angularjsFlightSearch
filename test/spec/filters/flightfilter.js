'use strict';

describe('Filter: flightFilter', function () {

  // load the filter's module
  beforeEach(module('myAssignmentTaskApp'));

  // initialize a new instance of the filter before each test
  var flightFilter;
  beforeEach(inject(function ($filter) {
    flightFilter = $filter('flightFilter');
  }));

  it('should return the input prefixed with "flightFilter filter:"', function () {
    var text = 'angularjs';
 //   expect(flightFilter(text)).toBe('flightFilter filter: ' + text);



  });

  it('should check the function filter the flights',function () {

  });



});
