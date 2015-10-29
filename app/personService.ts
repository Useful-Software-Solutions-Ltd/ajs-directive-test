module app {
    'use strict';

    export interface IpersonService {
        getName(): string;
    }

    function personService(): IpersonService {
        var service: IpersonService = {
            getName: getName
		};

        return service;     
        
        function getName(): string{
            return 'Dave';
        }   
    }

    angular.module('app')
        .factory('personService', personService);
}