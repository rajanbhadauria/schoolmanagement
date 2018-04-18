import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ManageSessionService } from './manage-session.service';

@Component({
  selector: 'app-manage-session',
  templateUrl: './manage-session.component.html',
  styleUrls: ['./manage-session.component.css']
})
export class ManageSessionComponent implements OnInit {
  error_msg: any;
  session_lists: any;
  p: number = 1;
  constructor(private sessionServices: ManageSessionService) { }
  session_form = new FormGroup({
    session_title: new FormControl('', [Validators.required]),
    _id: new FormControl('')
  });

  ngOnInit() {
   this.sessionServices.getAllSessions().subscribe((resp: Response)=>{
      this.session_lists = resp.json();
    }, err=>{
      this.error_msg = err;
    });
  }

  saveSession()
  {
    if(this.session_form.valid)
    {
      this.sessionServices.saveSessionData(this.session_form.value).subscribe((resp: Response)=>{
        this.sessionServices.getAllSessions().subscribe((resp: Response) =>
        {
          this.session_lists = resp.json();
          this.session_form.reset;
        }, err=>{
          this.error_msg = err;
        });
        
      }),
      err=>{
        this.error_msg = err;
      }
    }
    else
      this.error_msg = this.session_form.errors;
  }
  editSession(formData)
  {
    this.session_form.setValue(formData);
  }

}
