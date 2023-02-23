import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorreosApiService {

  constructor( private http:HttpClient) { }
  sendMail(obj:any){
    //return this.http.post('http://mcomercial.asap-amerijet.com/correoFmd/',obj)
    return this.http.post('https://fmdflowers.com/correoFmd/',obj)
  }
}
