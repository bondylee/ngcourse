angular.module('erg', [
  'erg.main-ctrl',
  'erg.tasks',
  'koast'
])

.run(function($log, koast) {
  $log.info('All ready!');
  koast.init({
    baseUrl: 'http://ngcourse.herokuapp.com'
  });
  koast.setApiUriPrefix('http://ngcourse.herokuapp.com/api/v1/');
  koast.addEndpoint('tasks-plus', ':taskId');
});

