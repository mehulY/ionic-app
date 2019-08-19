import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    selector:'page-lists',
    templateUrl:'lists.html',
})

export class ListsPage{
    constructor(params: NavParams){ }
    items = [
        'Pokemon Yellow',
        'Super Metroid',
        'Mega Man X',
        'The legend of Zelda',
        'Pac-Man',
        'Super Mario World',
        'Half life'
    ];

    itemSelected(item: string){
        console.log("you selected ", item);
    };

    listBtnClick(e){
        console.log("You clicked '"+e.target.innerText+"' button")
    }
}
