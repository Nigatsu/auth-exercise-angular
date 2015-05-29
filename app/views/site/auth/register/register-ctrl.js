'use strict';

/**
 * @ngdoc function
 * @name authExerciseApp.controller:RegisterController
 * @description
 * # AboutCtrl
 * Controller of the authExerciseApp
 */
angular.module('authExerciseApp').controller('RegisterController',
  ['UserService', 'growl', 'AuthService', '$state', function (UserService, growl, AuthService, $state) {
    console.log('Register controller!');

    var ctrl = this;
    ctrl.register = function () {
      if (ctrl.validate()) {
        UserService.register(ctrl.login, ctrl.password).then(function () {
          growl.info("User " + ctrl.login + ' successfully registered!');
          AuthService.login(ctrl.login, ctrl.password).then(function () {
            $state.go('site.auth.login', {}, {reload: true});
            growl.info('Hello, ' + ctrl.login + '!');
          });
        });
      }
    };

    ctrl.validate = function () {
      if (null != ctrl.login && null != ctrl.password && null != ctrl.passwordRetype) {
        if (ctrl.password === ctrl.passwordRetype) {
          return true;
        }
      }
      return false;
    };
  }]);
