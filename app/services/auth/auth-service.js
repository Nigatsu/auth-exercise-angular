'use strict';

/**
 * @ngdoc service
 * @name authExerciseApp.authService
 * @description
 * # authService
 * Service in the authExerciseApp.
 */
angular.module('authExerciseApp').service('AuthService', ['$resource', '$cookies', function ($resource, $cookies) {
  var authDao = $resource('/auth/:a/', null, {
    login: {method: 'POST', isArray: false, params: {a: 'login'}},
    logout: {method: 'POST', isArray: false, params: {a: 'logout'}}
  }), loginPromise, isAuthenticated = true, auth = {};

  auth.isAuthenticated = function () {
    return isAuthenticated;
  };
  auth.login = function (login, password) {
    loginPromise = authDao.login({name: login, password: password}).$promise;
    loginPromise.then(function (data) {
      isAuthenticated = true;
      $cookies.put('token', 'Bearer ' + data.token);
    }, function () {
      isAuthenticated = false;
    });
    return loginPromise;
  };
  auth.logout = function () {
    isAuthenticated = false;
    $cookies.remove('token');
    return authDao.logout().$promise;
  };

  return auth;
}]);
