'use strict';

/**
 * @ngdoc service
 * @name myAssignmentTaskApp.regpageservice
 * @description
 * # regpageservice
 * Service in the myAssignmentTaskApp.
 */
angular.module('myAssignmentTaskApp')
  .service('regpageservice', function () {
    var userData=[];


      this.regService= function(rUserName,rPassWord){

        if(window.localStorage.getItem("user")!=null && window.localStorage.getItem("user")!=undefined){

          userData=JSON.parse(window.localStorage.getItem("user"));
        }
        if(userData.length==0){

          userData.push({uNameSt:rUserName,uPassSt:rPassWord});
        }
        else{
          var dataAlreadyExist=0;
          for(var i=0;i<userData.length;i++){
            if(userData[i].uNameSt==rUserName){
              dataAlreadyExist=1;

            }
            if(dataAlreadyExist==0){
              userData.push({uNameSt:rUserName,uPassSt:rPassWord});

            }

          }
        }
        if(!dataAlreadyExist){
        window.localStorage.setItem("user",JSON.stringify(userData));
      }
        return dataAlreadyExist;

      }
  });
