var app = angular.module('app', ['ngCookies']);

app.config(function($cookiesProvider) {
    $cookiesProvider.defaults.path = '/';
});

app.factory('appConfig', function () {
    var AppConfig = function () {

    };
    AppConfig.prototype.init = function () {
        return this;
    }
    return new AppConfig();
});

app.factory('appModel', function () {
    var AppModel = function() {

    };
    AppModel.prototype.init = function (storage) {
        this.storage = storage;
        var data = this.storage.get('data');
        if (data != null) {
            this.save(data);
        }
        return this;
    }
    AppModel.prototype.save = function (data) {
        this.data = data;
        this.storage.put('data', data);
    }
    AppModel.prototype.clear = function () {
        this.data = null;
        this.storage.remove('data');
    }
    return new AppModel();
});

app.factory('appManager', function() {

    return {
        init: function (appConfig, $cookieStore, $scope, appModel, shouldClear) {
            $scope.config = appConfig.init();
            var model = appModel.init($cookieStore);
            if (shouldClear == true) {
                model.clear();
            }
            $scope.model = model;
        }
    }
});