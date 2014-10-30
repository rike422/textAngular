describe('taHooks', function(){
	'use strict';
	var $rootScope, $compile;
	beforeEach(module('textAngular'));

	describe('evnent Hooks ', function(){

		var $rootScope, element;
		beforeEach(inject(function(_$compile_, _$rootScope_, _textAngularManager_){
			$rootScope = _$rootScope_;
			this.textAngularManager = _textAngularManager_;
			var scope = $rootScope.$new();
			this.focusMock = jasmine.createSpy();
			this.unfocusMock = jasmine.createSpy();
			scope.onfocus = this.focusMock;
			scope.onfocusOut = this.unfocusMock;
			element = _$compile_('<text-angular name="test"><ta-hooks name="test" focus="onfocus" focus-out="onfocusOut" /></text-angular>')(scope);
			scope.$digest();
		}));

		it("call back focus", function(){
			this.textAngularManager.retrieveEditor('test').editorFunctions.focus();
			expect(this.focusMock).toHaveBeenCalled();
		});
		it("call back focus", function(){
			this.textAngularManager.retrieveEditor('test').editorFunctions.unfocus();
			expect(this.unfocusMock).toHaveBeenCalled();
		});
	});
});