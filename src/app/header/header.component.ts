import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pre = [
    'Picture your',
    'Tell us your',
    'Fill in the details of your',
    'Sign up and save your'
  ]

  constructor() { }

  ngOnInit() {
  }

 

}
