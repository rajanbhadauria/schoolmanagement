import { Injectable, EventEmitter } from '@angular/core';
import { Error } from './error.model';
import { isObject } from 'util';

@Injectable()
export class ErrorService {
  errorOccured = new EventEmitter <Error>();
  constructor() { }

  handelError(error?: any)
  {
    if(isObject(error))
    {
      error.title = error.title === undefined ? "Unknown Error" : error.title;
      error.error.message = error.error === undefined ? "Uncatchable error found." : error.error.message;
      let errorData = new Error(error.title, error.error.message);
      this.errorOccured.emit(errorData);
    }
    else
    {
      let errorData = new Error({error:{title:'Unknown Error', error:{ message:'Unknown error occurred.'}}});
      this.errorOccured.emit(errorData);
    }
   
  }

}