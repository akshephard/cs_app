import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http:Http) { }
  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //let ep = this.prepEndpoint('users/register');
    return this.http.post('http://localhost:3000/courses/addcourse', user,{headers: headers}) //this posts to the backend
      .map(res => res.json());
  }
  registerInstructor(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //let ep = this.prepEndpoint('users/register');
    return this.http.post('http://localhost:3000/instructors/addInstructor', user,{headers: headers}) //this posts to the backend
      .map(res => res.json());
  }

}
