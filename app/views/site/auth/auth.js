(function () {
  'use strict';

  angular.module('authExerciseApp').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('site.auth', {
      abstract: true, views: {
        '@site': {
          template: '<ui-view></ui-view>', controller: 'AuthenticationController as authController'
        },
        'no-auth@site': {
          templateUrl: 'views/site/auth/login/login.html', controller: 'LoginController as loginCtrl'
        },
        'menu@site': {
          templateUrl: 'views/site/auth/menu/menu.html', controller: 'MenuController as menuCtrl'
        }
      }, resolve: {
        User: function (AuthService, UserService, $rootScope) {
          console.info('AuthState: resolving user rights!');
          if (AuthService.isAuthenticated()) {
            $rootScope.authenticated = true;
            return UserService.getCurrent();
          } else {
            $rootScope.authenticated = false;
          }
        }
      }
    });

  }]);
})();
