/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.networkGraph', [
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('networkGraph', {
          url: '/networkGraph',
          templateUrl: 'app/pages/network_graph/networkGraph.html',
          title: 'networkGraph',
          controller: 'networkGraphCtrl', 
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 100,
          },
        });
  }

})();