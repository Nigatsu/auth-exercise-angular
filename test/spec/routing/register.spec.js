'use strict';

describe('Route: Register', function () {

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
      var newUser;
      this.getCurrent = function () {
        return newUser;
      };
      this.register = function (name, password) {
        newUser = {name: name, password: password};
      }
    });
  }));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector, $templateCache) {
    $state = $injector.get('$state');
    AuthService = $injector.get('AuthService');
    UserService = $injector.get('UserService');
    $rootScope = $injector.get('$rootScope');

    spyOn(AuthService, 'login').and.callThrough();
    spyOn(UserService, 'register').and.callThrough();

    $templateCache.put('views/site/site.html', '');
    $templateCache.put('/views/site/auth/login/login.html', '');
    $templateCache.put('/views/site/auth/menu/menu.html', '');
    $templateCache.put('/views/site/auth/about/about.html', '');
    $templateCache.put('/views/site/auth/login/home/home.html', '');
    $templateCache.put('views/site/auth/register/register.html', '');
  }));

  it('should display view to the scope if not authenticated', function () {
    $state.go('site.auth.register');
    expect($rootScope.authenticated).toBeFalsy();
  });

  it('should redirect to home view if authenticated', inject(function () {
    UserService.register('user', 'user');
    AuthService.login('user', 'user');
    $rootScope.$apply(function () {
      $state.go('site.auth.register');
    });
    expect(UserService.register).toHaveBeenCalledWith('user', 'user');
    expect(AuthService.login).toHaveBeenCalledWith('user', 'user');
    expect($rootScope.authenticated && UserService.getCurrent()).toBeTruthy();
    expect($state.current.name).toBe('site.auth.login');
  }));

  it('should not redirect to home view if not authenticated', inject(function () {
    UserService.register('user', 'user');
    $rootScope.$apply(function () {
      $state.go('site.auth.register');
    });
    expect(UserService.register).toHaveBeenCalledWith('user', 'user');
    expect(AuthService.login).not.toHaveBeenCalled();
    expect($rootScope.authenticated && UserService.getCurrent()).toBeFalsy();
    expect($state.current.name).not.toBe('site.auth.login');
  }));

  it('should be available on register url', inject(function () {
    $rootScope.$apply(function () {
      $state.go('site.auth.register');
    });
    expect($state.current.url).toBe('/register');
  }));
});
