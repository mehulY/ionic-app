import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    selector:'page-checkbox',
    templateUrl:'checkbox.html',
})

export class CheckboxPage{
    item;

    constructor(params: NavParams){
        this.item = params.data.item;
    }
}
