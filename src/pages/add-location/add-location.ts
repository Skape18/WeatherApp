import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationListProvider } from '../../providers/location-list/location-list';
import { ListPage } from '../list/list';

/**
 * Generated class for the AddLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-location',
  templateUrl: 'add-location.html',
})
export class AddLocationPage {

  public location: WeatherLocation = {
    cityName: ''
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public locationListProvider: LocationListProvider) {
  }

  onSubmit() {
    this.locationListProvider.addLocation(this.location);

    if (this.navCtrl.canGoBack())
      this.navCtrl.pop();
    else 
      this.navCtrl.setRoot(ListPage, {}, { animate: true, duration: 300 });
  }
}
