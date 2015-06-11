'use strict';

/**
 * @ngdoc function
 * @name authExerciseApp.controller:MenuController
 * @description
 * # MenuCtrl
 * Controller of the authExerciseApp
 */
angular.module('authExerciseApp').controller('MenuController', ['User', 'AuthService', function (User, AuthService)
{
    this.user = User;

    this.logout = function ()
    {
        AuthService.logout();
    };
}]);
