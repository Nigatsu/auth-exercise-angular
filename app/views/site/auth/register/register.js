(function () {
  'use strict';

  angular.module('authExerciseApp').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('site.auth.register', {
      url: '/register', views: {
        'no-auth@site': {
          templateUrl: 'views/site/auth/register/register.html', controller: 'RegisterController as registerCtrl'
        }
      },
      resolve: {
        Allowed: function (User, $state) {
          console.info('RegisterState: resolving if user logged in!');
          if (null != User) {
            console.info('RegisterState: user logged in, return to home!');
            $state.go('site.auth.login', {}, {reload: true});
          }
        }
      }
    });

  }]);
})();
