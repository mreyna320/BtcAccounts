import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[balanceHighlight]',
  standalone: true,
})
export class BalanceHighlightDirective {
  private lastBalance!: number;
  @Input() set balanceHighlight(value: number) {
    const variated = value - this.lastBalance;
    let color: string = '';
    if (variated > 0) {
      color = 'green';
    } else if (variated < 0) {
      color = 'red';
    }

    if (this.lastBalance !== undefined) {
      this.el.nativeElement.style.color = color;
      setTimeout(() => {
        if (this.el?.nativeElement) {
          this.el.nativeElement.style.color = '';
        }
      }, 3000);
    }

    this.lastBalance = value;
  }

  constructor(private el: ElementRef) {}
}
