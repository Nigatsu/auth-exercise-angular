(function ()
{
  'use strict';

  angular.module('authExerciseApp').config(['$stateProvider', function ($stateProvider)
  {
    $stateProvider.state('about', {
      parent: 'site', url: '/about', templateUrl: 'views/login/login.html', controller: 'AboutController as aboutCtrl'
    });

  }]);
})();
