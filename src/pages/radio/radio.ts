import {Component} from '@angular/core';

@Component({
    selector:'page-radio',
    templateUrl:'radio.html',
})

export class RadioPage{

    constructor(){
    }
    selectedItem(ev){
        var temp = ev.target.parentElement.parentElement.parentElement.innerText;
        console.log("Selected Item is:",temp.slice(0,temp.length-2))
    }
}
