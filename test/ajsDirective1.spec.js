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
        scope.person = { name: 'Dave' };
        //set the directive element
        element = angular.element('<ajs-directive1 person="person"></ajs-directive1>');
        //compile the directive
        $compile(element)(scope);
        //bind the data
        scope.$digest();
    }));
    it('should display the person name in the header', function () {
        //test that the {{person.name}} binding is now dave
        expect(element.text()).toContain('Dave');
    });
});
//# sourceMappingURL=ajsDirective1.spec.js.map