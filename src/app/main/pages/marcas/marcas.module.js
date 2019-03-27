(function() {
    'use strict';

    angular
        .module('app.pages.marcas',[])
        .config(config);

    /** @ngInject */
    function config($stateProvider ) {
        // State
        $stateProvider
            .state('app.pages.marcas', {
                url: '/marcas',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/pages/marcas/marcas.html',
                        controller: 'MarcasController as vm'
                    }
                },
        });


      
    }

    
})();