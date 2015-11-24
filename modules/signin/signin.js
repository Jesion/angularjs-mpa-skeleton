var signin = angular.module('signin', ['app', 'ui.router']);

signin.config(function($stateProvider) {

    $stateProvider
        .state('signinform', {
            name: 'signinform',
            templateUrl: "/modules/signin/form.html",
            controller: function ($scope, $state, $http, $cookieStore) {
                $scope.signIn = function() {
                    setTimeout(function() {
                        console.log('Mocking a server response for user ' + $scope.userId + ' : ' + $scope.password + ' signin action');
                        $cookieStore.put('model', { user: { userId: $scope.userId, password: $scope.password }});
                        window.location.href = 'home.html';
                    }, 1000);
                };
            }
        })
});

signin.controller('signinController', ['$state', '$scope', '$cookieStore', 'appConfig', function ($state, $scope, $cookieStore, appConfig) {
    $scope.config = appConfig.init();
    $cookieStore.remove('model');
    $state.go('signinform');
}]);