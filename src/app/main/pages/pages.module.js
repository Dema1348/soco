(function() {
  "use strict";

  angular
    .module("app.pages", [
      "app.pages.home",
      "app.pages.highlight",
      "app.pages.vision"
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
