import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn:boolean = false;
  token!:string;

  constructor(private http:HttpClient) { }

  login(username:string, password:string){
    const body = {username,password};
    console.log(body);
    if(username==='admin' && password==='test123')
      this.loggedIn =true;
    else this.loggedIn=false;
  }

  logout(){
    this.loggedIn = false;
    this.token = '';
  }

  isAuthenticated(){
    return this.loggedIn;
  }
}
