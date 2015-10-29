'use strict'

describe("ajsDirective3", () => {
	var element: ng.IAugmentedJQuery; //this is the directive element
	var mockPersonService;
	
	//invoke the module which contains the directive
	beforeEach(angular.mock.module('app'));
	
	beforeEach(inject(function($compile: ng.ICompileService, $rootScope: ng.IRootScopeService) {	
		//set up the directive scope
		var scope = <app.ajsDirective1Scope>$rootScope.$new();		
		
		//set the directive element
		element = angular.element('<div ajs-directive3></div>');
		
		//compile the directive
		$compile(element)(scope);
		
		//bind the data
		scope.$digest();
	}));

	it('should not disable element by default', () => {		
		expect(element.prop('disabled')).toBeFalsy();
	});

	it('should disable element when disableEvent is raised with true disable arg', inject(function($rootScope: ng.IRootScopeService) {
		$rootScope.$broadcast('disableEvent',{ disable: true});
		$rootScope.$digest();
		expect(element.prop('disabled')).toBeTruthy();
	}));

	it('should re-enable element when disableEvent is raised with false disable arg', inject(function($rootScope: ng.IRootScopeService) {
		$rootScope.$broadcast('disableEvent',{ disable: true});
		$rootScope.$digest();
		$rootScope.$broadcast('disableEvent',{ disable: false});
		$rootScope.$digest();
		expect(element.prop('disabled')).toBeFalsy();
	}));
});