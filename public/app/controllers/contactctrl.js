
angular.module('contactCtrl',['contactService'])

.controller('contactsave',function($http,postcontact){
var vm = this;
vm.contact = function(contactinput){
 postcontact.create(vm.contactinput) 
    } 
})
