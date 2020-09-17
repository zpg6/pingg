import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieAnimationViewComponent } from './lottieAnimationView.component';
var LottieAnimationViewModule = (function () {
    function LottieAnimationViewModule() {
    }
    LottieAnimationViewModule.forRoot = function () {
        return {
            ngModule: LottieAnimationViewModule
        };
    };
    return LottieAnimationViewModule;
}());
export { LottieAnimationViewModule };
LottieAnimationViewModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    LottieAnimationViewComponent
                ],
                imports: [CommonModule],
                exports: [LottieAnimationViewComponent]
            },] },
];
/** @nocollapse */
LottieAnimationViewModule.ctorParameters = function () { return []; };
//# sourceMappingURL=lottieAnimationView.module.js.map