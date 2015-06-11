(function ()
{
    'use strict';

  angular.module('authExerciseApp').config(['$stateProvider', function ($stateProvider) {
      $stateProvider.state('site.auth.login', {
          views: {
              '@site': {
                  templateUrl: 'views/site/auth/login/login.html', controller: 'LoginController as loginCtrl'
              }
          }
      });
  }]);
})();
