(function ()
{
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope,$rootScope,$timeout)
    {
        // Remove the splash screen
        $scope.$on('$viewContentAnimationEnded', function (event)
        {
            if ( event.targetScope.$id === $scope.$id )
            {
                $timeout(function(){
                    $rootScope.$broadcast('splashScreen::remove');
                },1000)
            }
        });   
    }
})();