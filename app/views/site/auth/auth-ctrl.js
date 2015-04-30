'use strict';

/**
 * @ngdoc function
 * @name authExerciseApp.controller:AuthenticationController
 * @description
 * # AboutCtrl
 * Controller of the authExerciseApp
 */
angular.module('authExerciseApp').controller('AuthenticationController', ['$rootScope', 'Authenticated', function ($rootScope, Authenticated) {
  console.log('Auth controller!');
  this.authenticated = Authenticated;
}]);
