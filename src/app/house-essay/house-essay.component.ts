import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-house-essay',
  templateUrl: './house-essay.component.html',
  styleUrls: ['./house-essay.component.css']
})
export class HouseEssayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
