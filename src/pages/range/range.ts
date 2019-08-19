import {Component} from '@angular/core';

@Component({
    selector:'page-range',
    templateUrl:'range.html',
})

export class RangePage{
    first: number = 20;
    second: number = 0;
    third: any = { lower: 33, upper: 60 };
    fourth: number = 110
    
    constructor(){
    }

    firstChanged(ev){
        console.log("Range value selected is:",ev._value)
    }
    
}
