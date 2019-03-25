(function() {
  "use strict";

  angular
    .module("app.pages", [
      "app.pages.home",
      "app.pages.vision",
      "app.pages.highlight",
      "app.pages.financieros",
      "app.pages.equipo",
      "app.pages.cartas",
      "app.pages.tendencias",
      "app.pages.modernizacion",
      "app.pages.sostenibilidad",
      "app.pages.descargables",
      "app.pages.proyecciones",
      "app.pages.marcas",
      "app.pages.compromisos"
      
    ])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider.state("app.pages", {
      abstract: true,
      url: "/pages"
    });
  }
})();
