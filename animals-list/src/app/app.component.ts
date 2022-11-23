import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ANIMALSLIST';
  output!:string;
  result!:string;
  search(val1:string)
  {
    if(val1=="LION" ||val1=="lion")
    {
      this.result="assets/LION.png";

    }
    if(val1=="TIGER"||val1=="Tiger"||val1=="tiger")
  {
     
      this.result="assets/ter.png";
  }   
   this.output=val1.toUpperCase();
  }
  display(val:string)
  {
    if(val=="LION")
     {
      this.result="assets/LION.png";
     }
    if(val=="TIGER")
    {
      this.result="assets/TIGER.png";
    }
    if(val=="lion")
    {
      this.result="assets/l.png";
    }
    if(val=="tiger")
    {
      this.result="assets/tg.png";
    }
    if(val=="Tiger"){
      this.result="assets/ter.png"
    }
    this.output=val.toUpperCase();
  }
}