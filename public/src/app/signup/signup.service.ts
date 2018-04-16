import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Rx';
import { ErrorService } from '../errors/error.service';


@Injectable()
export class SignupService {

  constructor(private http: Http, private errorService: ErrorService) { }
  
  getUserByEmail(email: string)
  {
     return this.http
           .get('/verifyemail/'+email)
           .map((resp: Response)=>{
              let result = resp.json();
              return result;
            })
           .catch((error: Response)=>{ 
            this.errorService.handelError(error.json()) ;
             return Observable.throw(error);
            });
  }

  saveUser(user)
  {
    return this.http.post('/saveuser', user)
                .map((resp: Response)=>{
                    return resp.json();
                })
              .catch(
                (error: Response) => { 
                this.errorService.handelError(error.json()) ;
                return Observable.throw(error);
               }
              );
  }
 
}