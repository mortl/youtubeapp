
var youtubeApp = angular.module('youtubeApp', ['ngRoute', 'ngResource']);



youtubeApp.config(function ($routeProvider){
			$routeProvider
			.when('/' , {
				templateUrl:'pages/home.html',
				controller:'HomeController'
			})
			.when('/about', {
				templateUrl:'pages/about.html',
				controller:'AboutController'
			})
			.when('/list', {
				templateUrl:'pages/list.html',
				controller:'ListController'
			});

});


