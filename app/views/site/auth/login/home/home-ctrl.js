'use strict';

/**
 * @ngdoc function
 * @name authExerciseApp.controller:AboutController
 * @description
 * # MainCtrl
 * Controller of the authExerciseApp
 */
angular.module('authExerciseApp').controller('HomeController', ['User', function (User) {
  console.log('Home controller!');
  this.user = User;
}]);
