(function() {
    'use strict';

    angular
        .module('app.pages.proyecciones',[])
        .config(config);

    /** @ngInject */
    function config($stateProvider ) {
        // State
        $stateProvider
            .state('app.pages.proyecciones', {
                url: '/proyecciones',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/pages/proyecciones/proyecciones.html'

                    }
                },
        });


      
    }

    
})();