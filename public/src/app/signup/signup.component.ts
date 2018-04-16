import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { SignupService } from './signup.service';
import 'rxjs/add/operator/catch'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  success = false
  constructor(private services: SignupService) { }

  ngOnInit() {
  }

  signupForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(5)]),
    email: new FormControl('',[Validators.required, Validators.email], this.isEmailExists.bind(this)),
    password: new FormControl('',[Validators.required]),
    confirm_password: new FormControl('',[Validators.required]),
  }, this.match_password);

 

  isEmailExists(FC: AbstractControl): Promise < ValidationErrors | null >
  {
    
    return new Promise( (resolve, reject)=>{
     let resp;
      this.services.getUserByEmail(FC.value).map(( res: Response) => {
        return res;
      })
      .subscribe(
        (response: Response)  => {
           return response['email'] ? resolve({isEmailExists:true}) : resolve(null);
      });
      
    });
  
  }

  match_password(FC: FormControl)
  {
    return FC.get('password').value === FC.get('confirm_password').value ?  null : { match_password: true};
  }

  saveUser()
  {
    return new Promise( (resolve, reject)=>{
        this.services.saveUser(this.signupForm.value)        
        .map(( res: Response) => {
          return res;
        })
        .subscribe(( res: Response) => {
          if(res['success'] == true)
          {
            this.signupForm.reset();
            this.success = true;
          }
        });
      }
    )
  }

}
