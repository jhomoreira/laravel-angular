import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  private url: string;
  private httpOptions: object;

  constructor(private http: HttpClient) { 
    console.log('service-contructor')
  }

  build(url){
    this.url = 'http://localhost:8000/api/v1/' + url;

    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '
      })
    }

    return this;
  }


  list(){
    return this.http.get(this.url, this.httpOptions);
  }
}
