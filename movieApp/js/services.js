angular.module('movieApp.services', []).factory('Movie', function($resource){
  return $resource('http://localhost:8000/api/movies/:id', { id:'@_id' }, {
    update: {
      method: 'PUT'
    }
  });
});