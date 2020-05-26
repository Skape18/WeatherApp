import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/*
  Generated class for the CurrentLocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CurrentLocationProvider {

  location: BehaviorSubject<WeatherLocation> = new BehaviorSubject<WeatherLocation>({
    cityName: "London"
  });

  setCurrentLocation(location: WeatherLocation) {
    this.location.next(location);
  }

  getCurrentLocation(): Observable<WeatherLocation> {
    return this.location;
  }
}
