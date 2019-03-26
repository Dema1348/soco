(function ()
{
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope,$rootScope)
    {
        var vm = this;
        vm.close= close;
        $rootScope.share = share;

        function share($event){
            $event.stopPropagation();
            var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.URL, 'facebook-popup', 'height=350,width=600');
            if(facebookWindow.focus) { facebookWindow.focus(); }
                return false;
              
        }

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