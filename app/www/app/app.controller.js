function AppCtrl($scope, $ionicPopover, Settings, LocalStorage) {
    'use strict';

    $scope.settings = Settings;

    $scope.toggleSound = function() {
    	Settings.sound = $scope.settings.sound;
        LocalStorage.set('chat-settings', angular.toJson(Settings));
    	return false;
    };

    $scope.changeName = function() {
        Settings.name = $scope.settings.name;
        LocalStorage.set('chat-settings', angular.toJson(Settings));
        return false;
    };

    $ionicPopover.fromTemplateUrl('components/settings-menu/settings-menu.html', {
        scope: $scope
    }).then(function(popover) {
    	$scope.popover = popover;
    });

    this.openPopover = function($event) {
        $scope.popover.show($event);
        return false;
    };
}

AppCtrl.$inject = ['$scope', '$ionicPopover', 'Settings', 'LocalStorage'];

angular
    .module('app')
    .controller('AppCtrl', AppCtrl);
