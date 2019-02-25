(function() {
    'use strict';

    angular
        .module('app.pages.vision',[])
        .config(config);

    /** @ngInject */
    function config($stateProvider ) {
        // State
        $stateProvider
            .state('app.pages.vision', {
                url: '/vision',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/pages/vision/vision.html',
                    }
                }
        });


      
    }

    
})();