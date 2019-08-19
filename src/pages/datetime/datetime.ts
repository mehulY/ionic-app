import {Component} from '@angular/core';
import {AlertController} from 'ionic-angular';

@Component({
    selector:'page-datetime',
    templateUrl:'datetime.html',
})

export class DateTimePage{
    public event = {
        month: '1990-02-19',
        timeStarts: '08:00',
        timeEnds: '1990-02-20'
    }
    public repeat: string = "Daily";
    public travelTime: string = "1 hr";
    constructor(public alertCtrl:AlertController){

    }
    showOptions(){
        let alertOptions = this.alertCtrl.create();
        alertOptions.setTitle("Repeat in a duration of ");
        alertOptions.addInput({
            type:"radio",
            value:'Daily',
            label:'Daily',
            checked:true,
        });
        alertOptions.addInput({
            type:'radio',
            value:'Weekly',
            label:'Weekly',
        });
        alertOptions.addInput({
            type:'radio',
            value:'Monthly',
            label:'Monthly',
        });
        alertOptions.addInput({
            type: 'radio',
            value: 'Never',
            label: 'Never'
        });
        alertOptions.addButton({
            text:'Ok',
            handler: data => {
                console.log(data)
                this.repeat = data;
            }
        });
        alertOptions.present();
    }
    travelOptions(){
        let alertOptions = this.alertCtrl.create();
        alertOptions.setTitle("Duration");
        alertOptions.addInput({
            type:"radio",
            value:'1 hr',
            label:'2 hr',
            checked:true,
        });
        alertOptions.addInput({
            type:'radio',
            value:'2 hr',
            label:'2 hr',
        });
        alertOptions.addInput({
            type:'radio',
            value:'3 hr',
            label:'3 hr',
        });
        alertOptions.addInput({
            type: 'radio',
            value: 'None',
            label: 'None'
        });
        alertOptions.addButton({
            text:'Ok',
            handler: data => {
                console.log(data)
                this.travelTime = data;
            }
        });
        alertOptions.present();
    }
}
