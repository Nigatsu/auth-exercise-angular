'use strict';

describe('Controller: Register', function () {

  var RegisterCtrl, $state, AuthService, UserService, $rootScope,
    scope, user = 'user', registerThen, loginThen;

  // load the controller's module
  beforeEach(module('authExerciseApp', function($provide) {
    $provide.service('AuthService', function () {
      var auth = false;
      this.login = function() {
        auth = true;
        return {then: loginThen.and.callFake(function (callback) {
          callback();
        })}
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
        if ('test' != name || 'test' != password) {
          newUser = {name: name, password: password};
          return {then: registerThen.and.callFake(function (callback) {
            callback();
          })}
        } else {
          return {then: function () {}};
        }
      }
    });
  }));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector, $templateCache, $controller) {
    $state = $injector.get('$state');
    AuthService = $injector.get('AuthService');
    UserService = $injector.get('UserService');
    $rootScope = $injector.get('$rootScope');
    loginThen = jasmine.createSpy('then');
    registerThen = jasmine.createSpy('then');

    spyOn(AuthService, 'login').and.callThrough();
    spyOn(UserService, 'register').and.callThrough();

    scope = $rootScope.$new();
    RegisterCtrl = $controller('RegisterController', {
      $scope: scope
    });

    $templateCache.put('views/site/site.html', '');
    $templateCache.put('/views/site/auth/login/login.html', '');
    $templateCache.put('/views/site/auth/menu/menu.html', '');
    $templateCache.put('/views/site/auth/about/about.html', '');
    $templateCache.put('/views/site/auth/login/home/home.html', '');
    $templateCache.put('views/site/auth/register/register.html', '');
  }));

  it('should RegisterCtrl be available', function () {
    expect(!!RegisterCtrl).toBe(true);
  });

  it('should validate and register if input data is correct', inject(function () {
    RegisterCtrl.login = 'user';
    RegisterCtrl.password = 'user';
    RegisterCtrl.passwordRetype = 'user';
    expect(RegisterCtrl.login && RegisterCtrl.password && RegisterCtrl.passwordRetype).toBeTruthy();

    $rootScope.$apply(function () {
      RegisterCtrl.register('user', 'user');
    });

    expect($rootScope.authenticated && UserService.getCurrent()).toBeTruthy();
  }));

  it('should validate and cancel register if input data is incorrect', inject(function () {
    RegisterCtrl.login = 'user';
    RegisterCtrl.password = 'user';
    RegisterCtrl.passwordRetype = 'admin';
    expect(RegisterCtrl.login && RegisterCtrl.password && RegisterCtrl.passwordRetype).toBeTruthy();

    $rootScope.$apply(function () {
      RegisterCtrl.register('user', 'user');
    });

    expect($rootScope.authenticated && UserService.getCurrent()).toBeFalsy();
  }));

  it('should validate and cancel register if input data is empty', inject(function () {
    expect(RegisterCtrl.login && RegisterCtrl.password && RegisterCtrl.passwordRetype).toBeFalsy();

    $rootScope.$apply(function () {
      RegisterCtrl.register('user', 'user');
    });

    expect($rootScope.authenticated && UserService.getCurrent()).toBeFalsy();
  }));

  it('should not login if the user is not registered', inject(function () {
    RegisterCtrl.login = 'test';
    RegisterCtrl.password = 'test';
    RegisterCtrl.passwordRetype = 'test';

    $rootScope.$apply(function () {
      RegisterCtrl.register();
    });
    expect(registerThen).not.toHaveBeenCalled();
    expect(loginThen).not.toHaveBeenCalled();
  }));

  it('should login if the user is registered', inject(function () {
    RegisterCtrl.login = 'user';
    RegisterCtrl.password = 'user';
    RegisterCtrl.passwordRetype = 'user';

    $rootScope.$apply(function () {
      RegisterCtrl.register();
    });
    expect(registerThen).toHaveBeenCalled();
    expect(loginThen).toHaveBeenCalled();
  }));

});
