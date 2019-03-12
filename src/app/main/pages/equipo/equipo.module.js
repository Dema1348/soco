(function() {
    'use strict';

    angular
        .module('app.pages.equipo',[])
        .config(config);

    /** @ngInject */
    function config($stateProvider ) {
        // State
        $stateProvider
            .state('app.pages.equipo', {
                url: '/equipo',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/pages/equipo/equipo.html',
                        controller: 'EquipoController as vm'

                    }
                },
        });


      
    }

    
})();