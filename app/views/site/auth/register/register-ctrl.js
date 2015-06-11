'use strict';

/**
 * @ngdoc function
 * @name authExerciseApp.controller:RegisterController
 * @description
 * # AboutCtrl
 * Controller of the authExerciseApp
 */
angular.module('authExerciseApp').controller('RegisterController', ['$state', 'AuthService', 'UserService', function ($state, AuthService, UserService)
{
    var ctrl = this;

    this.login = null;
    this.password = null;
    this.passwordRetype = null;

    this.register = function ()
    {
        if (ctrl.login && ctrl.password === ctrl.passwordRetype) {
            UserService.register(ctrl.login, ctrl.password).then(function ()
            {
                AuthService.login(ctrl.login, ctrl.password).then(function ()
                {
                    $state.go('site.auth.login', {}, {reload: true});
                });
            });
        }
    };
}]);
