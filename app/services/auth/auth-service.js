'use strict';

/**
 * @ngdoc service
 * @name authExerciseApp.authService
 * @description
 * # authService
 * Service in the authExerciseApp.
 */
angular.module('authExerciseApp').service('AuthService', ['$resource', '$cookies', '$state', function ($resource, $cookies, $state) {
  var authDao = $resource('/auth/:a/', null, {
    login: {method: 'POST', isArray: false, params: {a: 'login'}},
    logout: {method: 'POST', isArray: false, params: {a: 'logout'}}
  }), loginPromise, token = $cookies.get('token'), auth = {}, logoutPromise;

  auth.isAuthenticated = function () {
    return token ? true : false;
  };
  auth.login = function (login, password) {
    loginPromise = authDao.login({name: login, password: password}).$promise;
    loginPromise.then(function (data) {
      token = 'Bearer ' + data.token;
      $cookies.put('token', token);
      console.info('AuthService: Logging in!');
      $state.reload();
    }, function () {
      token = false;
    });
    return loginPromise;
  };
  auth.logout = function () {
    token = false;
    $cookies.remove('token');
    logoutPromise = authDao.logout().$promise;
    console.info('AuthService: Logging out!');
    $state.reload();
    return logoutPromise;
  };
  auth.getToken = function () {
    return token;
  };

  return auth;
}]);
