import { SuggestiontravelPage } from './../pages/suggestiontravel/suggestiontravel';
import { SuggestionPage } from './../pages/suggestion/suggestion';
import { DestinationPage } from './../pages/destination/destination';
import { SignupPage } from './../pages/signup/signup';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SplashscreenPage } from '../pages/splashscreen/splashscreen';
import { SigninPage } from '../pages/signin/signin';
import { DestinationProvider } from '../providers/destination/destination';
import { SidebarComponent } from '../components/sidebar/sidebar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SplashscreenPage,
    SigninPage,
    SignupPage,
    DestinationPage,
    SuggestionPage,
    SuggestiontravelPage,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SplashscreenPage,
    SigninPage,
    SignupPage,
    DestinationPage,
    SuggestionPage,
    SuggestiontravelPage,
    SidebarComponent
  ],
  providers: [
    StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DestinationProvider
  ]
})
export class AppModule {}
