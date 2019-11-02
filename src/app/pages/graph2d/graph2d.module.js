/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.graph2d', [
    ])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('graph2d', {
            url: '/graph2d',
            templateUrl: 'app/pages/graph2d/graph2d.html',
            title: 'Graph2D',
            controller: 'graph2dCtrl', 
            sidebarMeta: {
              icon: 'ion-gear-a',
              order: 100,
            },
          });
    }
  
  })();