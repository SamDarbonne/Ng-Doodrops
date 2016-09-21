console.log('doodrop get list controller connected')
angular.module('ngdrops')
  .controller('dropListGetController', dropListGetController);
dropListGetController.inject = ['$http'];
function dropListGetController($http){
  var vm = this;
  vm.getDrops = getDrops;


  function getDrops() {
    $http({
      method: 'GET',
      url: '/api/receptacles'
    }).then(getSuccess, onError)
  }

  function getSuccess(response) {
    console.log(response.data)
    vm.dropList=response.data;
    console.log(vm.dropList);
  }
  function onError(response) {
    console.log('error, ', response)
  }
  vm.getDrops();
  // vm.dropList = [
  //   { 
  //     name: 'General Assembly Doodrop', 
  //     address: '225 Bush st.', 
  //     city: 'san francisco',
  //     _id: 1
  //   },
  //   {
  //     name: 'Another Doodrop', 
  //     address: 'Somewhere else', 
  //     city: 'san francisco',
  //     _id: 2
  //   },
  //   {
  //     name: 'Third Doodrop', 
  //     address: 'Somewhere else', 
  //     city: 'san francisco',
  //     _id: 3
  //   },
  //   {
  //     name: 'Fourth Doodrop', 
  //     address: 'Somewhere else', 
  //     city: 'san francisco',
  //     _id: 4
  //   },
  //   {
  //     name: 'Fifth Doodrop', 
  //     address: 'Somewhere else', 
  //     city: 'san francisco',
  //     _id: 7
  //   },
  //   {
  //     name: 'Sixth Doodrop', 
  //     address: 'Somewhere else', 
  //     city: 'san francisco',
  //     _id: 5
  //   },
  //   {
  //     name: 'Another Nother Doodrop', 
  //     address: 'Somewhere else', 
  //     city: 'san francisco',
  //     _id: 6
  //   },
  // ]
}
