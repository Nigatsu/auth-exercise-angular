(function () {
  'use strict';

  angular.module('authExerciseApp').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('site.auth.about', {
      views: {
        '@site': {
          templateUrl: 'views/site/auth/about/register.html'
        }
      }
    });
  }]);
})();
