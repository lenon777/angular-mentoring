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

  deleteCourse(curerenCourse) {
    this.myOutput.emit(curerenCourse);
    this.data = this.data.filter((el) => el.id !== curerenCourse.id);
  }

  public changeData(): void {

  }

  ngOnInit() {
  }

}
