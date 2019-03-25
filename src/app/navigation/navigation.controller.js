(function() {
	'use strict';

	angular
		.module('app.navigation')
		.controller('NavigationController', NavigationController);

	function NavigationController($rootScope) {
		var vm = this;
		vm.openMenu = openMenu;

		function openMenu() {
			$rootScope.isOpen = !$rootScope.isOpen;
		}
	}
})();
