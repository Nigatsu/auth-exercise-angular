'use strict';

/**
 * @ngdoc function
 * @name authExerciseApp.controller:AuthenticationController
 * @description
 * # AboutCtrl
 * Controller of the authExerciseApp
 */
angular.module('authExerciseApp').controller('AuthenticationController', ['User', function (User) {
  console.log('Auth controller!');
  this.user = User;
}]);
