'use strict';

/**
 * @ngdoc service
 * @name authExerciseApp.userService
 * @description
 * # userService
 * Service in the authExerciseApp.
 */
angular.module('authExerciseApp').service('UserService', function () {
  var userDao = $resource('/user/:a/', null, {
    get: {method: 'GET', isArray: false},
    getCurrent: {method: 'GET', isArray: false,  params: {a: 'current'}},
    register: {method: 'POST', isArray: false, params: {a: 'register'}},
    changePassword: {method: 'PATCH', params: {a: 'password'}}
  }), user = {};

  user.get = function (id) {
    return userDao.get({a: id}).$promise;
  };
  user.getCurrent = function () {
    return userDao.getCurrent().$promise;
  };
  user.register = function (login, password) {
    return userDao.register({name: login, password: password}).$promise;
  };
  user.changePassword = function (oldPass, newPass) {
    return userDao.changePassword({oldPassword: oldPass, newPassword: newPass}).$promise;
  }
});
