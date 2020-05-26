import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/*
  Generated class for the LocationListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationListProvider {

  locations: BehaviorSubject<WeatherLocation[]> = new BehaviorSubject<WeatherLocation[]>([
    { cityName: 'London' },
    { cityName: 'Moscow' },
    { cityName: 'Kiev' }
  ]);

  getLocations(): Observable<WeatherLocation[]> {
    return this.locations;
  }

  addLocation(location: WeatherLocation) {
    this.locations.next(this.locations.value.concat(location));
  }

  removeLocation(location: WeatherLocation) {
    this.locations.next(this.locations.value.filter(l => l.cityName !== location.cityName));
  }
}
