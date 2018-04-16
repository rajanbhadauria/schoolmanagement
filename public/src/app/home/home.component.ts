import { Component, OnInit, trigger, transition, style, animate } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger(
      'fadein',
      [
        transition('void => *',[
        style({opacity: 0}),
        animate(2000)]
      )
      ]
    )
  ]
})
export class HomeComponent implements OnInit {
  user_name;
  constructor() { }

  ngOnInit() {
    this.user_name = localStorage.getItem('name');
  }

}
