'use strict';

/**
 * @ngdoc overview
 * @name authExerciseApp
 * @description
 * # authExerciseApp
 *
 * Main module of the application.
 */
var app = angular.module('authExerciseApp', ['ui.router', 'ngResource', 'ngMockE2E', 'angular-growl', 'ngCookies']);

app.config(['$urlRouterProvider', '$httpProvider', '$provide', 'growlProvider', function ($urlRouterProvider, $httpProvider, $provide, growlProvider) {
  $urlRouterProvider.otherwise('/');
  growlProvider.globalTimeToLive({success: 2000, error: 3000, warning: 3000, info: 4000});
  growlProvider.globalDisableCountDown(true);

  //$provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
  $httpProvider.interceptors.push('authInterceptor');
}]);
