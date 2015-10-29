'use strict';
describe("ajsDirective3", function () {
    var element; //this is the directive element
    var mockPersonService;
    //invoke the module which contains the directive
    beforeEach(angular.mock.module('app'));
    beforeEach(inject(function ($compile, $rootScope) {
        //set up the directive scope
        var scope = $rootScope.$new();
        //set the directive element
        element = angular.element('<div ajs-directive3></div>');
        //compile the directive
        $compile(element)(scope);
        //bind the data
        scope.$digest();
    }));
    it('should not disable element by default', function () {
        expect(element.prop('disabled')).toBeFalsy();
    });
    it('should disable element when disableEvent is raised with true disable arg', inject(function ($rootScope) {
        $rootScope.$broadcast('disableEvent', { disable: true });
        $rootScope.$digest();
        expect(element.prop('disabled')).toBeTruthy();
    }));
    it('should re-enable element when disableEvent is raised with false disable arg', inject(function ($rootScope) {
        $rootScope.$broadcast('disableEvent', { disable: true });
        $rootScope.$digest();
        $rootScope.$broadcast('disableEvent', { disable: false });
        $rootScope.$digest();
        expect(element.prop('disabled')).toBeFalsy();
    }));
});
//# sourceMappingURL=ajsDirective3.spec.js.map