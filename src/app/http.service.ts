import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url:string='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }

  getdata(){
   return (this.http.get(this.url))
  }
}
