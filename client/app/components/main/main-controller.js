'use strict';

angular.module('erg')

.controller('MainCtrl', function ($log) {
  var scope = this;

  scope.username = 'alice';
  scope.numberOfTasks = 100;
  scope.login = function(username, password) {
    // if (username!=='alice') {
    scope.isAuthenticated = true;
    scope.username = username;
    // } else {
    //   scope.errorMessage = 'Wrong password';
    // }
  };
});