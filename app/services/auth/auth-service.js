'use strict';

/**
 * @ngdoc service
 * @name authExerciseApp.authService
 * @description
 * # authService
 * Service in the authExerciseApp.
 */
angular.module('authExerciseApp').factory('AuthService', ['$q', '$resource', '$cookies', function ($q, $resource, $cookies)
{
    var api = $resource('/auth/:a', null, {
        login: {method: 'POST', params: {a: 'login'}},
        logout: {method: 'POST', params: {a: 'logout'}}
    });

    return {
        isAuthenticated: function ()
        {
            return !!$cookies.get('token');

        },
        login: function (name, password)
        {
            var deferred = $q.defer();
            api.login({name: name, password: password}).$promise.then(function (result)
            {
                $cookies.put('token', 'Bearer ' + result.token);
                deferred.resolve(result);
            });
            return deferred.promise;
        },
        logout: function ()
        {
            var deferred = $q.defer();
            api.logout().$promise.then(function (result)
            {
                $cookies.remove('token');
                deferred.resolve(result);
            });
            return deferred.promise;
        },
        getToken: function ()
        {
            return !!$cookies.get('token') ? $cookies.get('token') : false;
        }
    };
}]);
