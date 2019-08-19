import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    selector:'page-slides',
    templateUrl:'slides.html',
})

export class SlidesPage{
    item;

    constructor(params: NavParams){
        this.item = params.data.item;
    }
}
