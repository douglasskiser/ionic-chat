function ChatConfig($stateProvider) {
	'use strict';

	$stateProvider
		.state('chat', {
			url: '/chat',
			templateUrl: 'app/chat/chat.html',
			controller: 'ChatCtrl as ctrl'
		});
}

ChatConfig.$inject = ['$stateProvider'];

angular
	.module('app')
	.config(ChatConfig);