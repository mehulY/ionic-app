import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    selector:'page-grid',
    templateUrl:'grid.html',
})

export class GridPage{
    item;

    constructor(params: NavParams){
        this.item = params.data.item;
    }
}
