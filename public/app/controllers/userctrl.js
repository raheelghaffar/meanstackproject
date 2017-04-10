

angular.module('userCtrl',['userService'])
.controller('regctrl',function($http,User){
var vm = this;
vm.register = function(reginput){
        console.log(vm.reginput)

      User.create(vm.reginput) 
    } 
})
