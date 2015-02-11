var addressBookApp = angular.module('AddressBookApp', ['ui.bootstrap', 'ngRoute']);

addressBookApp.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true);

	$routeProvider
	.when('/',{
		templateUrl: '/views/home.html',
		controller: 'HomeCtrl'	
	})
	.when('/contact/new',{
		templateUrl: '/views/contact/new.html',
		controller: 'ContactNewCtrl'
	})
	.when('/contact/:id',{
		templateUrl: '/views/contact/show.html',
		controller: 'ContactShowCtrl'
	})
	.when('/about',{
		templateUrl:'/views/about.html',
		controller: 'StaticCtrl'
	})
	.when('/faq',{
		templateUrl:'/views/faq.html',
		controller: 'StaticCtrl'
	})

}])