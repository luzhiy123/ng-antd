
import angular from 'angular';


angular
    .module('app', [])
    .run( /* @ngInject */ ($rootScope) => {
        $rootScope.name = 'I am is index 2';
    });