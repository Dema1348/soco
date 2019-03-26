(function ()
{
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope,$rootScope,$timeout)
    {
        var vm = this;
        vm.close= close;

        function close(){
            console.log("close");
            $rootScope.isOpen = false;

        }
        // Remove the splash screen
        $scope.$on('$viewContentAnimationEnded', function (event)
        {
            if ( event.targetScope.$id === $scope.$id )
            {
                $rootScope.$broadcast('splashScreen::remove');

            }
        });   
    }
})();