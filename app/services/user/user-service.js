'use strict';

/**
 * @ngdoc service
 * @name authExerciseApp.userService
 * @description
 * # userService
 * Service in the authExerciseApp.
 */
angular.module('authExerciseApp').service('UserService', ['$resource', function ($resource) {
  var userDao = $resource('/user/:a/', null, {
    getCurrent: {method: 'GET', isArray: false,  params: {a: 'current'}},
    register: {method: 'POST', isArray: false, params: {a: 'register'}}
  }), user = {};

  user.getCurrent = function () {
    return userDao.getCurrent().$promise;
  };
  user.register = function (login, password) {
    return userDao.register({name: login, password: password}).$promise;
  };

  return user;
}]);
