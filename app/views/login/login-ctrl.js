'use strict';

/**
 * @ngdoc function
 * @name authExerciseApp.controller:LoginController
 * @description
 * # MainCtrl
 * Controller of the authExerciseApp
 */
angular.module('authExerciseApp').controller('LoginController', ['AuthService', function (AuthService)
{
  var ctrl = this;
  ctrl.login = function ()
  {
    if (ctrl.validate()) {
      ctrl.register = true;
      AuthService.login({name: ctrl.name, password: ctrl.password}, function ()
      {
        growl.info("Hello, " + ctrl.name + '!');
      });
    }
  };

  ctrl.validate = function ()
  {
    return !!(null != ctrl.name && null != ctrl.password);
  };
}]);
