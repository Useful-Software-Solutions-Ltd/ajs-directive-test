var app;
(function (app) {
    'use strict';
    ajsDirective2.$inject = ['personService'];
    function ajsDirective2(personService) {
        var directive = {
            link: link,
            restrict: 'E',
            templateUrl: 'ajsDirective2.html'
        };
        return directive;
        function link(scope, element, attr) {
            scope.name = personService.getName();
        }
    }
    angular.module('app')
        .directive('ajsDirective2', ajsDirective2);
})(app || (app = {}));
//# sourceMappingURL=ajsDirective2.js.map