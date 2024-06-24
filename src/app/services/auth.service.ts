import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
constructor(private router:Router,private http:HttpClient){

}
isAuthenticated():boolean{
  if(sessionStorage.getItem('token') !==null){
    return true;
}
return false;
  }
  canAccess(){
    if(!this.isAuthenticated()){
this.router.navigate(['/login'])
    }
  }
  register(name:string,email:string,password:string){
    //samr data to register api(firebase)
    return this.http.post<{idToken:string}>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBMXihaQGBkTRTRS6wn2n0W7tpBe3CNlGg',
      {displayName:name,email,password}
    );

  }
  storeToken(token:string){
    sessionStorage.setItem('token',token);
  }
  login(email:string,password:string){
    return this.http.post<{idToken:string}>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBMXihaQGBkTRTRS6wn2n0W7tpBe3CNlGg',
      {email,password}
    );
  }
  detail(){
    let token = sessionStorage.getItem('token');
    return this.http.post<{ users:Array<{localId:string,displayName:string}>}>
    ('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBMXihaQGBkTRTRS6wn2n0W7tpBe3CNlGg',
      {idToken:token})}

  canAuthenticate(){
    if(this.isAuthenticated()){
      this.router.navigate(['/home'])
          }
  }
  removeToken(){
sessionStorage.removeItem('token');
  }
}
