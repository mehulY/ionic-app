import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    selector:'page-button',
    templateUrl:'button.html',
})

export class ButtonPage{
    item;

    constructor(params: NavParams){
        this.item = params.data.item;
    }
    buttonClick(e){
        if(e.target.innerText == ''){
            console.log("You clicked 'HOME ICON' button")
        }
        else{
            console.log("You clicked '"+e.target.innerText+"' button")
        }
    }
}
