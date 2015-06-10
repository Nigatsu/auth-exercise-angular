'use strict';

/**
 * @ngdoc factory
 * @name authExerciseApp.authInterceptor
 * @description
 * # authInterceptor
 * Factory in the authExerciseApp.
 */
angular.module('authExerciseApp').factory('authInterceptor', ['AuthService', function (AuthService)
{
    return {
        request: function ()
        {
            return AuthService.getToken() ? {headers: {Authorization: AuthService.getToken()}} : {headers: {Authorization: false}};
        }
    };

}]);
