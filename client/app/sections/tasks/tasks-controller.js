'use strict';

angular.module('erg')

.controller('TaskListCtrl', function ($log) {
  var scope = this;
  scope.tasks = [
    {
      owner: 'alice',
      description: 'fix the motorcycle'
    },
    {
      owner: 'bob',
      description: 'get the milk'
    }
  ];
  scope.addTask = function(username, description) {
    scope.tasks.push({
      owner: username || 'nobody',
      description: description || 'nothing'
    });
  };
});








