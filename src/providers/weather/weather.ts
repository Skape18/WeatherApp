import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  openWeatherApiKey: string = 'ba314cfe97f7ebff991e7889f63164e4';

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

  getWeather(location: string) : Observable<WeatherInfo> {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.openWeatherApiKey}&units=metric`;

    return this.http.get<WeatherInfo>(url);
  }

  getForecast(location: string) : Observable<ForecastInfo> {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${this.openWeatherApiKey}&units=metric`;

    return this.http.get<ForecastInfo>(url);
  }

}
