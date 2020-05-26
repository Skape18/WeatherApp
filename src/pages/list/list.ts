import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocationListProvider } from '../../providers/location-list/location-list';
import { Observable } from 'rxjs';
import { HomePage } from '../home/home';
import { CurrentLocationProvider } from '../../providers/current-location/current-location';
import { AddLocationPage } from '../add-location/add-location';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {

  locations$: Observable<WeatherLocation[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public locationListProvider: LocationListProvider,
    public currentLocationProvider: CurrentLocationProvider) { }

  ngOnInit() {
    this.locations$ = this.locationListProvider.getLocations();  
  }

  itemTapped(event, item: WeatherLocation) {
    this.currentLocationProvider.setCurrentLocation(item);
    this.navCtrl.setRoot(HomePage, {}, { animate: true, duration: 300 });
  }

  onItemDelete(event, item: WeatherLocation) {
    this.locationListProvider.removeLocation(item);
  }

  onAddButtonClick(event) {
    this.navCtrl.push(AddLocationPage);
  }
}
