'use strict';

/**
 * @ngdoc service
 * @name authExerciseApp.authService
 * @description
 * # authService
 * Service in the authExerciseApp.
 */
angular.module('authExerciseApp').service('AuthService', ['$resource', function ($resource)
{
  return $resource('/auth/:a/', null, {
    login: {method: 'POST', isArray: false, params: {a: 'login'}}, register: {method: 'POST', isArray: false, params: {a: 'register'}}
  });
}]);
