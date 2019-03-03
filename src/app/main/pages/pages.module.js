(function() {
  "use strict";

  angular
    .module("app.pages", [
      "app.pages.home",
      "app.pages.vision",
      "app.pages.highlight"
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
