import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    selector:'page-select',
    templateUrl:'select.html',
})

export class SelectPage{
    item;

    constructor(params: NavParams){
        this.item = params.data.item;
    }
}
