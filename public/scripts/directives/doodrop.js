console.log('doodrop directive loaded')
angular.module('ngdrops')
	.directive('dooDrop', dooDrop)

function dooDrop() {
	var directive = {
		scope: {
			doodrop: '='
		},
		restrict: 'E',
		templateUrl: '/scripts/templates/doodrop-template.html',
		replace: false,
	};
	return directive;
}