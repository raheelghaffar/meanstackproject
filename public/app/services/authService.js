angular.module('authService',[])

.factory('authentication',function($http,authToken){
  authFactory = {}
  authFactory.login= function(authdata){

  return $http.post('/api/auth',authdata).then(function(data){
    console.log(data.data.token);
    authToken.setToken(data.data.token);
   
    return data;
  })

}
 //auth.isloggedin()
  authFactory.isloggedin = function(){

    if(authToken.getToken()){
      return true;
    }else{
      return false;
    }
  }

authFactory.logout=function(){
  authToken.setToken()
 
}


  return authFactory;




})

.factory('authToken',function($window){
var authtokenfactory={};
 //authToken.setToken(token);   
authtokenfactory.setToken = function(token){
   if(token){
   $window.localStorage.setItem('token',token);

   }
  else{
    $window.localStorage.removeItem('token',token);
  }  
}

  

authtokenfactory.getToken=function(){

  return $window.localStorage.getItem('token');
}
return authtokenfactory;

});