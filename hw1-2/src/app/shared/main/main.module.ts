import { NgModule } from "@angular/core";
import { AddCourseComponent } from './add-course/add-course.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { SearchControlComponent } from './search-control/search-control.component';
import { VideoCoursePlateComponent } from './video-course-plate/video-course-plate.component';
import { DataService } from 'src/app/core/services/data.service';
import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DurationPipe } from 'src/app/utils/duration.pipe';
import { OrderByPipe } from 'src/app/utils/order-by.pipe';

@NgModule({
    declarations: [
        MainComponent,
        AddCourseComponent,
        LoadMoreComponent,
        SearchControlComponent,
        VideoCoursePlateComponent,
        DurationPipe,
        OrderByPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule
    ],
    exports: [
        MainComponent
    ]
})

export class MainModule {
}