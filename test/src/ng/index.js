
import angular from 'angular';


angular
    .module('app', [])
    .run( /* @ngInject */ ($rootScope) => {
        $rootScope.name = 'hallo word';
    });