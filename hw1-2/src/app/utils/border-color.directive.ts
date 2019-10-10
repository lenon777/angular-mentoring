import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective implements OnInit {
  @Input('appBorderColor') course: any;
  private currentDate = new Date();

  constructor(private el: ElementRef) { }

  public reduceDays(date: any, days: any): any {
    let result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }
  ngOnInit() {
    if (this.course.creationDate < this.currentDate && this.course.creationDate >= this.reduceDays(this.currentDate, 14)) {
      this.el.nativeElement.style.border = "3px solid green";
    } else if (this.course.creationDate > this.currentDate) { 
      this.el.nativeElement.style.border = "3px solid blue";
    }
  }
  //console.log(this.course.creationDate);
}


