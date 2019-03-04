(function() {
  "use strict";

  angular.module("app").run(runBlock);

  /** @ngInject */
  function runBlock(WOW) {
    new WOW().init();

  }
})();
