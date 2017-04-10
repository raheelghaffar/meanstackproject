angular.module('userService',[])
.factory('User',function($http){
  userFactory = {}
  userFactory.create= function(reginput){

  return $http.post('/api/users',reginput)
  }
  return userFactory;
})