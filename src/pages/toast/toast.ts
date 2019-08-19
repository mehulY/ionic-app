import {Component} from '@angular/core';
import {ToastController} from 'ionic-angular';

@Component({
    selector:'page-toast',
    templateUrl:'toast.html',
})

export class ToastPage{
    item;

    constructor(public toastCtrl: ToastController){  }

    presentToast(){
        const toastMsg = this.toastCtrl.create({
            message: 'A toast message is displayed successfully',
            duration: 3000
        });
        toastMsg.present();
    }
}
