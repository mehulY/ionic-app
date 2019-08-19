import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    selector:'page-card',
    templateUrl:'card.html',
})

export class CardPage{
    public tap: number=0;
    public comments: number=0;

    constructor(params: NavParams){  }
    buttonClick(ev){
        console.log(ev.target.parentElement.id)
        if(ev.target.parentElement.id == "likeBtn"){
            this.tap++
        }
        else if(ev.target.parentElement.id == "commentBtn"){
            console.log("Open the comments page")
            this.comments++
        }
        else{
            console.log("You clicked on the '" + ev.target.innerText + "' button")
        }
    }
    itemSelected(ev){
        console.log("Item selected is:", ev.target.parentElement.innerText)
    }
}
