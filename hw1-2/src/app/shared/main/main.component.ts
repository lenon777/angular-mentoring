import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public idOfCourse: number;

  constructor(public dataService: DataService) {
    dataService.deleteCourse(this.idOfCourse)
   }

  valueFromChild($event) {
    console.log($event.id)
  }
  ngOnInit() {
  }
}
