(function() {
	'use strict';

	angular
		.module('app.pages.vision')
		.controller('VisionController', VisionController);

	function VisionController($scope, $uibModal) {
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
    
    function ModalController(){
      var vm = this;
      vm.src = 'video1.mp4';

    }
	}
})();
