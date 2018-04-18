import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ErrorService } from '../errors/error.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ManageSessionService {

  constructor(private http: Http, private errorHandler: ErrorService) { }

  saveSessionData(formdata)
  {
    return this.http.post('save-school-session', formdata)
              .catch((err: Response)=>{
                this.errorHandler.handelError(err.json());
                return Observable.throw(err);
                ;
              });

  }

  getAllSessions()
  {
    return this.http.get('list-session')
      .map(response => response)
      .catch((error: Response)=>{
        this.errorHandler.handelError(error.json()) ;
        return Observable.throw(error);
      });
  }

}
