import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'cb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
 };
  constructor(private authService:AuthService,private router: Router) { }

  ngOnInit() {
  }
  signInWithEmail() {
    this.authService.signInRegular(this.user.email, this.user.password)
       .then((res) => {
          console.log(res);
    
          this.router.navigate(['/liste']);
       })
       .catch((err) => console.log('error: ' + err));
  }
 

}
