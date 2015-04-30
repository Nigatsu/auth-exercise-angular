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

app.config(['$urlRouterProvider', 'growlProvider', function ($urlRouterProvider, growlProvider) {
  $urlRouterProvider.otherwise('/');
  growlProvider.globalTimeToLive({success: 2000, error: 3000, warning: 3000, info: 4000});
  growlProvider.globalDisableCountDown(true);
}]);

app.run(['$httpBackend', function ($httpBackend) {
  var id = 1, users = [{id: 0, name: 'admin', password: 'admin'}],
      tokens = [];

  function generateToken() {
    return Math.random().toString(36).substr(2, 10);
  }

  function findToken(token) {
    for (var i = 0; i < tokens.length; i++) {
      if (token === tokens[i].token) {
        return {instance: tokens[i], position: i};
      }
    }
    return null;
  }

  function removeToken(token) {
    var dbToken = findToken(token);
    if (null != dbToken) {
      tokens.splice(dbToken.position, 1);
      return true;
    }
    return null;
  }

  function checkUser(user) {
    for (var i = 0; i < users.length; i++) {
      if (user.name === users[i].name) {
        if (user.password === users[i].password) {
          return users[i];
        }
      }
    }
    return null;
  }

  function checkUserByToken(token) {
    var dbToken = findToken(token);
    if (null != dbToken) {
      return dbToken.instance.user;
    }
    return null;
  }

  $httpBackend.whenPOST('/auth/register').respond(function (method, url, data, headers) {
    console.log('Registering with these data:', method, url, data, headers);
    var newUser = angular.fromJson(data);
    newUser.id = id++;
    users.push(newUser);
    return [200, {}, {}];
  });

  $httpBackend.whenPOST('/auth/login').respond(function (method, url, data, headers) {
    console.log('Authenticating with these data:', method, url, data, headers);
    var user = angular.fromJson(data), newToken, dbUser;

    if (null != user.name) {
      dbUser = checkUser(user);
      if (null != dbUser) {
        newToken = generateToken();
        tokens.push({token: newToken, user: dbUser});
        return [200, {token: newToken}, {}];
      }
    }
    return [401, {}, {}];
  });

  $httpBackend.whenPOST('/auth/logout').respond(function (method, url, data, headers) {
    console.log('Logging out:', method, url, data, headers);
    if (null != headers.Authorization) {
      if (null != removeToken(headers.Authorization.substr('Bearer '.length))) {
        return [200, {}, {}];
      }
      return [500, {}, {}];
    }
    return [401, {}, {}];
  });

  $httpBackend.whenGET(/^\/user\/\d{1,10}$/).respond(function (headers) {
    console.log('Get user:', headers);
    return [200, {}, {}];
  });

  $httpBackend.whenPATCH('/user/password').respond(function (method, url, data, headers) {
    console.log('Change user password:', method, url, data, headers);
    var user;
    if (null != headers.Authrization) {
      user = checkUserByToken(headers.Authrization);
      if (null != user) {
        var password = angular.fromJson(data);
        if (password.oldPassword != user.password) {
          user.password = password.newPassword;
          return [200, {}, {}];
        }
      }
    }
    return [401, {}, {}];
  });

  $httpBackend.whenGET(/\.html$/).passThrough();
}]);
