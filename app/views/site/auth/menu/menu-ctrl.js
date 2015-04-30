'use strict';

/**
 * @ngdoc function
 * @name authExerciseApp.controller:LoginController
 * @description
 * # MainCtrl
 * Controller of the authExerciseApp
 */
angular.module('authExerciseApp').controller('MenuController',
  ['Authenticated', function (Authenticated) {
    console.log('jestem w menuCtrl!');
    this.user = {name: 'Admin'};
  }]);
