import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {

  constructor(private el:ElementRef) { 
   // this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @Input() appHighlight = '';

  @HostListener('mouseenter') onMouseEnter() {
    //this.highlight('yellow');
    this.highlight(this.appHighlight || 'red');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
