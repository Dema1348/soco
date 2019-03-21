(function() {
	'use strict';

	angular
		.module('app.pages.tendencias')
		.controller('TendenciasController', TendenciasController);

	function TendenciasController($scope, $uibModal) {
		var vm = this;
		vm.openModal = openModal;

		function openModal() {
			console.log('open');
			var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'videoModal.html',
				controller: ModalController,
				controllerAs: 'vm',
				size: 'lg',
				appendTo: undefined,
			});
		}

		function ModalController() {
			var vm = this;
			vm.src = 'video1.mp4';
		}
	}
})();
