
var app = angular.module('app',['ngRoute']);

app.config (function($routeProvider){
	$routeProvider
		.when('/1',{
			templateUrl: 'forBeginers/Freshwater fishing for Beginners.html'
		})
		.when('/2',{
			templateUrl: 'forBeginers/Freshwater Bait Fishing.html'
		})
		.when('/3',{
			templateUrl: 'forBeginers/Fishing with Artificial Lures.html'
		})
		.when('/4',{
			templateUrl: 'forBeginers/Fishing with Crankbaits.html'
		})
		.when('/5',{
			templateUrl: 'forBeginers/Fishing with Soft Plastics.html'
		})
		.when('/6',{
			templateUrl: 'forBeginers/Fishing for Bluegill Sunfish.html'
		})
		.when('/7',{
			templateUrl: 'forBeginers/Fishing for Brown Bullheads.html'
		});
	 
});

