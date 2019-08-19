import {Component} from '@angular/core';

@Component({
    selector:'page-toggle',
    templateUrl:'toggle.html',
})

export class TogglePage{
    isToggled: boolean=true;

    constructor(){  }
    notify(){
        console.log("Your toggle result:", this.isToggled)
    }
}
