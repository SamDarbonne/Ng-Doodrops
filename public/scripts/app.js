console.log('app.js connected')

angular
  .module('ngdrops', ['ngMap', 'ngRoute'])
  .config(config)
  .controller('HomeController', HomeController)
  .controller('MyController', function(NgMap) {
  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
});


config.$inject = ['$routeProvider', '$locationProvider'];
function config(   $routeProvider,   $locationProvider   ) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/cardlistTemplate.html',
      controller: 'dropListGetController',
      controllerAs: 'dropsCtrl'        
    }).when('/drops/:dropId', {
      templateUrl: '/templates/card.html',
      controller: 'dropController',
      controllerAs: 'dropCtrl'
    });
    $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
};

HomeController.$inject = [];
function HomeController() {
  console.log('home controller activated')
};