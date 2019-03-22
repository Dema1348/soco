(function() {
    'use strict';

    angular
        .module('app.pages.modernizacion',[])
        .config(config);

    /** @ngInject */
    function config($stateProvider ) {
        // State
        $stateProvider
            .state('app.pages.modernizacion', {
                url: '/modernizacion',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/pages/modernizacion/modernizacion.html',
                        controller: 'ModernizacionController as vm'

                    }
                },
        });;


      
    }

    
})();