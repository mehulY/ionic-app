import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    selector:'page-searchbar',
    templateUrl:'searchbar.html',
})

export class SearchbarPage{
    items;

    constructor(params: NavParams){
        this.initializeItems()
     }
    initializeItems(){
        this.items = [
            'Python',
            'Go',
            'Java',
            'C#',
            'C',
            'Swift',
            'Objective C',
            'C++',
            'Javascript',
            'Php',
            'Angular JS',
            'React JS',
            'HTML',
        ]
    }
    getItems(e){
        this.initializeItems()
        const val = e.target.value;
        if(val && val.trim() != ''){
            this.items = this.items.filter((item) => {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }
}
