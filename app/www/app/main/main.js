function MainConfig($stateProvider) {
	'use strict';

	$stateProvider
		.state('main', {
			url: '/',
			templateUrl: 'app/main/main.html',
			controller: 'MainCtrl as ctrl'
		});
}

MainConfig.$inject = ['$stateProvider'];

angular
	.module('app')
	.config(MainConfig);