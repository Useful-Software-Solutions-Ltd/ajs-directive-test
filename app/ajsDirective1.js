var app;
(function (app) {
    'use strict';
    function ajsDirective1() {
        var directive = {
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
})(app || (app = {}));
//# sourceMappingURL=ajsDirective1.js.map