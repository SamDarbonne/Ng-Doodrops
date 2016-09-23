console.log('doodrop get list controller connected')
angular.module('ngdrops')
  .controller('dropListGetController', dropListGetController);
dropListGetController.inject = ['$http', '$routeParams', '$location'];
function dropListGetController($http, $routeParams, $location){
  var vm = this;
  vm.getDrops = getDrops;


  function getDrops() {
    $http({
      method: 'GET',
      url: '/api/receptacles'
    }).then(getSuccess, onError)
  }

  vm.go = function (url) {
      console.log('clicked')
      $location.path(url);
  }

  function getSuccess(response) {
    vm.dropList=response.data;
    console.log(vm.dropList);
  }
  function onError(response) {
    console.log('error, ', response)
  }
  vm.getDrops();
}
