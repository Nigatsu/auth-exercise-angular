(function ()
{
  'use strict';

  angular.module('authExerciseApp').config(['$stateProvider', function ($stateProvider)
  {
    $stateProvider.state('login', {
      parent: 'site', url: '/', templateUrl: 'views/login/login.html', controller: 'LoginController as loginCtrl'
    });

  }]);
})();
