var signin = angular.module('signin', ['app', 'ui.router']);

signin.config(function($stateProvider) {

    $stateProvider
        .state('main', {
            name: 'main',
            templateUrl: "/modules/signin/main.html",
            controller: function ($scope, $state, $http, $cookieStore, appManager) {
                $scope.signIn = function() {
                    setTimeout(function() {
                        console.log('Mocking a server response for user ' + $scope.userId + ' : ' + $scope.password + ' signin action');
                        appManager.save({ user: { userId: $scope.userId, password: $scope.password }});
                        window.location.href = 'home.html';
                    }, 1000);
                };
            }
        })
});

signin.controller('signinController', ['$state', '$scope', '$cookieStore', 'appConfig', 'appModel', 'appManager', function ($state, $scope, $cookieStore, appConfig, appModel, appManager) {
    appManager.init($cookieStore, $scope, appConfig, appModel, true);
    $state.go('main');
}]);