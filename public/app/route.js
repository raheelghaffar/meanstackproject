
angular.module('Ngroutes',['ngRoute'])
.config(function($routeProvider,$locationProvider){


$routeProvider
.when('/',{
    templateUrl: 'app/views/pages/home.html'
})
.when('/about',{
     templateUrl: 'app/views/pages/about.html'
})
.when('/register',{
     templateUrl: 'app/views/pages/register.html',
     controller : 'regctrl',
     controllerAs: 'register' 
})

.when('/login',{
     templateUrl: 'app/views/pages/login.html',
     
})

.when('/save',{
     templateUrl: 'app/views/pages/phonebook.html',
     /*
     controller : 'contactsave',
     controllerAs: 'contact' 
*/
})

.otherwise({
    redirectTo:'/'
 })

 $locationProvider.html5Mode({
     enable: true,
     requireBase: false
 });


});