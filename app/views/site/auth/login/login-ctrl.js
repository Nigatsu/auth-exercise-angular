'use strict';

/**
 * @ngdoc function
 * @name authExerciseApp.controller:LoginController
 * @description
 * # MainCtrl
 * Controller of the authExerciseApp
 */
angular.module('authExerciseApp').controller('LoginController',
  ['$rootScope', 'AuthService', 'growl', 'Authenticated', function ($rootScope, AuthService, growl, Authenticated) {
    console.log('jestem w loginCtrl!');
    var ctrl = this;
    ctrl.login = function () {
      if (ctrl.validate()) {
        ctrl.register = true;
        AuthService.login(ctrl.name, ctrl.password).then(function () {
          growl.info('Hello, ' + ctrl.name + '!');
          $rootScope.authenticated = true;
        });
      }
    };

    ctrl.validate = function () {
      return !!(null != ctrl.name && null != ctrl.password);
    };
  }]);
