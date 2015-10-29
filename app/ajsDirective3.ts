module app {
    'use strict';

    ajsDirective3.$inject = ['$rootScope'];

    function ajsDirective3($rootScope: ng.IRootScopeService): ng.IDirective {
        var directive: ng.IDirective = {
            link: link,
            restrict: 'A'
        };

        return directive;

        function link(scope: ng.IScope, element: ng.IAugmentedJQuery, attr: ng.IAttributes) {
            $rootScope.$on("disableEvent", function(event, args) {
                element.prop('disabled', args.disable);
            });
        }
    }

    angular.module('app')
        .directive('ajsDirective3', ajsDirective3);
}