module app {
    'use strict';

    export interface ajsDirective2Scope extends ng.IScope {
        name: string;
    }

    ajsDirective2.$inject = ['personService'];

    function ajsDirective2(personService: app.IpersonService): ng.IDirective {
        var directive: ng.IDirective = {
            link: link,
            restrict: 'E',
            templateUrl: 'ajsDirective2.html'
        };

        return directive;

        function link(scope: ajsDirective2Scope, element: ng.IAugmentedJQuery, attr: ng.IAttributes) {
            scope.name = personService.getName();
        }
    }

    angular.module('app')
        .directive('ajsDirective2', ajsDirective2);
}