'use strict';

/**
 * @ngdoc overview
 * @name authExerciseApp
 * @description
 * # authExerciseApp
 *
 * Main module of the application.
 */
var app = angular.module('authExerciseApp', ['ui.router', 'ngResource', 'ngMockE2E', 'angular-growl']);

app.config(['$urlRouterProvider', function ($urlRouterProvider)
{
  $urlRouterProvider.otherwise('/');
}]);

app.run(['$httpBackend', function ($httpBackend)
{
  var users = [{name: 'admin', password: 'admin'}], auth = '/auth';

  $httpBackend.whenPOST(auth + '/register').respond(function (method, url, data, headers)
  {
    console.log('Registering with these data:', method, url, data, headers);
    users.push(angular.fromJson(data));
    return [200, {}, {}];
  });

  $httpBackend.whenPOST(auth + '/login').respond(function (method, url, data, headers)
  {
    console.log('Authenticating with these data:', method, url, data, headers);
    var user = angular.fromJson(data), i;

    if (null != user.name) {
      for (i = 0; i < users.length; i++) {
        if (user.name === users[i].name) {
          if (user.password === users[i].password) {
            return [200, {}, {}];
          }
        }
      }
    }
    return [401, {}, {}];
  });

  $httpBackend.whenGET(/\.html$/).passThrough();
}]);
