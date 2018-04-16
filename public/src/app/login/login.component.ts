import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx'; 
import 'rxjs/add/operator/catch';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFrom = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private loginService: LoginService, private router: Router) { }

  loginUser()
  {
   // this.loginService.loginUser(this.loginFrom.value);
   if(this.loginFrom.valid){
      this.loginService.loginUser(this.loginFrom.value)
                  .subscribe(user=>{
                      localStorage.setItem('token', user['token']);
                      localStorage.setItem('userId', user['userId']);
                      localStorage.setItem('name', user['name']);
                      this.router.navigateByUrl('/home');
                  });
    }
   else 
    console.log('Error');
  }

  ngOnInit() {
  }

}
