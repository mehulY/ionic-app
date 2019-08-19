import { Component } from '@angular/core';

import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
  templateUrl: 'modals.html'
})
export class ModalsPage {
  constructor(public modalCtrl: ModalController) { }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }
}

@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Description
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-list>
      <ion-item>
        <ion-avatar item-start>
          <img src="{{character.image}}">
        </ion-avatar>
        <h2>{{character.name}}</h2>
        <p>{{character.quote}}</p>
      </ion-item>
      <ion-item *ngFor="let item of character['items']">
        {{item.title}}
        <ion-note item-end>
          {{item.note}}
        </ion-note>
      </ion-item>
  </ion-list>
</ion-content>
`
})
export class ModalContentPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'Dance',
        quote: 'Move to every beat!',
        image: 'assets/img/dance.jpg',
        items: [
          { title: 'Cha cha', note: 'A Latin Dance' },
          { title: 'Cumbia', note: 'From African cumbe' },
          { title: 'Tango', note: 'Ballroom Dance' }
        ]
      },
      {
        name: 'Music',
        quote: 'Anytime, anywhere, always with you',
        image: 'assets/img/music.jpg',
        items: [
          { title: 'Country', note: 'American music from rural region' },
          { title: 'Folk', note: 'Traditional song passed orally' },
          { title: 'Jazz', note: 'African-American music' }
        ]
      },
      {
        name: 'Travel',
        quote: 'Never stay',
        image: 'assets/img/scene.jpg',
        items: [
          { title: 'Weekend', note: 'After a long week' },
          { title: 'Package Holiday', note: 'Get away from regular life' },
          { title: 'Volunteer', note: 'Do good for someone' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}