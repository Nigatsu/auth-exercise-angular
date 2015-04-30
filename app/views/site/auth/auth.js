(function () {
  'use strict';

  angular.module('authExerciseApp').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('site.auth', {
      abstract: true, views: {
        '@site': {
          template: '<ui-view></ui-view>', controller: 'AuthenticationController as authController'
        },
        'menu@site': {
          templateUrl: '/views/site/auth/menu/menu.html', controller: 'MenuController as menuctrl'
        }
      }, resolve: {
        Authenticated: function (AuthService) {
          console.log('Sprawdzanie auth!!');
          return AuthService.isAuthenticated();
        }
      }
    });

  }]);
})();
