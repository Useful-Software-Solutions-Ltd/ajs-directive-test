module app {
    'use strict';

    export interface Iteam{
        
    }

    export interface ajsDirective1Scope extends ng.IScope {
        team: Iteam;
    }

    function ajsDirective1(): ng.IDirective {
        var directive: ng.IDirective = {            
            restrict: 'E',
            templateUrl: 'ajsDirective1.html',
            scope: {
                team: '='
            }
        };

        return directive;
    }

    angular.module('app')
            .directive('ajsDirective1', ajsDirective1);
}