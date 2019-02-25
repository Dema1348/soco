(function() {
    'use strict';

    angular
        .module('app.pages.highlight',[])
        .config(config);

    /** @ngInject */
    function config($stateProvider ) {
        // State
        $stateProvider
            .state('app.pages.highlight-personas', {
                url: '/highlight/personas',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/pages/highlight/highlight-personas.html',
                        controller: 'HighlightController as vm'
                    }
                }
        })
        .state('app.pages.highlight-equipo', {
            url: '/highlight/equipo',
            views: {
                'content@app': {
                    templateUrl: 'app/main/pages/highlight/highlight-equipo.html',
                    controller: 'HighlightController as vm'
                }
            }
        })
        .state('app.pages.highlight-futura', {
            url: '/highlight/futura',
            views: {
                'content@app': {
                    templateUrl: 'app/main/pages/highlight/highlight-futura.html',
                    controller: 'HighlightController as vm'
                }
            }
        })
        .state('app.pages.highlight-rodea', {
            url: '/highlight/rodea',
            views: {
                'content@app': {
                    templateUrl: 'app/main/pages/highlight/highlight-rodea.html',
                    controller: 'HighlightController as vm'
                }
            }
        })
        .state('app.pages.highlight-innovacion', {
            url: '/highlight/innovacion',
            views: {
                'content@app': {
                    templateUrl: 'app/main/pages/highlight/highlight-innovacion.html',
                    controller: 'HighlightController as vm'
                }
            }
        });


      
    }

    
})();