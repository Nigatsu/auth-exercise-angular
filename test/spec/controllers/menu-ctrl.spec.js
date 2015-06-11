'use strict';

describe('Controller: Menu', function () {

  var MenuCtrl, $state, AuthService, $rootScope,
    scope;

  // load the controller's module
  beforeEach(module('authExerciseApp', function($provide) {
    $provide.service('AuthService', function () {
      var auth = true;
      this.isAuthenticated = function () {
        return auth;
      };
      this.logout = function () {
        auth = false;
      };
    });
  }));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector, $templateCache, $controller) {
    $state = $injector.get('$state');
    AuthService = $injector.get('AuthService');
    $rootScope = $injector.get('$rootScope');

    spyOn(AuthService, 'logout').and.callThrough();

    scope = $rootScope.$new();
    MenuCtrl = $controller('MenuController', {
      $scope: scope,
      User: {name: 'user'}
    });

    $templateCache.put('views/site/site.html', '');
    $templateCache.put('/views/site/auth/login/login.html', '');
    $templateCache.put('/views/site/auth/menu/menu.html', '');
    $templateCache.put('/views/site/auth/about/about.html', '');
    $templateCache.put('/views/site/auth/login/home/home.html', '');
    $templateCache.put('views/site/auth/register/register.html', '');
  }));

  it('should MenuCtrl be available', function () {
    expect(!!MenuCtrl).toBe(true);
  });

  it('should assign user if authenticated', function () {
    expect(MenuCtrl.user.name).toBe('user');
  });

  it('should logout on demand', function () {
    MenuCtrl.logout();
    expect(AuthService.logout).toHaveBeenCalled();
    expect(AuthService.isAuthenticated()).toBeFalsy();
  });

});
