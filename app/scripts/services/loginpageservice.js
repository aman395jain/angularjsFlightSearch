'use strict';

/**
 * @ngdoc service
 * @name myAssignmentTaskApp.loginpageservice
 * @description
 * # loginpageservice
 * Service in the myAssignmentTaskApp.
 */
angular.module('myAssignmentTaskApp')
  .service('loginpageservice', function () {

    this.loginService= function(lUserName,lPassWord){

      var xyz;
      xyz= loginPageStorage(lUserName,lPassWord);
      return xyz;
    }
  });

function loginPageStorage(lUserName,lPassWord){
  var lUserData= window.localStorage.getItem("user");
  var lUserDataParse=JSON.parse(lUserData);

  var  userExist=0;
  for (var i=0;i<lUserDataParse.length;i++){

    if (lUserDataParse[i].uNameSt==lUserName && lUserDataParse[i].uPassSt==lPassWord){
      userExist=1;

    }
  }
  if (userExist==1){
    console.log("exist" +
      "user");
    return true;
  }

  else {
    console.log("not" +
      "exist");
  }

}
