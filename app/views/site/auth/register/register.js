(function () {
  'use strict';

  angular.module('authExerciseApp').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('site.register', {
      url: '/register', views: {
        'register@site': {
          templateUrl: '/register.html', controller: 'RegisterController as registerCtrl'
        }
      }
    });

  }]);
})();
