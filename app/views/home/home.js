(function ()
{
  'use strict';

  angular.module('authExerciseApp').config(['$stateProvider', function ($stateProvider)
  {
    $stateProvider.state('home', {
      parent: 'site', url: '/', templateUrl: 'views/home/home.html', controller: 'HomeController as homeCtrl'
    });

  }]);
})();
