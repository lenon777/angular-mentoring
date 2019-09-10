import { Injectable } from '@angular/core';
import { Course } from '../classes/course';

@Injectable()
export class DataService{
  public data : any = [{
        id: 1,
        title: 'Video Course 1',
        creationDate: "1.01.2001",
        duration: "30min",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos impedit voluptatem quaerat quam odio accusantium ipsam facilis beatae cumque molestias odit vel adipisci tenetur quia pariatur, temporibus aperiam optio."
      }, {
        id: 2,
        title: 'Video Course 2',
        creationDate: "1.01.2001",
        duration: "1h 30min",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos impedit voluptatem quaerat quam odio accusantium ipsam facilis beatae cumque molestias odit vel."
      }, {
        id: 3,
        title: 'Video Course 3',
        creationDate: "1.01.2001",
        duration: "1h 10min",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos impedit voluptatem quaerat quam odio accusantium ipsam facilis beatae cumque molestias odit vel adipisci tenetur quia pariaturmk aperiam optio! Consequuntur quo, vel minus asperiores quidem totam perspiciatis magnam fugit?"
      },{
        id: 4,
        title: 'Video Course 4',
        creationDate: "1.01.2001",
        duration: "40min",
        description: "Lorem ipsum dolor sit. Dignissimos impedit voluptatem quaerat quam odio accusantium ipsam facilis beatae cumque molestias odit vel adipisci tenetur quia pariatur, temporibus aperiam optio! Consequuntur quo, vel minus asperiores quidem totam perspiciatis magnam fugit?"
      },{
        id: 5,
        title: 'Video Course 5',
        creationDate: "1.01.2001",
        duration: "40min",
        description: "Lorem ipsum dolor sit. Dignissimos impedit voluptatem quaerat quam odio accusantium ipsam facilis beatae cumque molestias odit vel adipisci tenetur quia pariatur, temporibus aperiam optio! Consequuntur quo, vel minus asperiores quidem totam perspiciatis magnam fugit?"
      },{
        id: 6,
        title: 'Video Course 6',
        creationDate: "1.01.2001",
        duration: "40min",
        description: "Lorem ipsum dolor sit. Dignissimos impedit voluptatem quaerat quam odio accusantium ipsam facilis beatae cumque molestias odit vel adipisci tenetur quia pariatur, temporibus aperiam optio! Consequuntur quo, vel minus asperiores quidem totam perspiciatis magnam fugit?"
      },{
        id: 7,
        title: 'Video Course 7',
        creationDate: "1.01.2001",
        duration: "40min",
        description: "Lorem ipsum dolor sit. Dignissimos impedit voluptatem quaerat quam odio accusantium ipsam facilis beatae cumque molestias odit vel adipisci tenetur quia pariatur, temporibus aperiam optio! Consequuntur quo, vel minus asperiores quidem totam perspiciatis magnam fugit?"
      }
    ]

  constructor(){}


}