function MainCtrl($state, Settings, LocalStorage) {
	'use strict';

	this.user = {};

	this.next = function() {
		if (typeof this.user.name !== 'undefined') {
			Settings.name = this.user.name;
			LocalStorage.set('chat-settings', angular.toJson(Settings));
		}
		
		$state.go('chat');
	};
}

MainCtrl.$inject = ['$state', 'Settings', 'LocalStorage'];

angular
	.module('app')
	.controller('MainCtrl', MainCtrl);