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
        request: function (config)
        {
            return $injector.invoke(function ($http, AuthService)
            {
                config.headers = AuthService.getToken() ? {Authorization: AuthService.getToken()} : {};
                return config;
            });
        }
    };

}]);
