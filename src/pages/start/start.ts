import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';

import {ActionSheetPage} from '../actionSheet/actionsheet';
import {AlertPage} from '../alert/alert';
import {BadgesPage} from '../badges/badges';
import {ButtonPage} from '../button/button';
import {CardPage} from '../card/card';
import {CheckboxPage} from '../checkbox/checkbox';
import {DateTimePage} from '../datetime/datetime';
import {FabPage} from '../fab/fab';
import {GesturesPage} from '../gestures/gestures';
import {GridPage} from '../grid/grid';
import {IconsPage} from '../icons/icons';
import {InputsPage} from '../inputs/inputs';
import {ListsPage} from '../lists/lists';
import {LoadingPage} from '../loading/loading';
import {HomePage} from '../menu/home';
import {ModalsPage} from '../modals/modals';
import {NavigationPage} from '../navigation/navigation';
import {PopoverPage} from '../popover/popover';
import {RadioPage} from '../radio/radio';
import {RangePage} from '../range/range';
import {SearchbarPage} from '../searchbar/searchbar';
import {SegmentPage} from '../segment/segment';
import {SelectPage} from '../select/select';
import {SlidesPage} from '../slides/slides';
import {TabsPage} from '../tabs/tabs';
import {ToastPage} from '../toast/toast';
import {TogglePage} from '../toggle/toggle';
import {ToolbarPage} from '../toolbar/toolbar';

@Component({
    selector:'page-start',
    templateUrl:'start.html',
})

export class StartPage{
    constructor(public navCtrl:NavController, 
        public modalCtrl: ModalController){

    }

    items = [
        'Action Sheet',
        'Alerts',
        'Badges',
        'Buttons',
        'Cards',
        'CheckBox',
        'DateTime',
        'FABs',
        'Gestures',
        'Grid',
        'Icons',
        'Inputs',
        'Lists',
        'Loading',
        'Menus',
        'Modals',
        'Navigation',
        'PopOver',
        'Radio',
        'Range',
        'Search bar',
        'Segment',
        'Select',
        'Slides',
        'Tabs',
        'Toast',
        'Toggle',
        'Toolbar'
    ];

    openNavItemPage(item:string){
        console.log("Selected item  is:", item)
        if(item == "Action Sheet"){
            this.navCtrl.push(ActionSheetPage, {item: item});
        }
        else if(item == "Alerts"){
            this.navCtrl.push(AlertPage,{item:item});
        }
        else if(item == "Badges"){
            this.navCtrl.push(BadgesPage,{item:item});
        }
        else if(item == "Buttons"){
            this.navCtrl.push(ButtonPage,{item:item});
        }
        else if(item == "Cards"){
            this.navCtrl.push(CardPage,{item:item});
        }
        else if(item == "CheckBox"){
            this.navCtrl.push(CheckboxPage,{item:item});
        }
        else if(item == "DateTime"){
            this.navCtrl.push(DateTimePage, {item:item});
        }
        else if(item == "FABs"){
            this.navCtrl.push(FabPage, {item:item});
        }
        else if(item == "Gestures"){
            this.navCtrl.push(GesturesPage, {item:item});
        }
        else if(item == "Grid"){
            this.navCtrl.push(GridPage, {item:item});
        }
        else if(item == "Icons"){
            this.navCtrl.push(IconsPage, {item:item});
        }
        else if(item == "Inputs"){
            this.navCtrl.push(InputsPage, {item:item});
        }
        else if(item == "Lists"){
            this.navCtrl.push(ListsPage, {item:item});
        }
        else if(item == "Loading"){
            this.navCtrl.push(LoadingPage,{item:item});
        }
        else if(item == "Menus"){
            //this.navCtrl.push(MenusPage, {item:item});
            this.navCtrl.setRoot(HomePage);
            //let modal = this.modalCtrl.create(MenusPage);
            //modal.present();
        }
        else if(item == "Modals"){
            this.navCtrl.push(ModalsPage,{item:item});
        }
        else if(item == "Navigation"){
            this.navCtrl.push(NavigationPage,{item:item});
        }
        else if(item ==  "PopOver"){
            this.navCtrl.push(PopoverPage, {item:item});
        }
        else if(item == "Radio"){
            this.navCtrl.push(RadioPage, {item:item});
        }
        else if(item == "Range"){
            this.navCtrl.push(RangePage,{item:item});
        }
        else if(item == "Search bar"){
            this.navCtrl.push(SearchbarPage, {item:item})
        }
        else if(item == "Segment"){
            this.navCtrl.push(SegmentPage,{item:item});
        }
        else if(item == "Select"){
            this.navCtrl.push(SelectPage, {item:item});
        }
        else if(item == "Slides"){
            this.navCtrl.push(SlidesPage, {item:item});
        }
        else if(item == "Tabs"){
            this.navCtrl.push(TabsPage, {item:item});
        }
        else if(item == "Toast"){
            this.navCtrl.push(ToastPage, {item:item});
        }
        else if(item ==  "Toggle"){
            this.navCtrl.push(TogglePage, {item:item});
        }
        else if(item == "Toolbar"){
            this.navCtrl.push(ToolbarPage, {item:item});
        }
    }
}