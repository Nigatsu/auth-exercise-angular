(function () {
  'use strict';

  angular.module('authExerciseApp').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('site', {
      abstract: true, views: {
        '@': {
          templateUrl: 'views/site/site.html'
        }
      }
    });

  }]);
})();
