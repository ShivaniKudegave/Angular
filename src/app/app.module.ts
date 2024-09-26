import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StringinterpolationComponent } from './stringinterpolation/stringinterpolation.component';
import { EventBinding2Component } from './event-binding2/event-binding2.component';
import { EvenOddComponent } from './even-odd/even-odd.component';
import { EventBinding3Component } from './event-binding3/event-binding3.component';
import { IfDirectiveComponent } from './if-directive/if-directive.component';
import { ForDirectiveComponent } from './for-directive/for-directive.component';
import { SwitchDirectiveComponent } from './switch-directive/switch-directive.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { InbuiltPipeComponent } from './inbuilt-pipe/inbuilt-pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { SummaryPipePipe } from './summary-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StringinterpolationComponent,
    EventBinding2Component,
    EvenOddComponent,
    EventBinding3Component,
    IfDirectiveComponent,
    ForDirectiveComponent,
    SwitchDirectiveComponent,
    Parent1Component,
    Child1Component,
    Child2Component,
    InbuiltPipeComponent,
    CustomPipeComponent,
    SummaryPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
