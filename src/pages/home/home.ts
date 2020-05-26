import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { CurrentLocationProvider } from '../../providers/current-location/current-location';
import { DatePipe } from '@angular/common';
import { LocationImageProvider } from '../../providers/location-image/location-image';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  location$: Observable<WeatherLocation>;
  currentDate: Date = new Date();
  imageUrl: string = '../../assets/bg.png';

  daysOfWeek: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  constructor(
    public navCtrl: NavController,
    public currentLocationProvider: CurrentLocationProvider,
    public datePipe: DatePipe,
    public locationImageProvider: LocationImageProvider) { }

  ngOnInit() {
    this.location$ = this.currentLocationProvider.getCurrentLocation();

    this.location$.subscribe(
      (location) => { 
        this.locationImageProvider.getImageUrl(location.cityName)
            .subscribe(image => {
              this.imageUrl = image.photos[0].src.medium;
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
