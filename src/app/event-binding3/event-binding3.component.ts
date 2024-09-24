import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding3',
  templateUrl: './event-binding3.component.html',
  styleUrls: ['./event-binding3.component.css']
})
export class EventBinding3Component {
  dispResult: string | undefined;

  onChange(myvalue:string){
    console.log("Change Event Occur...");

    if(myvalue.length>6){
      // alert("Your character limit is exceeds");
    this.dispResult = "Shivani123, ShivaniK"
    }else{
      console.log("Change Event Occur...");
    }
  }

}
