(function() {
  "use strict";

  angular
    .module("app.pages", [
      "app.pages.home",
      "app.pages.vision",
      "app.pages.highlight",
      "app.pages.financieros",
      "app.pages.accionistas",
      "app.pages.equipo",
      "app.pages.cartas",
      "app.pages.tendencias",
      "app.pages.modernizacion"
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
