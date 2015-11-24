var app = angular.module('app', ['ngCookies']);

app.config(function($cookiesProvider) {
    $cookiesProvider.defaults.path = '/';
});

app.factory('appConfig', function () {
    var AppConfig = function () {

    };
    AppConfig.prototype.init = function () {
        //set some properties;
        return this;
    }
    return new AppConfig();
});

app.factory('appModel', function () {
    var AppModel = function() {
    };
    AppModel.prototype.init = function (data) {
        this.data = data;
        return this;
    }
    return new AppModel();
});

app.factory('appManager', function() {

    var model;
    var cookies;
    var persist = function() {
        cookies.put('data', model.data);
    }
    return {
        init: function ($cookieStore, $scope, appConfig, appModel) {
            $scope.model = appModel.init($cookieStore.get('data'));
            $scope.config = appConfig.init();
            model = $scope.model;
            cookies = $cookieStore;
            save();
        },
        save: function () {
            persist();
        }
    }
});