(function() {
    'use strict';

    angular
        .module('app.pages.tendencias',[])
        .config(config);

    /** @ngInject */
    function config($stateProvider ) {
        // State
        $stateProvider
            .state('app.pages.tendencias', {
                url: '/tendencias',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/pages/tendencias/tendencias.html',
                        controller: 'TendenciasController as vm'

                    }
                },
        });


      
    }

    
})();