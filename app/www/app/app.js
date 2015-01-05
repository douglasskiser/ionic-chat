angular.module('app', ['ionic', 'ngAudio'])
    .value('SOCKET_URL', '192.168.128.78:3000')
    .value('Settings', {
        name: '',
        sound: true
    })
    .config(['$urlRouterProvider', function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }])
    .run(['$ionicPlatform', 'Settings', 'LocalStorage', function($ionicPlatform, Settings, LocalStorage) {
        
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });

        if (LocalStorage.isAvailable()) {
            try {
                LocalStorage.get('chat-settings')
                    .then(function(data) {
                        angular.extend(Settings, angular.fromJson(data));
                    });
            } catch (e) {
                console.log(e);
            }
        }
    }]);
