(function() {
  "use strict";

  angular.module("app.pages.home").controller("HomeController", HomeController);

  function HomeController() {
    var vm = this;
    vm.personas= personas;
    vm.equipo= equipo;
    vm.rodea= rodea;
    vm.futuro= futuro;
    vm.innovacion= innovacion;
    vm.reset= reset;
    vm.imgSliderCaras=true;
  
    function reset(){
        vm.imgSliderPersonas=false;
        vm.imgSliderEquipo=false;
        vm.imgSliderRodea=false;
        vm.imgSliderFuturo=false;
        vm.imgSliderInnovacion=false;
        vm.imgSliderCaras=true;
    }
    
    function personas(){   
      vm.imgSliderPersonas=true;
      vm.imgSliderEquipo=false;
      vm.imgSliderRodea=false;
      vm.imgSliderFuturo=false;
      vm.imgSliderInnovacion=false;
      vm.imgSliderCaras=false;

    }
    

    function equipo(){     
      vm.imgSliderPersonas=false;
      vm.imgSliderEquipo=true;
      vm.imgSliderRodea=false;
      vm.imgSliderFuturo=false;
      vm.imgSliderInnovacion=false;
      vm.imgSliderCaras=false;

    }

    function rodea(){
      vm.imgSliderPersonas=false;
      vm.imgSliderEquipo=false;
      vm.imgSliderRodea=true;
      vm.imgSliderFuturo=false;
      vm.imgSliderInnovacion=false;
      vm.imgSliderCaras=false;


    }  

    function futuro(){
      vm.imgSliderPersonas=false;
      vm.imgSliderEquipo=false;
      vm.imgSliderRodea=false;
      vm.imgSliderFuturo=true;
      vm.imgSliderInnovacion=false;
      vm.imgSliderCaras=false;


    }

    function innovacion(){
      vm.imgSliderPersonas=false;
      vm.imgSliderEquipo=false;
      vm.imgSliderRodea=false;
      vm.imgSliderFuturo=false;
      vm.imgSliderInnovacion=true;
      vm.imgSliderCaras=false;


    }
  
  
  }
  
})();
