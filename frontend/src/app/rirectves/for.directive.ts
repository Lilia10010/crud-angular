import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})

// ou usar o OnChanges 
export class ForDirective implements OnInit {

  @Input('myForEm') number: number[]
  // @Input('myForUsando') texto: string

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) {

   }

   ngOnInit(): void{

    // for(let number of this.number){
    //   this.container.createEmbeddedView(
    //     this.template, {$implicit: number})
    // }

    // console.log(this.number)
    // console.log(this.texto)

   }

}
