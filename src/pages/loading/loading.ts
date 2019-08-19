import {Component} from '@angular/core';
import {LoadingController} from 'ionic-angular';

@Component({
    selector:'page-loading',
    templateUrl:'loading.html',
})

export class LoadingPage{
    constructor(public loadingCtrl: LoadingController){  }
    showLoading(){
        const loader = this.loadingCtrl.create({
            content: "Please Wait...",
            duration: 3000,
            //dismissOnPageChange: true
        });
        loader.present();
    }
}
