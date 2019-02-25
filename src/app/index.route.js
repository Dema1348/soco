(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        abstract: true,
        views   : {
                    'main@'         : {
                        templateUrl: 'app/layouts/content-side-menu.html',
                        controller : 'MainController as vm'
                    },
                    'navigation@app': {
                        templateUrl: 'app/navigation/navigation.html',
                        controller : 'NavigationController as vm'
                    }
                }

      });


     

    $urlRouterProvider.otherwise(function($injector, $location) {
          var $state = $injector.get("$state");
          $state.go('app.pages.home');
    });
  }

})();
