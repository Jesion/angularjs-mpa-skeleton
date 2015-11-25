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
    AppModel.prototype.clean = function () {
        this.data = null;
        return this;
    }
    return new AppModel();
});

app.factory('appManager', function() {

    //properties below go to AppModel together with persist / remove methods..
    var data;
    var cookies;
    var persist = function(data) {
        this.data = data;
        cookies.put('data', data);
    }
    var remove = function () {
        this.data = null;
        cookies.remove('data');
    }
    return {
        init: function ($cookieStore, $scope, appConfig, appModel, shouldClear) {
            cookies = $cookieStore;
            $scope.config = appConfig.init();
            if (shouldClear == false) {
                var data = $cookieStore.get('data');
                var model = appModel.init(data);
                this.save(model.data);
                $scope.model = model;
            } else {
                this.clean();
            }
        },
        save: function (data) {
            persist(data);
        },
        clean: function() {
            remove();
        }
    }
});