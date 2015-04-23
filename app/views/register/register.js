(function ()
{
  'use strict';

  angular.module('authExerciseApp').config(['$stateProvider', function ($stateProvider)
  {
    $stateProvider.state('register', {
      url: '/register', templateUrl: 'views/register/register.html', controller: 'RegisterController as registerCtrl'
    });

  }]);
})();
