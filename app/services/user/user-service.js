'use strict';

/**
 * @ngdoc service
 * @name authExerciseApp.UserService
 * @description
 * # userService
 * Service in the authExerciseApp.
 */
angular.module('authExerciseApp').service('UserService', ['$resource', function ($resource)
{
    var api = $resource('/user/:a', null, {
        updatePassword: {method: 'PATCH', params: {a: 'password'}},
        getCurrent: {method: 'GET', params: {a: 'current'}},
        register: {method: 'POST', params: {a: 'register'}}
    });

    return {
        getCurrent: function ()
        {
            return api.getCurrent().$promise;
        },
        register: function (name, password)
        {
            return api.register({name: name, password: password}).$promise;
        },
        changePassword: function ()
        {

        }
    };
}]);
