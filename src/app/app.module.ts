import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { DatePipe } from '@angular/common';

import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LocationListProvider } from '../providers/location-list/location-list';
import { CurrentLocationProvider } from '../providers/current-location/current-location';
import { WeatherProvider } from '../providers/weather/weather';
import { AddLocationPage } from '../pages/add-location/add-location';
import { LocationImageProvider } from '../providers/location-image/location-image';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AddLocationPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AddLocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePipe,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocationListProvider,
    CurrentLocationProvider,
    WeatherProvider,
    LocationImageProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
