'use strict';

/**
 * @ngdoc function
 * @name authExerciseApp.controller:RegisterController
 * @description
 * # AboutCtrl
 * Controller of the authExerciseApp
 */
angular.module('authExerciseApp').controller('RegisterController', ['AuthService', 'growl', '$scope', function (AuthService, growl, $scope) {
  var ctrl = this;
  ctrl.register = function () {
    if (ctrl.validate()) {
      AuthService.register({name: ctrl.login, password: ctrl.password}, function () {
        growl.info("User " + ctrl.login + 'successfully registered!');
        $scope.$parent.register = false;
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
