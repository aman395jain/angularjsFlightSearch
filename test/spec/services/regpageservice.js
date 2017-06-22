'use strict';

describe('Service: regpageservice', function () {

  // load the service's module
  beforeEach(module('myAssignmentTaskApp'));

  // instantiate service
  var regpageserviceObj;
  beforeEach(inject(function ($injector) {


    regpageserviceObj = $injector.get('regpageservice');
  }));

 it('should do something', function () {
    spyOn(localStorage,'getItem').and.returnValue(JSON.stringify([{uNameSt:"xyz",uPassSt:"xyz"}]));
console.log("hii in test case")
    expect(regpageserviceObj.regService("xyz","xyz")).toBe(1);
  });


  /*it('should do something', function () {

    spyOn(localstorage,'getItem').and.returnValue(JSON.stringify([{uNameSt:"abc",uPassSt:"abc"}]));
    expect(!!regpageservice.regService).toBe(0);
  });*/
});
