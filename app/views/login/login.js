(function ()
{
  'use strict';

  angular.module('authExerciseApp').config(['$stateProvider', function ($stateProvider)
  {
    $stateProvider.state('login', {
      templateUrl: 'views/login/login.html', controller: 'LoginController as loginCtrl'
    });

  }]);
})();
