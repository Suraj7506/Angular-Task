import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  private _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();
  constructor( private http: HttpClient ) { }
  loader = new BehaviorSubject<Boolean>(true);
  url = 'http://localhost:3000/signupUsers'

  show(){
    this._loading.next(true);
  }

  hello(){
    return this.http.get('http://localhost:3000/comments')
  }
  
  hide(){
    this._loading.next(false);
  }

signupUsers(){
  return this.http.get(this.url)
 }

 saveUsers(data:any){
  return this.http.post(this.url,data);
 }

 getComments():Observable <any>{
  return this.http.get("http://localhost:3000/comments");

 }

 getProfile(){
  return this.http.get("http://localhost:3000/profile");

 }

}
