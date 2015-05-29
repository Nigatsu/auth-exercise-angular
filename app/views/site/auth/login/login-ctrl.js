'use strict';

/**
 * @ngdoc function
 * @name authExerciseApp.controller:LoginController
 * @description
 * # MainCtrl
 * Controller of the authExerciseApp
 */
angular.module('authExerciseApp').controller('LoginController',
  ['AuthService', 'growl', function (AuthService, growl) {
    console.log('Login controller!');
    var ctrl = this;
    ctrl.login = function () {
      if (ctrl.validate()) {
        AuthService.login(ctrl.name, ctrl.password).then(function () {
          growl.info('Hello, ' + ctrl.name + '!');
        });
      }
    };

    ctrl.validate = function () {
      return !!(null != ctrl.name && null != ctrl.password);
    };
  }]);
