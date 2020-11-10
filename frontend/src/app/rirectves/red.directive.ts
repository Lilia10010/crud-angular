import { Directive, ElementRef } from '@angular/core';

@Directive({
  //[] nome da diretiva, colocar na tag para altera-lá
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#b10757' 
   }

}
