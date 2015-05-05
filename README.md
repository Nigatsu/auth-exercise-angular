# Auth App Exercise
## Part I - API authentication

## Summary
Application with simple token based authentication.

Application provides API for authenticating the user based on credentials (username and password).
We want to authenticate existing user or create new and provide them with access to resources available
only to registered users. Moreover, it should extensively make use of `$stateProvider` abstract views
for authentication.

## Goal

Your first task is to implement simple communication with backend using AngularJS. You are given a few
mocked endpoints that will be sufficient for your needs. We need following services:

```
  AuthService (auth-service.js)
```

**Methods:**

    * isAuthenticated() - return boolean value depending if token cookie is set
    * authenticate(name, password) - authenticate the user given the name(user name) and password. Set token cookie.
    * expire() - de-authenticate the user and remove the token cookie

and

```
  UserService (user-service.js)
```

**Methods:**

    * getCurrent() - get current user using XHR Authorization token headers
    * register(name, password) - register the user given the new name(user name) and password
    * changePassword() - change the password for the current user


As mentioned in signatures above, we are going to use angular $cookies service to ensure our session. Backend
is prepared to persist token(as fixed) for user ```admin(Name: admin, Password: admin)``` for the convenience of
the next exercises. Use token ```'Bearer g5Xfe2hk'``` as a fixed header to test if your services are working
correctly. Make sure that methods signatures are not changed, meaning you are not allowed to add any
extra properties to the function.

## API

**Update user password**

`PATCH /user/password`

**Get current user**

`GET /user/current`

**Register new user**

`POST /user/register`

**Authenticate user**

`POST /auth/login`

**Unauthenticate user**

`POST /auth/logout`

## Setup

You should have installed `npm, bower, grunt and grunt-cli` packages to run this example.
First, run sequentially:

```
npm install
```
```
bower install
```

To run the application, type:

```
grunt serve
```

It will run application in your default system browser.

