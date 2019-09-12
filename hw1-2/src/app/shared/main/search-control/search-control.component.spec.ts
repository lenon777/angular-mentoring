import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchControlComponent } from './search-control.component';
import { FormsModule } from '@angular/forms';
import { spy } from 'sinon';

describe('SearchControlComponent', () => {
  let component: SearchControlComponent;
  let fixture: ComponentFixture<SearchControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ SearchControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // fit('should submit search value', () => {
  //   component.searchValue = 'test';
  //   component.submit('test');

  //   const clg = spy(component, 'sum');

  //   expect(component.searchValue).toEqual('');
  //   expect(clg.callCount).toEqual(1);
  //});

  it('should sum', () => {
    expect(component.sum(1, 3)).toEqual(4);
  });
  
  it('should containString', () => {
    component.searchValue = 'test';
    expect(component.searchValue).toContain('te');
  });
});
