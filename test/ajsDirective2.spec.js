'use strict';
describe("ajsDirective2", function () {
    var element; //this is the directive element
    var mockPersonService;
    //invoke the module which contains the directive
    beforeEach(angular.mock.module('app'));
    //load the template
    beforeEach(angular.mock.module('ajsDirective2.html'));
    //load the template
    beforeEach(function () {
        //create the mock using sinon
        mockPersonService = sinon.stub({
            getName: function () { }
        });
        mockPersonService.getName.returns('Dave');
        //tell $provide to use the mock not the original $rootScope
        angular.mock.module(function ($provide) {
            $provide.value('personService', mockPersonService);
        });
    });
    beforeEach(inject(function ($compile, $rootScope) {
        //set up the directive scope
        var scope = $rootScope.$new();
        //set the directive element
        element = angular.element('<ajs-directive2></ajs-directive2>');
        //compile the directive
        $compile(element)(scope);
        //bind the data
        scope.$digest();
    }));
    it('should call personService.getName()', function () {
        expect(mockPersonService.getName.called).toBeTruthy();
    });
    it('should display the person name in the header', function () {
        expect(element.text()).toContain('Dave');
    });
});
//# sourceMappingURL=ajsDirective2.spec.js.map