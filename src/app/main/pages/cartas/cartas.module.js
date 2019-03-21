(function() {
    'use strict';

    angular
        .module('app.pages.cartas',[])
        .config(config);

    /** @ngInject */
    function config($stateProvider ) {
        // State
        $stateProvider
            .state('app.pages.carta-presidente', {
                url: '/carta-presidente',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/pages/cartas/carta-presidente.html'

                    }
                },
        })
        .state('app.pages.carta-gerente-general', {
            url: '/carta-gerente-general',
            views: {
                'content@app': {
                    templateUrl: 'app/main/pages/cartas/carta-gerente-general.html'

                }
            },
            });


      
    }

    
})();