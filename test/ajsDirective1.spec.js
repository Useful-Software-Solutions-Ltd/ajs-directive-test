'use strict';
describe("ajsDirective1", function () {
    var element; //this is the directive element
    //invoke the module which contains the directive
    beforeEach(angular.mock.module('app'));
    //load the template
    beforeEach(angular.mock.module('ajsDirective1.html'));
    beforeEach(inject(function ($compile, $rootScope) {
        //set up the directive scope
        var scope = $rootScope.$new();
        scope.team = { name: 'FC Barcelona' };
        //set the directive element
        element = angular.element('<ajs-directive1 team="team"></ajs-directive1>');
        //compile the directive
        $compile(element)(scope);
        //bind the data
        scope.$digest();
    }));
    it('should display the team name in the header', inject(function () {
        //test that the {{team.name}} binding is now FC Barcelona
        expect(element.text()).toContain('FC Barcelona');
    }));
});
//# sourceMappingURL=ajsDirective1.spec.js.map