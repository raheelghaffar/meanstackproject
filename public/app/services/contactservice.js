angular.module('contactService',[])
.factory('postcontact',function($http){
  contactFactory = {}
  contactFactory.create= function(contactinput){

  return $http.post('/api/save',contactinput)
  }
  return contactFactory;
})