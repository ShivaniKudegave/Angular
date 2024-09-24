import { Component } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent {

  course:string[]=["core Java","HTML,CSS,JS","Advance Java","MySql","Spring Core", "Hibernate",
    "Spring Boot","Spring MVC",'Angular 16','Docker','AWS'];


    arrProduct:any[]=[
      {
        name:"RealMe",
        price:18000,
        qty:1
      },
      {
        name:"Samsung",
        price:30000,
        qty:1
      },
      {
        name:"OnePlus",
        price:40000,
        qty:1
      },
      {
        name:"iPhone",
        price:80000,
        qty:1
      }
    ]
}
