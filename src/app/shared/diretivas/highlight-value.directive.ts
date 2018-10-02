import { Directive, Renderer, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[highlightValue]'
})
export class HighlightValueDirective {

  @Input() highlightValue: number;

  constructor(
    private renderer: Renderer,
    private elementRef: ElementRef
  ) {
   
  }

  ngOnChanges() {   
    if (this.highlightValue >= 0) {
      this.renderer.setElementStyle(this.elementRef.nativeElement, "color", "green");
    } else {
      this.renderer.setElementStyle(this.elementRef.nativeElement, "color", "red");
    }
  }

}
