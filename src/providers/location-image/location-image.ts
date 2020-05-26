import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the LocationImageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationImageProvider {

  pexelsApiKey: string = "563492ad6f9170000100000108d268a374d44d16a90014a47615df35";
  constructor(public http: HttpClient) {
    console.log('Hello LocationImageProvider Provider');
  }

  getImageUrl(location: string): Observable<BackgroundImage> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.pexelsApiKey
    })
    return this.http
        .get<BackgroundImage>(`https://api.pexels.com/v1/search?query=${location}&per_page=1`, { headers: headers })
  } 

}
