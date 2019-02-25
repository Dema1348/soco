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

    $(".carousel").carousel({interval:5000});

    function personas(){
      $(".carousel").carousel(0);
    }

    function equipo(){
      $(".carousel").carousel(4);
    }

    function rodea(){
      $(".carousel").carousel(3);
    }  

    function futuro(){
      $(".carousel").carousel(1);
    }

    function innovacion(){
      $(".carousel").carousel(2);
    }
  
  
  }
  
})();
