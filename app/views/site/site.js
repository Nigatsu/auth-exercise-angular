(function ()
{
  'use strict';

  angular.module('authExerciseApp').config(['$stateProvider', function ($stateProvider)
  {
    $stateProvider.state('site', {
      abstract: true,
      templateUrl: 'index.html',
      views: {
        '@': {
          template: '<ui-view />'
        }
        //'login@': { templateUrl: 'views/login/login.html', controller: 'LoginController as loginCtrl' },
        //'register@': {}
        , 'login@': {},
        'register@': {}
      },
      resolve: {

      }
    });

  }]);
})();
