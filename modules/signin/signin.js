var signin = angular.module('signin', ['app', 'ui.router']);

signin.config(function($stateProvider) {

    $stateProvider
        .state('main', {
            name: 'main',
            templateUrl: "/modules/signin/main.html",
            controller: function ($scope, appModel) {
                $scope.signIn = function() {
                    setTimeout(function() {
                        console.log('Mocking a server response for user ' + $scope.userId + ' : ' + $scope.password + ' signin action');
                        appModel.save({ user: { userId: $scope.userId, password: $scope.password }});
                        window.location.href = 'home.html';
                    }, 1000);
                };
            }
        })
});

signin.controller('signinController', ['$state', '$scope', '$cookieStore', 'appConfig', 'appModel', 'appManager', function ($state, $scope, $cookieStore, appConfig, appModel, appManager) {
    appManager.init(appConfig, $cookieStore, $scope, appModel, true);
    $state.go('main');
}]);