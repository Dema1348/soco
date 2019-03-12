(function() {
    'use strict';

    angular
        .module('app.pages.accionistas',[])
        .config(config);

    /** @ngInject */
    function config($stateProvider ) {
        // State
        $stateProvider
            .state('app.pages.accionistas', {
                url: '/accionistas',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/pages/accionistas/accionistas.html',
                        controller: 'AccionistasController as vm'

                    }
                },
        });


      
    }

    
})();