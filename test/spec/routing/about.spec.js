'use strict';

describe('Route: Home', function () {

  var $state, AuthService, UserService, $rootScope,
    scope, user = 'user';

  // load the controller's module
  beforeEach(module('authExerciseApp', function($provide) {
    $provide.service('AuthService', function () {
      var auth = false;
      this.login = function() {
        auth = true;
      };
      this.isAuthenticated = function() {
        return auth;
      };
      this.getToken = function () {
        return 'Bearer g5Xfe2hk';
      }
    });

    $provide.service('UserService', function () {
      var wasFired = true;
      this.getCurrent = function () {
        wasFired = !wasFired;
        return wasFired;
      }
    });
  }));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector, $templateCache) {
    $state = $injector.get('$state');
    AuthService = $injector.get('AuthService');
    UserService = $injector.get('UserService');
    $rootScope = $injector.get('$rootScope');

    $templateCache.put('views/site/site.html', '');
    $templateCache.put('/views/site/auth/login/login.html', '');
    $templateCache.put('/views/site/auth/menu/menu.html', '');
    $templateCache.put('/views/site/auth/about/about.html', '');
    $templateCache.put('/views/site/auth/login/home/home.html', '');
  }));

  it('should not display restricted view to the scope if not authenticated', function () {
    $state.go('site.auth.login');
    expect($rootScope.authenticated).toBeFalsy();
  });

  it('should display restricted view to the scope if authenticated', inject(function () {
    AuthService.login();
    $rootScope.$apply(function () {
      $state.go('site.auth.login');
    });
    expect($rootScope.authenticated && UserService.getCurrent()).toBeTruthy();
  }));

  it('should include correct states', inject(function () {
    AuthService.login();
    $rootScope.$apply(function () {
      $state.go('site.auth.login');
    });
    expect($state.includes('site')).toBeTruthy();
    expect($state.includes('*.auth.*')).toBeTruthy();
  }));

  it('should display restricted view to the scope if authenticated', inject(function () {
    AuthService.login();
    $rootScope.$apply(function () {
      $state.go('site.auth.login');
    });
    expect($rootScope.authenticated && UserService.getCurrent()).toBeTruthy();
  }));

  it('should state be abstract', inject(function () {
    AuthService.login();
    var homeState;
    $rootScope.$apply(function () {
      homeState = $state.get('site.auth.login');
    });
    expect(homeState.abstract).toBeFalsy();
  }));
});
