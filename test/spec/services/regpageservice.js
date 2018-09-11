'use strict';

describe('Service: regpageservice', function () {

  // load the service's module
  beforeEach(module('myAssignmentTaskApp'));

  // instantiate service
  var regpageserviceObj;
  beforeEach(inject(function ($injector) {


    regpageserviceObj = $injector.get('regpageservice');
  }));

 it('In the true scanerio', function () {
    spyOn(localStorage,'getItem').and.returnValue(JSON.stringify([{uNameSt:'xyz',uPassSt:'xyz'}]));
    console.log('In the true part'+localStorage.getItem().length)
    expect(regpageserviceObj.regService('xyz','xyz')).toBeTruthy();
  });

});
