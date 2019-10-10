import { Injectable } from '@angular/core';
import { Course } from '../../utils/course';

@Injectable()
export class DataService {

  public course1 = new Course(1, 'Video Course 1', "1.01.2001", "30min", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos impedit voluptatem quaerat quam odio accusantium ipsam facilis beatae cumque molestias odit vel adipisci tenetur quia pariatur, temporibus aperiam optio.");
  public course2 = new Course(2, 'Video Course 2', "1.01.2001", "30min", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos impedit voluptatem quaerat quam odio accusantium ipsam facilis beatae cumque molestias odit vel adipisci tenetur quia pariatur, temporibus aperiam optio.");
  public course3 = new Course(3, 'Video Course 3', "1.01.2001", "1h 10min", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos impedit voluptatem quaerat quam odio accusantium ipsam facilis beatae cumque molestias odit vel adipisci tenetur quia pariaturmk aperiam optio! Consequuntur quo, vel minus asperiores quidem totam perspiciatis magnam fugit?");
  public course4 = new Course(4, 'Video Course 4', "1.01.2001", "40min", "Lorem ipsum dolor sit. Dignissimos impedit voluptatem quaerat quam odio accusantium ipsam facilis beatae cumque molestias odit vel adipisci tenetur quia pariatur, temporibus aperiam optio! Consequuntur quo, vel minus asperiores quidem totam perspiciatis magnam fugit?");
  public course5 = new Course(5, 'Video Course 5', "1.01.2001", "40min", "Lorem ipsum dolor sit. Dignissimos impedit voluptatem quaerat quam odio accusantium ipsam facilis beatae cumque molestias odit vel adipisci tenetur quia pariatur, temporibus aperiam optio! Consequuntur quo, vel minus asperiores quidem totam perspiciatis magnam fugit?");
  public course6 = new Course(6, 'Video Course 6', "1.01.2001", "40min", "Lorem ipsum dolor sit. Dignissimos impedit voluptatem quaerat quam odio accusantium ipsam facilis beatae cumque molestias odit vel adipisci tenetur quia pariatur, temporibus aperiam optio! Consequuntur quo, vel minus asperiores quidem totam perspiciatis magnam fugit?");
  public course7 = new Course(7, 'Video Course 7', "1.01.2001", "40min", "Lorem ipsum dolor sit. Dignissimos impedit voluptatem quaerat quam odio accusantium ipsam facilis beatae cumque molestias odit vel adipisci tenetur quia pariatur, temporibus aperiam optio! Consequuntur quo, vel minus asperiores quidem totam perspiciatis magnam fugit?");
  public data: any = [this.course1, this.course2, this.course3, this.course4, this.course5, this.course6, this.course7];

  deleteCourse(courseId) {
    //this.data = this.data.filter((el)=> el.id !== courseId);
  }

  constructor() { }


}