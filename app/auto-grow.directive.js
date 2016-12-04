System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AutoGrowdirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // ElementRef to be able to access host element
            // Renderer to be able to render element from directive 
            AutoGrowdirective = (function () {
                // private keyword auto create private fields for us, cool!
                function AutoGrowdirective(el, render) {
                    this.el = el;
                    this.render = render;
                }
                AutoGrowdirective.prototype.onFocus = function () {
                    this.render.setElementStyle(this.el.nativeElement, 'width', '300');
                };
                AutoGrowdirective.prototype.onBlur = function () {
                    this.render.setElementStyle(this.el.nativeElement, 'width', '150');
                };
                AutoGrowdirective = __decorate([
                    core_1.Directive({
                        selector: '[autoGrow]',
                        host: {
                            '(focus)': 'onFocus()',
                            '(blur)': 'onBlur()'
                        } // subscripe for event from element event: our diective method
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], AutoGrowdirective);
                return AutoGrowdirective;
            }());
            exports_1("AutoGrowdirective", AutoGrowdirective);
        }
    }
});
//# sourceMappingURL=auto-grow.directive.js.map