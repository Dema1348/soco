(function() {
    'use strict';

    angular
        .module('app.pages.home',[])
        .config(config);

    /** @ngInject */
    function config($stateProvider ) {
        // State
        $stateProvider
            .state('app.pages.home', {
                url: '/home',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/pages/home/home.html',
                        controller: 'HomeController as vm'
                    }
                }
        });


      
    }

    
})();