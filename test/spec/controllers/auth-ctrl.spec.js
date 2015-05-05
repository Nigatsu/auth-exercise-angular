'use strict';

describe('Controller: AuthCtrl', function () {

  // load the controller's module
  beforeEach(module('authExerciseApp'));

  var AuthCtrl,
    scope, user = 'user';

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    spyOn(console, 'log').and.callThrough();
    AuthCtrl = $controller('AuthenticationController', {
      $scope: scope,
      User: user
    });
  }));

  it('should AuthCtrl be available', function () {
    expect(!!AuthCtrl).toBe(true);
  });

  it('should log presence', function () {
    expect(console.log).toHaveBeenCalledWith('Auth controller!');
  });

  it('should assign user to the scope', function () {
    expect(AuthCtrl.user).toBe(user);
  });
});
