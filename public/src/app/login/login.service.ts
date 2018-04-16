import { JwtHelper } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Rx';
import { ErrorService } from '../errors/error.service';



@Injectable()
export class LoginService {

  constructor(private http: Http, private errorServices: ErrorService) { }
  // signing in user
  loginUser(user)
  {
    return this.http.post('/login', user)
        .map((response: Response)=>{
          console.log(response.json);
           return  response.json();
          })
          .catch((error: Response)=> {
            this.errorServices.handelError(error.json());
            return Observable.throw(error);
        });

  }

  logoutUser()
  {
    localStorage.clear();
  }

  isLoggedIn()
  {
    let token = localStorage.getItem('token');
    if(!token)
      return false;
    let jwtHelper = new JwtHelper();
    return !jwtHelper.isTokenExpired(token);   
  }
}
