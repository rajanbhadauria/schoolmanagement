import {ValidationErrors, AbstractControl } from "@angular/forms";
import { Directive } from "@angular/core";
import { resolve, reject } from "q";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SignupService } from "../signup/signup.service";



export class CommonValidatorsHelper{
   
   constructor(public services: SignupService)
   {}

  
}