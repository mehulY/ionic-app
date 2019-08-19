import {Component} from '@angular/core';
import {ActionSheetController, Platform} from 'ionic-angular';

@Component({
    selector:'page-actionSheet',
    templateUrl:'actionSheet.html',
})

export class ActionSheetPage{
    constructor(public actionSheetCtrl:ActionSheetController,
        public platform: Platform){ }

    displayActionSheet(){
        let actionSheet = this.actionSheetCtrl.create({
            buttons:[
                {
                    text:'Destructive',
                    role:'destructive',
                    handler:()=>{
                        console.log('Destructive clicked')
                    }
                },
                {
                    text:"Archive",
                    handler:()=>{
                        console.log('Archive clicked')
                    }
                },
                {
                    text:'Cancel',
                    role:'cancel',
                    handler:()=>{
                        console.log("Cancel clicked")
                    }
                }
            ]
        });
        actionSheet.present();
    }
    
    anotherActionSheet(){
        let actionSheet = this.actionSheetCtrl.create({
            title: "Super heroes",
            cssClass: 'action-sheets-basic-page',
            buttons:[
                {
                    text:'Delete',
                    role:'destructive',
                    icon: !this.platform.is('ios')?'trash':null,
                    handler:()=>{
                        console.log("Delete Clicked");
                    }
                },
                {
                    text: 'Share',
                    icon: !this.platform.is('ios')? 'share':null,
                    handler:()=>{
                        console.log("Share clicked");
                    }
                },
                {
                    text: "Favourite",
                    icon: !this.platform.is('ios')? 'heart-outline':null,
                    handler :  ()=>{
                        console.log("Favourite clicked")
                    }
                },
                {
                    text: "Cancel",
                    role: "cancel",
                    icon: !this.platform.is('ios')? 'close': null,
                    handler:()=>{
                        console.log("Cancel clicked")
                    }                
                }
            ]
        });
        actionSheet.present();
    }
}

