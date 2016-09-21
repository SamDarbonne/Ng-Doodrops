console.log('app.js connected')

angular
  .module('ngdrops', ['ngMap'])
  .controller('MyController', function(NgMap) {
  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
});
