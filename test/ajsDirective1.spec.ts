'use strict'

describe("ajsDirective1", () => {	
	var element: ng.IAugmentedJQuery; //this is the directive element
	
	//invoke the module which contains the directive
	beforeEach(angular.mock.module('app'));

	//load the template
	beforeEach(angular.mock.module('ajsDirective1.html'));
	 
	beforeEach(inject(function($compile: ng.ICompileService, $rootScope: ng.IRootScopeService) {
		//set up the directive scope
		var scope = <app.ajsDirective1Scope> $rootScope.$new();		
		scope.team = { name: 'FC Barcelona'};
		
		//set the directive element
		 element = angular.element('<ajs-directive1 team="team"></ajs-directive1>');
		
		//compile the directive
		$compile(element)(scope);
		
		//bind the data
		scope.$digest();
		
	}));

	it('should display the team name in the header', inject(function() {
		//test that the {{team.name}} binding is now FC Barcelona
		expect(element.text()).toContain('FC Barcelona');
	}));


});