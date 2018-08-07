import { Injectable } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logged =false;

  constructor(private router:Router) { }

  getUserDetails(login,password){
    this.logged = login=="cece" && password == "0000";
    if(this.logged){
      this.router.navigate(['admin']);
    }else{
      this.router.navigate(['login']);
    }
  }

  get isLogged():boolean{
    return this.logged;
  }
}
