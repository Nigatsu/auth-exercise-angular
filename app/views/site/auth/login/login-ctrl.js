'use strict';

/**
 * @ngdoc function
 * @name authExerciseApp.controller:LoginController
 * @description
 * # MainCtrl
 * Controller of the authExerciseApp
 */
angular.module('authExerciseApp').controller('LoginController', ['AuthService', function (AuthService)
{
    console.log('Login controller!');

    this.name = null;
    this.password = null;

    this.login = function (name, password)
    {
        if(name && password) {
            AuthService.login(name, password);
        }
    };
}]);
