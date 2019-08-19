import {Component} from '@angular/core';
import {AlertController} from 'ionic-angular';

@Component({
    selector:'page-alert',
    templateUrl:'alert.html',
})

export class AlertPage{
    constructor(public alertCtrl: AlertController){}
    basicAlert(){
        let basicalert = this.alertCtrl.create({
            title: "Basic Alert",
            subTitle: "This a basic alert dialog with just text as information",
            buttons:['OK'] 
        });
        basicalert.present();
    }
    promptAlert(){
        let promptalert = this.alertCtrl.create({
            title: 'Prompt Alert',
            message: 'Enter a name for this dialog:',
            inputs:[
                {
                    name:'title',
                    placeholder: 'Title',
                }
            ],
            buttons:[
                {
                    text: 'Cancel',
                    handler:()=>{
                        console.log('Cancel Clicked')
                    }
                },
                {
                    text: 'Save',
                    handler:data =>{
                        console.log('Save clicked');
                        console.log("Entered data is:",data.title);
                        //data is in the form of an object
                    }
                }
            ]
        });
        promptalert.present();
    }
    confirmationAlert(){
        let confirmalert = this.alertCtrl.create({
            title: 'Confirm Alert',
            message: 'This is a confirm alert, so select any of the option:',
            buttons:[
                {
                    text:'Disagree',
                    handler:()=>{
                        console.log('Disagree clicked')
                    }
                },
                {
                    text: 'Agree',
                    handler: ()=>{
                        console.log('Agree clicked')
                    }
                }
            ]
        });
        confirmalert.present();
    }

    testRadioOpen: boolean;
    testRadioResult;
    radioAlert(){
        let radioalert = this.alertCtrl.create();
        radioalert.setTitle('Radio Alert');
        radioalert.addInput({
            type: 'radio',
            label: 'Blue',
            value: 'blue',
            checked: true
        });
        radioalert.addInput({
            type: 'radio',
            label: 'Green',
            value: 'green',
        });
        radioalert.addInput({
            type: 'radio',
            label: 'Red',
            value: 'red'
        });
        radioalert.addButton('Cancel');
        //no need to give any handler for 'cancel' button if it is not meant ot do anything
        radioalert.addButton({
            text: 'OK',
            handler:data=>{
                console.log("You selected:",data)
                this.testRadioOpen = false
                this.testRadioResult = data
            }
        })
        radioalert.present().then(()=>{
            this.testRadioOpen = true
        });
    }

    testCheckboxOpen: boolean;
    testCheckboxResult;
    checkboxAlert(){
        let checkboxalert = this.alertCtrl.create();
        checkboxalert.addInput({
            type: 'checkbox',
            label: 'Dance',
            value: 'dance',
            checked: true
        });
        checkboxalert.addInput({
            type:'checkbox',
            label:'Sing',
            value:'sing'
        });
        checkboxalert.addInput({
            type:'checkbox',
            label:'Travel',
            value:'travel'
        });
        checkboxalert.addButton('Cancel');
        checkboxalert.addButton({
            text:'OK',
            handler:data=>{
                console.log("selected data is:")
                data.forEach(element => {
                    console.log(element)
                });
                //data is in form of an array
                this.testCheckboxOpen = false
                this.testCheckboxResult = data
            }
        });
        checkboxalert.present().then(()=>{
            this.testCheckboxOpen = true
        });
    }
}
