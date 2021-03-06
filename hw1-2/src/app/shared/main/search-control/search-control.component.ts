import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss']
})
export class SearchControlComponent implements OnInit {
  public searchValue = "";
  constructor() { }
  public submit(value): void {
    console.log(value);
    this.searchValue = "";
    this.sum(1,2);
  }

  ngOnInit() {
  }


  sum(a: number, b: number): number {
    return a + b;
  }
  
  containString(value: string): string {
    return value;
  }
}
