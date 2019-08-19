import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/menu/home';
import { ListPage } from '../pages/menu/list';
import {StartPage} from  '../pages/start/start';
import {ActionSheetPage} from '../pages/actionSheet/actionsheet';
import {AlertPage} from '../pages/alert/alert';
import {BadgesPage} from '../pages/badges/badges';
import {ButtonPage} from '../pages/button/button';
import {CardPage} from '../pages//card/card';
import {CheckboxPage} from '../pages//checkbox/checkbox';
import {DateTimePage} from '../pages//datetime/datetime';
import {FabPage} from '../pages//fab/fab';
import {GesturesPage} from '../pages/gestures/gestures';
import {GridPage} from '../pages/grid/grid';
import {IconsPage} from '../pages/icons/icons';
import {InputsPage} from '../pages/inputs/inputs';
import {ListsPage} from '../pages/lists/lists';
import {LoadingPage} from '../pages/loading/loading';
import {ModalsPage} from '../pages/modals/modals';
import {ModalContentPage} from '../pages/modals/modals';
import {NavigationPage} from '../pages/navigation/navigation';
import {NavigationDetailsPage} from '../pages/navigation/navigation';
import {PopoverPage} from '../pages/popover/popover';
import {PoppedPage} from '../pages/popover/popover';
import {RadioPage} from '../pages/radio/radio';
import {RangePage} from '../pages/range/range';
import {SearchbarPage} from '../pages/searchbar/searchbar';
import {SegmentPage} from '../pages/segment/segment';
import {SelectPage} from '../pages/select/select';
import {SlidesPage} from '../pages/slides/slides';
import {TabsPage} from '../pages/tabs/tabs';
import {Tab1} from '../pages/tabs/tabs';
import {Tab2} from '../pages/tabs/tabs';
import {ToastPage} from '../pages/toast/toast';
import {TogglePage} from '../pages/toggle/toggle';
import {ToolbarPage} from '../pages/toolbar/toolbar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    StartPage,
    HomePage,
    ListPage,
    ActionSheetPage,
    AlertPage,
    BadgesPage,
    ButtonPage,
    CardPage,
    CheckboxPage,
    DateTimePage,
    FabPage,
    GesturesPage,
    GridPage,
    IconsPage,
    InputsPage,
    ListsPage,
    LoadingPage,
    ModalsPage,
    ModalContentPage,
    NavigationPage,
    NavigationDetailsPage,
    PopoverPage,
    PoppedPage,
    RadioPage,
    RangePage,
    SearchbarPage,
    SegmentPage,
    SelectPage,
    SlidesPage,
    TabsPage,
    Tab1,
    Tab2,
    ToastPage,
    TogglePage,
    ToolbarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StartPage,
    HomePage,
    ListPage,
    ActionSheetPage,
    AlertPage,
    BadgesPage,
    ButtonPage,
    CardPage,
    CheckboxPage,
    DateTimePage,
    FabPage,
    GesturesPage,
    GridPage,
    IconsPage,
    InputsPage,
    ListsPage,
    LoadingPage,
    ModalsPage,
    ModalContentPage,
    NavigationPage,
    NavigationDetailsPage,
    PopoverPage,
    PoppedPage,
    RadioPage,
    RangePage,
    SearchbarPage,
    SegmentPage,
    SelectPage,
    SlidesPage,
    TabsPage,
    Tab1,
    Tab2,
    ToastPage,
    TogglePage,
    ToolbarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
