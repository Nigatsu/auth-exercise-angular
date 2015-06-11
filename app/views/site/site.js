(function () {
  'use strict';

  angular.module('authExerciseApp').config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('site', {
      abstract: true,
      views: {
        '@site': {
          templateUrl: 'views/site/site.html'
        }
      }
    });
  }]);
})();
