import { Component, OnInit } from '@angular/core';
import { House } from '../house';


@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  house: House = {
    picture: '<img src="../../assets/images/x-sm.png" />',
    category: 'A GREAT START',
    description: 'Starter home, 1600 sq. ft. or less'
  };

  house2: House = {
    picture: '<img src="../../assets/images/sm.png" />',
    category: 'GROWING FAMILY',
    description: 'A few more bedrooms, 1600-2400 sq. ft.'
  };

  constructor() { }

  ngOnInit() {
  }

}
