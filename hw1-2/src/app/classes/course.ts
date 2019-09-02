import { CourseInterface } from '../models/course.interface';

export class Course implements CourseInterface {

  id: number;
  title: string;
  creationDate: string;
  duration: string;
  description: string;

}