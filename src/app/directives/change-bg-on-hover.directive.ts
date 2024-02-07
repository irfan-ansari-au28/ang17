import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBgOnHover]',
  standalone: true
})
export class ChangeBgOnHoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouseEnter')
    this.changeBackgroundColor('green')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor(null)
  }

  private changeBackgroundColor(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color)
  }

}
