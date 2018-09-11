
'use strict';

describe('Service: loginpageservice', function () {

  // load the service's module
  beforeEach(module('myAssignmentTaskApp'));
  // beforeEach(function ($provide) {
  //   $provide.value('lUserName','xyz')
  //   $provide.value('lPassWord','xyz')
  // });
  // instantiate service
  var loginpageserviceObj;
  beforeEach(inject(function ($injector) {
    loginpageserviceObj = $injector.get('loginpageservice');
  }));

  it('Test Login part', function () {
   // expect(!!loginpageserviceObj).toBe(true);
    console.log('we are in login Spec')
    spyOn(localStorage,'setItem').and.returnValue(user,JSON.stringify([{uNameSt:'xyz',uPassSt:'xyz'}]));
  });

});

