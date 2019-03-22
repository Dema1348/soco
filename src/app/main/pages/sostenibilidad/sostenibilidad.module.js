(function() {
    'use strict';

    angular
        .module('app.pages.sostenibilidad',[])
        .config(config);

    /** @ngInject */
    function config($stateProvider ) {
        // State
        $stateProvider
            .state('app.pages.sostenibilidad', {
                url: '/sostenibilidad',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/pages/sostenibilidad/sostenibilidad.html'

                    }
                },
        });;


      
    }

    
})();