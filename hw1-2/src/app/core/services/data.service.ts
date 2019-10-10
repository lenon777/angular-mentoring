import { Injectable } from '@angular/core';
import { Course } from '../../utils/course';

@Injectable()
export class DataService {

  public course1 = new Course(1, 'Video Course 1', new Date(2019,5,10), 30, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos impedit voluptatem quaerat quam odio accusantium ipsam facilis beatae cumque molestias odit vel adipisci tenetur quia pariatur, temporibus aperiam optio.");
  public course2 = new Course(2, 'Video Course 2', new Date(2017,1,12), 130, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos impedit voluptatem quaerat quam odio accusantium ipsam facilis beatae cumque molestias odit vel adipisci tenetur quia pariatur, temporibus aperiam optio.");
  public course3 = new Course(3, 'Video Course 3', new Date(2019,11,9), 70, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos impedit voluptatem quaerat quam odio accusantium ipsam facilis beatae cumque molestias odit vel adipisci tenetur quia pariaturmk aperiam optio! Consequuntur quo, vel minus asperiores quidem totam perspiciatis magnam fugit?");
  public course4 = new Course(4, 'Video Course 4', new Date(2019,3,30), 40, "Lorem ipsum dolor sit. Dignissimos impedit voluptatem quaerat quam odio accusantium ipsam facilis beatae cumque molestias odit vel adipisci tenetur quia pariatur, temporibus aperiam optio! Consequuntur quo, vel minus asperiores quidem totam perspiciatis magnam fugit?");
  public course5 = new Course(5, 'Video Course 5', new Date(2020,11,1), 80, "Lorem ipsum dolor sit. Dignissimos impedit voluptatem quaerat quam odio accusantium ipsam facilis beatae cumque molestias odit vel adipisci tenetur quia pariatur, temporibus aperiam optio! Consequuntur quo, vel minus asperiores quidem totam perspiciatis magnam fugit?");
  public course6 = new Course(6, 'Video Course 6', new Date(2018,10,4), 40, "Lorem ipsum dolor sit. Dignissimos impedit voluptatem quaerat quam odio accusantium ipsam facilis beatae cumque molestias odit vel adipisci tenetur quia pariatur, temporibus aperiam optio! Consequuntur quo, vel minus asperiores quidem totam perspiciatis magnam fugit?");
  public course7 = new Course(7, 'Video Course 7', new Date(2019,9,5) , 60, "Lorem ipsum dolor sit. Dignissimos impedit voluptatem quaerat quam odio accusantium ipsam facilis beatae cumque molestias odit vel adipisci tenetur quia pariatur, temporibus aperiam optio! Consequuntur quo, vel minus asperiores quidem totam perspiciatis magnam fugit?");
  public data: any = [this.course1, this.course2, this.course3, this.course4, this.course5, this.course6, this.course7];

  deleteCourse(courseId) {
    //this.data = this.data.filter((el)=> el.id !== courseId);
  }

  constructor() { }


}