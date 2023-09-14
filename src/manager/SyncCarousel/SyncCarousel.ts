import {RefObject} from 'react';
import BearCarousel from '../../BearCarousel';
import {logEnable} from '../../config';
import logger from '../../logger';

class SyncCarousel {
    private readonly _carouselRef: RefObject<BearCarousel>;

    constructor(carouselRef: RefObject<BearCarousel>) {
        this._carouselRef = carouselRef;
    }

    get _elementor(){
        return this._carouselRef?.current?._elementor;
    }

    get _configurator(){
        return this._carouselRef?.current?._configurator;
    }

    get _controller(){
        return this._carouselRef?.current?._controller;
    }

    /**
     * 手動觸發 link 實現同步移動
     */
    syncControlStart = (event: MouseEvent|TouchEvent) => {
        if(this._configurator?.setting.isDebug && logEnable.syncCarousel.onSyncControlMove) logger.printInText('[SyncCarousel.syncControlMove]');

        if(this._elementor && event.isTrusted){
            // 將進度比例換算成 movePx
            const {isTrusted, ...baseEvent} = event;
            this._elementor?.containerEl.dispatchEvent(event instanceof MouseEvent ?
                new Event('mousedown', baseEvent):
                new Event('touchstart', baseEvent)
            );

            // const moveX = this._elementor.getPercentageToMovePx(percentage);
            // this._elementor.transform(moveX);
        }
    };

    // syncControlMove = (percentage: number) => {
    //     if(this._configurator?.setting.isDebug && logEnable.syncCarousel.onSyncControlMove) logger.printInText('[SyncCarousel.syncControlMove]');
    //
    //     if(this._elementor){
    //         // 將進度比例換算成 movePx
    //         const moveX = this._elementor.getPercentageToMovePx(percentage);
    //         this._elementor.transform(moveX);
    //     }
    // };

    // syncControlDone = (targetIndex: number) => {
    //     if(this._configurator?.setting.isDebug && logEnable.syncCarousel.onSyncControlDone) logger.printInText('[SyncCarousel.syncControlDone]');
    //
    //     this._controller?.slideToSourceIndex(targetIndex);
    // };

    slideToSourceIndex = (slideIndex: number, isUseAnimation = true) => {
        if(this._configurator?.setting.isDebug && logEnable.syncCarousel.onSlideToSourceIndex) logger.printInText('[SyncCarousel.slideToSourceIndex]');

        this._controller?.slideToSourceIndex(slideIndex, {isUseAnimation, isEmitEvent: false});
    };

}

export default SyncCarousel;
