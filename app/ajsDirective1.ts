module app {
    'use strict';

    interface Iperson{
        name: string;
    }

    export interface ajsDirective1Scope extends ng.IScope {
        person: Iperson;
    }

    function ajsDirective1(): ng.IDirective {
        var directive: ng.IDirective = {            
            restrict: 'E',
            templateUrl: 'ajsDirective1.html',
            scope: {
                person: '='
            }
        };

        return directive;
    }

    angular.module('app')
            .directive('ajsDirective1', ajsDirective1);
}