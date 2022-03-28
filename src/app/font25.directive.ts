import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFont25]',
})
export class Font25Directive {
  constructor(private el: ElementRef) {
    el.nativeElement.style.fontSize = '35px';
  }
  ngOnInit() {
    this.el.nativeElement.innerText =
      '[' + this.el.nativeElement.innerText + ']';
  }
}
