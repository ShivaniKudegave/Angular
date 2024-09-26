import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summaryPipe'
})
export class SummaryPipePipe implements PipeTransform {

  transform(value:any,start:number=0,end:number=40): any {

    //Type assertion
    let temp=(<string> value);
    // return (temp.substring(0,15)+"...");

   return(temp.substring(start,end)+"...")
  }

}
