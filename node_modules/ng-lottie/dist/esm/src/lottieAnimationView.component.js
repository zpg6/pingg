import { Component, Input, Output, EventEmitter, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformServer } from '@angular/common';
var lottie = require('lottie-web/build/player/lottie.js');
var LottieAnimationViewComponent = (function () {
    function LottieAnimationViewComponent(platformId) {
        this.platformId = platformId;
        this.animCreated = new EventEmitter();
    }
    LottieAnimationViewComponent.prototype.ngOnInit = function () {
        if (isPlatformServer(this.platformId)) {
            return;
        }
        this._options = {
            container: this.lavContainer.nativeElement,
            renderer: this.options.renderer || 'svg',
            loop: this.options.loop !== false,
            autoplay: this.options.autoplay !== false,
            autoloadSegments: this.options.autoloadSegments !== false,
            animationData: this.options.animationData,
            path: this.options.path || '',
            rendererSettings: this.options.rendererSettings || {}
        };
        this.viewWidth = this.width + 'px' || '100%';
        this.viewHeight = this.height + 'px' || '100%';
        var anim = lottie.loadAnimation(this._options);
        this.animCreated.emit(anim);
    };
    return LottieAnimationViewComponent;
}());
export { LottieAnimationViewComponent };
LottieAnimationViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'lottie-animation-view',
                template: "<div #lavContainer \n                    [ngStyle]=\"{'width': viewWidth, 'height': viewHeight, 'overflow':'hidden', 'margin': '0 auto'}\">    \n               </div>"
            },] },
];
/** @nocollapse */
LottieAnimationViewComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
]; };
LottieAnimationViewComponent.propDecorators = {
    'options': [{ type: Input },],
    'width': [{ type: Input },],
    'height': [{ type: Input },],
    'animCreated': [{ type: Output },],
    'lavContainer': [{ type: ViewChild, args: ['lavContainer',] },],
};
//# sourceMappingURL=lottieAnimationView.component.js.map