import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  @Output() childStrEvent=new EventEmitter();

  msg:string="Hope u r enjoying..";
  

  onSend(){
    this.childStrEvent.emit(this.msg)
  }

  @Output() childEvent= new EventEmitter();
  childJson: any={};
  
  json={
    id:9,
    fname:'Shivani',
    lname:'Kudegawe'
  }
  onClick(){
    this.childEvent.emit(this.json)
  }
  

}
