var app;
(function (app) {
    'use strict';
    ajsDirective3.$inject = ['$rootScope'];
    function ajsDirective3($rootScope) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;
        function link(scope, element, attr) {
            $rootScope.$on("disableEvent", function (event, args) {
                element.prop('disabled', args.disable);
            });
        }
    }
    angular.module('app')
        .directive('ajsDirective3', ajsDirective3);
})(app || (app = {}));
//# sourceMappingURL=ajsDirective3.js.map