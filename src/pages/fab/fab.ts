import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    selector:'page-fab',
    templateUrl:'fab.html',
})

export class FabPage{
    item;

    constructor(params: NavParams){
        this.item = params.data.item;
    }
    buttonClick(ev){
        console.log("You clicked '"+ev.target.parentElement.id+"' icon")
    }
}
