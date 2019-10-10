import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-video-course-plate',
  templateUrl: './video-course-plate.component.html',
  providers: [DataService],
  styleUrls: ['./video-course-plate.component.scss']
})
export class VideoCoursePlateComponent implements OnInit {
  @Output() public myOutput = new EventEmitter();


  constructor(private dataService: DataService) { }
  public data = this.dataService.data;
  //public isListEmty: boolean = this.data.length === 0;

  deleteCourse(curerenCourse) {
    this.myOutput.emit(this.data.length);
    this.data = this.data.filter((el) => el.id !== curerenCourse.id);
  }
  like(id) {
    console.log(id);
    this.data.forEach((el) => {
     if(el.id === id) {
       if(el.topRated) {
        el.topRated = false;
       } else {
        el.topRated = true;
       }
       
     }
    })
  }

  public changeData(): void {

  }
  ngOnInit() {
  }

}
