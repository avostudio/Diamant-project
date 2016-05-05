(function() {
  'use strict';

  angular
    .module('test5')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
