import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   result!:number;
   add(val1:string, val2:string)
   {
     this.result= parseFloat(val1)+parseFloat(val2)
   }
   sub(val1:string, val2:string)
   {
     this.result= parseFloat(val1)-parseFloat(val2)
   }
   mul(val1:string, val2:string): void
   {
     this.result= parseFloat(val1)*parseFloat(val2)
   }
   div(val1:string, val2:string): void
   {
     this.result= parseFloat(val1)/parseFloat(val2)
  }
  /*addresult!:number;
  subresult!:number;
  mulresult!:number;
  divresult!:number;
  add(val1:string, val2:string)
  {
    this.addresult= parseFloat(val1)+parseFloat(val2)
  }
  sub(val1:string, val2:string)
  {
    this.subresult= parseFloat(val1)-parseFloat(val2)
  }
  mul(val1:string, val2:string): void
  {
    this.mulresult= parseFloat(val1)*parseFloat(val2)
  }
  div(val1:string, val2:string): void
  {
    this.divresult= parseFloat(val1)/parseFloat(val2)
  }-->*/

  title = 'calculator';
}
function sub(val1: any, string: any, val2: any, string1: any) {
  throw new Error('Function not implemented.');
}

function div(val1: any, string: any, val2: any, string1: any) {
  throw new Error('Function not implemented.');
}

