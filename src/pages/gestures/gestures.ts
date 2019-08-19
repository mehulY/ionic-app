import {Component} from '@angular/core';

@Component({
    selector:'page-gestures',
    templateUrl:'gestures.html',
})

export class GesturesPage{
    public tap: number=0;
    public press: number=0;
    public swipe: number=0;
    public pan: number=0;

    constructor(){ }
    tapEvent(e){
        this.tap++;
    }
    pressEvent(e){
        this.press++
    }
    swipeEvent(e){
        this.swipe++
    }
    panEvent(e){
        this.pan++
    }
}
