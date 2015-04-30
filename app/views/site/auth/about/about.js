(function () {
  'use strict';

  angular.module('authExerciseApp').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('site.auth.about', {
      url: '/about', views: {
        '@site.auth': {
          templateUrl: '/views/site/auth/about/about.html', controller: 'AboutController as aboutCtrl'
        }
      }
    });

  }]);
})();
