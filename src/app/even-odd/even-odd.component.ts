import { Component } from '@angular/core';

@Component({
  selector: 'app-even-odd',
  templateUrl: './even-odd.component.html',
  styleUrls: ['./even-odd.component.css']
})
export class EvenOddComponent {

  isfind: string = '';
  onfind(num:any){
    let n = +num;
    if(n%2==0){
      this.isfind = "Number is Even " +num;

    }else{
      this.isfind = "Number is Odd " +num;
    }
  }
}
