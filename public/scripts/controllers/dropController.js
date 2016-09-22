console.log('doodrop show controller connected')
angular.module('ngdrops')
  .controller('dropController', dropController);
dropController.inject = ['$http', '$routeParams', '$location'];
function dropController($http, $routeParams, $location){
  var vm = this;
  vm.getDrop = getDrop;
  var dropId = $routeParams.dropId

  function getDrop() {
    $http({
      method: 'GET',
      url: '/api/receptacles/' + dropId
    }).then(getSuccess, onError)
  }

  vm.go = function (url) {
      console.log('clicked')
      $location.path(url);
  }
  function getSuccess(response) {
    vm.drop=response.data;
    console.log(vm.drop);
  }
  function onError(response) {
    console.log('error, ', response)
  }
  vm.getDrop();

}
