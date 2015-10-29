'use strict'

describe("ajsDirective1", () => {
	var element: ng.IAugmentedJQuery; //this is the directive element
	
	//invoke the module which contains the directive
	beforeEach(angular.mock.module('app'));

	//load the template
	beforeEach(angular.mock.module('ajsDirective1.html'));

	beforeEach(inject(function($compile: ng.ICompileService, $rootScope: ng.IRootScopeService) {
		//set up the directive scope
		var scope = <app.ajsDirective1Scope>$rootScope.$new();
		scope.person = { name: 'Dave' };
		
		//set the directive element
		element = angular.element('<ajs-directive1 person="person"></ajs-directive1>');
		
		//compile the directive
		$compile(element)(scope);
		
		//bind the data
		scope.$digest();

	}));

	it('should display the person name in the header', () => {
		//test that the {{person.name}} binding is now dave
		expect(element.text()).toContain('Dave');
	});
});