var app;
(function (app) {
    'use strict';
    function personService() {
        var service = {
            getName: getName
        };
        return service;
        function getName() {
            return 'Dave';
        }
    }
    angular.module('app')
        .factory('personService', personService);
})(app || (app = {}));
//# sourceMappingURL=personService.js.map