import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    selector:'page-icons',
    templateUrl:'icons.html',
})

export class IconsPage{
    item;

    constructor(params: NavParams){
        this.item = params.data.item;
    }
}
