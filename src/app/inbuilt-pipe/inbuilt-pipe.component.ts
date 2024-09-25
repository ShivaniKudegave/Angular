import { Component } from '@angular/core';

@Component({
  selector: 'app-inbuilt-pipe',
  templateUrl: './inbuilt-pipe.component.html',
  styleUrls: ['./inbuilt-pipe.component.css']
})
export class InbuiltPipeComponent {

  strData:string='Hi WelcOme to AnGular MoDule';

  mydate=Date();
}
