/**
 * Created by Jesion on 2015-11-25.
 */

var home = angular.module('home', ['app', 'ui.router']);

home.config(function($stateProvider) {

    $stateProvider
        .state('main', {
            name: 'main',
            templateUrl: "/modules/home/main.html"
        })
});

home.controller('homeController', ['$state', '$scope', '$cookieStore', 'appConfig', 'appModel', 'appManager', function ($state, $scope, $cookieStore, appConfig, appModel, appManager) {
    appManager.init(appConfig, $cookieStore, $scope, appModel, false);
    $state.go('main');
}]);