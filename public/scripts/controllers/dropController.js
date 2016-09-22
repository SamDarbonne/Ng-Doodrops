console.log('doodrop show controller connected')
angular.module('ngdrops')
  .controller('dropController', dropController);
dropController.inject = ['$http', '$routeParams'];
function dropController($http, $routeParams){
  var vm = this;
  vm.getDrop = getDrop;
  var dropId = $routeParams.dropId

  function getDrop() {
    $http({
      method: 'GET',
      url: '/api/receptacles/' + dropId
    }).then(getSuccess, onError)
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
