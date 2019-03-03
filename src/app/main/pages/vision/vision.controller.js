(function() {
    "use strict";
  
    angular.module("app.pages.vision").controller("VisionController", VisionController);
  
    function VisionController($sce,$scope) {
      var vm = this;
      var url = "https://www.youtube.com/embed/s5JTnwg7LHo";
      var opts= "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1";
      vm.srcVideo=$sce.trustAsResourceUrl(url); 
        
      $('#videoModal').on('shown.bs.modal', function (e) {
        vm.srcVideo=$sce.trustAsResourceUrl(url+opts); 
        $scope.$apply();

     })

      $('#videoModal').on('hide.bs.modal', function (e) {
        vm.srcVideo="";
        $scope.$apply();
    }) 
    
    
    }
    
  })();
  