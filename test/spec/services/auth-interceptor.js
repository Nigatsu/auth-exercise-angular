describe('Factory: authInterceptor', function () {

  var authInterceptor, AuthService, tokenAvailable = true;

  // load the controller's module
  beforeEach(module('authExerciseApp', function ($provide) {
    $provide.service('AuthService', function () {
      this.getToken = function () {
        if (tokenAvailable) {
          return 'Bearer g5Xfe2hk';
        }
      }
    });
  }));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    authInterceptor = $injector.get('authInterceptor');
    AuthService = $injector.get('AuthService');
    spyOn(AuthService, 'getToken').and.callThrough();
  }));

  it('should authInterceptor be available', function () {
    expect(!!authInterceptor).toBe(true);
  });

  it('should config request', function () {
    expect(typeof authInterceptor.request).toBe('function');
  });

  it('should set token from AuthService', function () {
    var header = authInterceptor.request({});
    expect(header.headers.Authorization).toBe('Bearer g5Xfe2hk');
    expect(AuthService.getToken).toHaveBeenCalled();
  });

  it('should not set token from AuthService if not available', function () {
    tokenAvailable = false;
    var header = authInterceptor.request({});
    expect(header.headers.Authorization).toBeFalsy();
    expect(AuthService.getToken).toHaveBeenCalled();
  });

});
