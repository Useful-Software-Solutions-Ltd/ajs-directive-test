'use strict'

describe("ajsDirective2", () => {
	var element: ng.IAugmentedJQuery; //this is the directive element
	var mockPersonService;
	
	//invoke the module which contains the directive
	beforeEach(angular.mock.module('app'));
	
	//load the template
	beforeEach(angular.mock.module('ajsDirective2.html'));

	//load the template
	beforeEach(() => {
		//create the mock using sinon
		mockPersonService = sinon.stub({
			getName: function(){}
		});

		(<Sinon.SinonStub>mockPersonService.getName).returns('Dave');

		//tell $provide to use the mock not the original $rootScope
		angular.mock.module(function($provide): void {
			$provide.value('personService', mockPersonService);
		});
	});

	beforeEach(inject(function($compile: ng.ICompileService, $rootScope: ng.IRootScopeService) {	
		//set up the directive scope
		var scope = <app.ajsDirective1Scope>$rootScope.$new();		
		
		//set the directive element
		element = angular.element('<ajs-directive2></ajs-directive2>');
		
		//compile the directive
		$compile(element)(scope);
		
		//bind the data
		scope.$digest();
	}));

	it('should call personService.getName()', () => {
		expect((<Sinon.SinonStub>mockPersonService.getName.called)).toBeTruthy();
	});

	it('should display the person name in the header', () => {
		expect(element.text()).toContain('Dave');
	});
});