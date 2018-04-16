import { Component, OnInit} from '@angular/core';
import { LoginService } from '../../login/login.service';
import { Router } from '@angular/router';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({ opacity: 0, color: 'red' }),
        animate(1000, style({opacity: 1}))
      ]),
      transition('* => void',[
        style({ opacity: 0 }),
        animate(1000, style({opacity: 0}))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  toggle: boolean = false;
  showSettingNav: boolean = false;
  constructor(private LoginServices: LoginService, private router: Router) { }
  
  ngOnInit() {
  }

  isLoggedIn()
  {
    return this.LoginServices.isLoggedIn();
  }

  logOut()
  {
    this.LoginServices.logoutUser();
    this.router.navigateByUrl('/');
  }

  showHideMenu()
  {
    this.toggle = !this.toggle;
  }

  

}
