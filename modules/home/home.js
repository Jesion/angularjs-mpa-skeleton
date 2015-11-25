/**
 * Created by Jesion on 2015-11-25.
 */

var home = angular.module('home', ['app', 'ui.router']);

home.config(function($stateProvider) {

    $stateProvider
        .state('main', {
            name: 'main',
            templateUrl: "/modules/home/main.html",
            controller: function ($scope, $state, $http, $cookieStore, appModel) {

            }
        })
});

home.controller('homeController', ['$state', '$scope', '$cookieStore', 'appConfig', 'appModel', 'appManager', function ($state, $scope, $cookieStore, appConfig, appModel, appManager) {
    appManager.init($cookieStore, $scope, appConfig, appModel, false);
    $state.go('main');
}]);