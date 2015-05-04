'use strict';

/**
 * @ngdoc function
 * @name authExerciseApp.controller:LoginController
 * @description
 * # MainCtrl
 * Controller of the authExerciseApp
 */
angular.module('authExerciseApp').controller('MenuController',
  ['AuthService', 'User', function (AuthService, User) {
    console.log('jestem w menuCtrl!');
    this.logout = function () {
      AuthService.logout();
    };
    this.user = User;
  }]);
