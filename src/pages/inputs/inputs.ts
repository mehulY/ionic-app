import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    selector:'page-inputs',
    templateUrl:'inputs.html',
})

export class InputsPage{
    item;
    user = {
        username:'',
        password:''
    }
    user1 = {
        username:'',
        password:''
    }
    user2 = {
        username:'',
        password:''
    }
    user3 = {
        username:'',
        password:''
    }
    user4 = {
        username:'',
        password:''
    }
    user5 = {
        username:'',
        password:''
    }
    constructor(params: NavParams){
        this.item = params.data.item;
    }
    displayData(item:string){
        console.log("You entered:")
        if(item == "1"){
            console.log("Username:",this.user1.username)
            console.log("Password:",this.user1.password)
        }
        else if(item == "2")
        {
            console.log("Username:",this.user2.username)
            console.log("Password:",this.user2.password)
        }
        else if(item == "3"){
            console.log("Username:",this.user3.username)
            console.log("Password:",this.user3.password)
        }
        else if(item == "4"){
            console.log("Username:",this.user4.username)
            console.log("Password:",this.user4.password)
        }
        else if(item == "5"){
            console.log("Username:",this.user5.username)
            console.log("Password:",this.user5.password)
        }
        else{
            console.log("Username:",this.user.username)
            console.log("Password:",this.user.password)
        }
        
    }
}
