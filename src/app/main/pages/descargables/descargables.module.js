(function() {
    'use strict';

    angular
        .module('app.pages.descargables',[])
        .config(config);

    /** @ngInject */
    function config($stateProvider ) {
        // State
        $stateProvider
            .state('app.pages.descargables', {
                url: '/descargables',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/pages/descargables/descargables.html'
                    }
                },
        });


      
    }

    
})();