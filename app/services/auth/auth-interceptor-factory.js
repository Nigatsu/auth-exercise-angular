'use strict';

/**
 * @ngdoc factory
 * @name authExerciseApp.authInterceptor
 * @description
 * # authInterceptor
 * Factory in the authExerciseApp.
 */
angular.module('authExerciseApp').factory('authInterceptor', ['$injector', function ($injector)
{
  return {
    // Add authorization token to headers
    request: function (config)
    {
      $injector.invoke(function($http, AuthService) {
        config.headers = config.headers || {};
        var token = AuthService.getToken();
        if (token) {
          config.headers.Authorization = token;
        }
      });
      return config;
    }
  };
}]);
