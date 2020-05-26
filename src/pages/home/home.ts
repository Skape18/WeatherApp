import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { CurrentLocationProvider } from '../../providers/current-location/current-location';
import { DatePipe } from '@angular/common';
import { LocationImageProvider } from '../../providers/location-image/location-image';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  weatherInfo: any = {
    description: '',
    icon: `../../assets/cloud.png`,
    city: '',
    temperature: '',
    humidity: '',
    pressure: '',
    wind: '',
    cloudiness: ''
  };

  forecastInfo: any[] = [ { }, { }, { }, { } ];
  
  location$: Observable<WeatherLocation>;
  currentDate: Date = new Date();
  imageUrl: string = '../../assets/bg.png';

  constructor(
    public navCtrl: NavController,
    public currentLocationProvider: CurrentLocationProvider,
    public datePipe: DatePipe,
    public locationImageProvider: LocationImageProvider,
    public weatherProvider: WeatherProvider,
    public alertController: AlertController) { }

  ngOnInit() {
    this.location$ = this.currentLocationProvider.getCurrentLocation();

    this.location$.subscribe(
      (location) => { 
        this.locationImageProvider.getImageUrl(location.cityName)
            .subscribe(image => {
              this.imageUrl = image.photos[0].src.medium;
            });
        
        this.weatherProvider.getWeather(location.cityName)
            .subscribe(weather => 
              this.weatherInfo = {
                description: weather.weather[0].description.toUpperCase(),
                icon: `../../assets/w${weather.weather[0].icon}.png`,
                city: weather.name.toUpperCase(),
                temperature: Math.floor(weather.main.temp).toString(),
                humidity: `${weather.main.humidity}%`,
                pressure: `${weather.main.pressure} hpa`,
                wind: `${weather.wind.speed} m/s`,
                cloudiness: `${weather.clouds.all}%`
              } );
        
        this.weatherProvider.getForecast(location.cityName)
            .subscribe(foreacast => {
              foreacast.list
                .filter(i => {
                  const date = new Date(i.dt_txt);
                  return date > new Date() && date.getHours() === 0 && date.getMinutes() === 0 && date.getSeconds() === 0;
                })
                .map((item, index) => {
                  this.forecastInfo[index] = {
                    icon: `../../assets/w${item.weather[0].icon}.png`,
                    temp: Math.floor(item.main.temp).toString()
                  }
                });
            });
      }
    );

    
  }

  getCurrentDate(){
    return this.datePipe.transform(this.currentDate, 'EEEE, MMM d');
  }

  getDayOfWeek(dayOffset: number = 0){
    let date: Date = new Date();

    date.setDate(this.currentDate.getDate() + dayOffset);
    return this.datePipe.transform(date, 'EEEE');
  }

  getDate(dayOffset: number = 0) {
    let date: Date = new Date();

    date.setDate(this.currentDate.getDate() + dayOffset);
    return this.datePipe.transform(date, 'dd MMM');
  }

  getBackgroundImageStyle() {
    return `url('${this.imageUrl}')`;
  }
}
