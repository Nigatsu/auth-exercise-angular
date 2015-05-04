(function () {
  'use strict';

  angular.module('authExerciseApp').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('site.auth.login', {
      url: '/', views: {
        'no-auth@site': {
          templateUrl: '/views/site/auth/login/login.html', controller: 'LoginController as loginCtrl'
        }, '@site.auth': {
          templateUrl: '/views/site/auth/login/home/home.html', controller: 'HomeController as homeCtrl'
        }
      }
    });

  }]);
})();
