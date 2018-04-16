import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ErrorService } from '../errors/error.service';

@Injectable()
export class FeestructureService {

  constructor(private http: Http, private errorService: ErrorService) { }

  saveFeeStructure(formData)
  {
    return this.http.post('save-fee-structure', formData)
            .catch((error: Response)=>{
              this.errorService.handelError(error.json()) ;
              return Observable.throw(error);
            });

  }
  // delete fee structure

  deleteFeeStructure(formData)
  {
    return this.http.post('delete-fee-structure', formData)
    .catch((error: Response)=>{
      this.errorService.handelError(error.json()) ;
      return Observable.throw(error);
    });
  }

  getAllFeeStructure()
  {
    return this.http.get('get-feestructures')
      .map(response => response.json())
      .catch((error: Response)=>{
        this.errorService.handelError(error.json()) ;
        return Observable.throw(error);
      });
  }
}
