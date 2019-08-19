import {Component} from '@angular/core';

@Component({
    selector:'page-toolbar',
    templateUrl:'toolbar.html',
})

export class ToolbarPage{
    items;

    constructor(){ 
        this.initializeItems()
     }

     initializeItems(){
        this.items = [
            'Python',
            'Go',
            'Java',
            'C#'
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

    toolbarBtnClick(e){
        console.log("You clicked the toolbar button")
    }
}
