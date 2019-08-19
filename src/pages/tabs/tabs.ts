import {Component} from '@angular/core';

@Component({
    selector:'page-tabs',
    templateUrl:'tabs.html',
})

export class TabsPage{
    tab1 = Tab1;
    tab2 = Tab2;

    tabHome: any = Tab1;
}

@Component({
    selector:'page-tab1',
    templateUrl:'tab1.html'
})
export class Tab1{}

@Component({
    selector:'page-tab2',
    templateUrl:'tab2.html'
})
export class Tab2{}


