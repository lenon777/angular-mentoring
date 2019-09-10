import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCoursePlateComponent } from './video-course-plate.component';

describe('VideoCoursePlateComponent', () => {
  let component: VideoCoursePlateComponent;
  let fixture: ComponentFixture<VideoCoursePlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCoursePlateComponent ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCoursePlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
