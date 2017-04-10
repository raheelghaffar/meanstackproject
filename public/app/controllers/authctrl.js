angular.module('authCtrl',['authService'])
.controller('Authctrl',function($http,authentication,$location,$scope){

var vm = this;

$scope.checking= function(check){
if(authentication.isloggedin()){
    console.log('user is logged in')
   return true
  }else{
    console.log('user is notlogged in')
  return false  
}

}



vm.login = function(authdata){
       // console.log(vm.authdata)
                       
     authentication.login(vm.authdata).then(function(results){
         console.log(results);
       if(results.data.success){
         
        $location.path('/about');
         $scope.login = true;  
      // console.log(results)
   
    }else{
            
            console.log("password is incorrect")
           
     }

      
    
        
       
            
          
          
     }) 
    } 
vm.logout = function(){
 authentication.logout();
 $location.path('/');
}




})





