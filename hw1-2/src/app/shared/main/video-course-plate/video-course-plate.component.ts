import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-video-course-plate',
  templateUrl: './video-course-plate.component.html',
  providers: [DataService],
  styleUrls: ['./video-course-plate.component.scss']
})
export class VideoCoursePlateComponent implements OnInit {

  constructor(private dataService: DataService) { }
  public data = this.dataService.getData();

  ngOnInit() {
  }

}
