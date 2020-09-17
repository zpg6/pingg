import { OnDestroy, OnInit } from '@angular/core';
import { LayerManager } from '../services/managers/layer-manager';
import * as ɵngcc0 from '@angular/core';
export declare class AgmTransitLayer implements OnInit, OnDestroy {
    private _manager;
    private _addedToManager;
    private _id;
    /**
     * Hide/show transit layer
     */
    visible: boolean;
    constructor(_manager: LayerManager);
    ngOnInit(): void;
    /** @internal */
    id(): string;
    /** @internal */
    toString(): string;
    /** @internal */
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgmTransitLayer, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AgmTransitLayer, "agm-transit-layer", never, { "visible": "visible"; }, {}, never>;
}

//# sourceMappingURL=transit-layer.d.ts.map