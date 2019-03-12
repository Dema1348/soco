(function() {
    'use strict';

    angular
        .module('app.pages.financieros',[])
        .config(config);

    /** @ngInject */
    function config($stateProvider ) {
        // State
        $stateProvider
            .state('app.pages.financieros', {
                url: '/financieros',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/pages/financieros/financieros.html',
                        controller: 'FinancierosController as vm'

                    }
                },
        });


      
    }

    
})();