(function() {
  'use strict';

  angular
    .module('app', ['ngAnimate', 
    				'ngCookies', 
    				'ngTouch', 
    				'ngSanitize', 
    				'ngMessages', 
					'ngAria', 
					'ui.router', 
					'app.directives',
					'app.filters',
					'app.services',
					'app.navigation',
					 'app.pages']);

})();
