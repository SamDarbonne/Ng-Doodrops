console.log('doodrop show controller connected')
angular.module('ngdrops')
    .controller('dropController', dropController);
dropController.inject = ['$http', '$routeParams', '$location'];

function dropController($http, $routeParams, $location) {
    var vm = this;
    vm.getDrop = getDrop;
    var dropId = $routeParams.dropId

    function getDrop() {
        $http({
            method: 'GET',
            url: '/api/receptacles/' + dropId
        }).then(getSuccess, onError)
    }
    vm.save = function() {
        console.log('drop', vm.drop)
        var data = {
            type: vm.drop.type,
            address: vm.drop.address,
            cityName: vm.drop.city
        }
        console.log('data', data)

        $http({
            data: data,
            method: 'PUT',
            url: '/api/receptacles/' + dropId
        }).then(saveSuccess, onError)
    }
    vm.go = function(url) {
        console.log('clicked')
        $location.path(url);
    }

    function saveSuccess(response) {
        console.log('saved', response)
    }

    function getSuccess(response) {
        vm.drop = response.data;
        console.log(vm.drop);
    }

    function onError(response) {
        console.log('error, ', response)
    }
    vm.getDrop();

}
