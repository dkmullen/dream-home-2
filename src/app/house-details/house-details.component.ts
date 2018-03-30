import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /* Below is another way to navigate w/o a direct link in html. This is useful
    when the redirect happens after some other code executes, rather than after
    a click (as currently implemented). Be sure to import Router and inject 
    a private router of type:Router in constructor.

  */
  onButtonClick() {
    this.router.navigate(['/']);
    // for relative routes this.router.navigate(['whatevs'], {relativeTo: this.route});
    // Be sure to import ActivatedRoute from @angular/router and inject
    // private route: ActivatedRoute in the constructor
  }

}
