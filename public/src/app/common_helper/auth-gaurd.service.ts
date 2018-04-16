import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../login/login.service';


@Injectable()
export class AuthGaurd implements CanActivate {

  constructor(private router: Router, private AuthServices: LoginService) { 

  }
  canActivate(route, state: RouterStateSnapshot)
  {
    if(this.AuthServices.isLoggedIn())
      return true;
    
      this.router.navigate(['/login']);
  }
}
