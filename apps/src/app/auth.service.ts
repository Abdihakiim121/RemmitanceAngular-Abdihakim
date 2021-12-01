import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(accessToken: any){
    localStorage.setItem('ACCESS_TOKEN', accessToken);
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

 public isUserLogin(){
   const state =  localStorage.getItem('ACCESS_TOKEN') !== null?true:false;
   return state;
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

  // 
  public CustomerInfo(info:any){
    localStorage.setItem('cusinfo', info)
  }

  public iscustomerInfo(){
    localStorage.getItem('cusinfo')!=null?true:false
  }


  //  access token
  public getaccessToken(){
    return localStorage.getItem('ACCESS_TOKEN');

  }

 
}
