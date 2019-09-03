import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SearchControlComponent } from './main/search-control/search-control.component';
import { AddCourseComponent } from './main/add-course/add-course.component';
import { VideoCoursePlateComponent } from './main/video-course-plate/video-course-plate.component';
import { LoadMoreComponent } from './main/load-more/load-more.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  exports: [MainComponent],
  declarations: [MainComponent, SearchControlComponent, AddCourseComponent, VideoCoursePlateComponent, LoadMoreComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
