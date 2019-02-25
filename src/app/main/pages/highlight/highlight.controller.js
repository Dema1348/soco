(function() {
	'use strict';

	angular
		.module('app.pages.highlight')
		.controller('HighlightController', HighlightController);

	function HighlightController() {
		var vm = this;
		vm.box1Personas = box1Personas;
		vm.box2Personas = box2Personas;
		vm.box3Personas = box3Personas;
		vm.box4Personas = box4Personas;
		vm.box5Personas = box5Personas;
    vm.resetPersonas = resetPersonas;
    vm.personasPhotos = { normal: '1378', mini: '1309' };

    vm.box1Equipo = box1Equipo;
    vm.resetEquipo = resetEquipo;
    vm.equipoPhotos = { normal: '478037', normal2: 'detalle' };

		function box1Personas() {
			vm.personasPhotos = { normal: '1378', mini: '1309' };
		}

		function box2Personas() {
			vm.personasPhotos = { normal: '0528', mini: '9772' };
		}

		function box3Personas() {
			vm.personasPhotos = { normal: '1259', mini: '0432' };
		}

		function box4Personas() {
			vm.personasPhotos = { normal: '9681', mini: '9432' };
		}

		function box5Personas() {
			vm.personasPhotos = { normal: '9525', mini: '0989' };
		}

		function resetPersonas() {
			vm.personasPhotos = { normal: '0759', mini: '0989' };
		}

    function box1Equipo() {
			vm.equipoPhotos = { normal: '0268', normal2: 'arquitecto-trabajando' };
		}

		function resetEquipo() {
      vm.equipoPhotos = { normal: '478037', normal2: 'detalle' };
		}
	}
})();
