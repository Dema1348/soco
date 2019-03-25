(function() {
    'use strict';

    angular
        .module('app.pages.compromisos',[])
        .config(config);

    /** @ngInject */
    function config($stateProvider ) {
        // State
        $stateProvider
            .state('app.pages.compromisos', {
                url: '/compromisos',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/pages/compromisos/compromisos.html'
                    }
                },
        });


      
    }

    
})();