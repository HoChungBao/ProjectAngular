import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos? : Todo[];
  constructor() { }

  getTodos() {
    this.todos = [
      {
      id: 1,
      title : 'Todo One',
      completed : true
      },
      {
      id: 2,
      title : 'Todo Two',
      completed : false
      },
      {
        id: 3,
        title : 'Todo Three',
        completed : true
      },
    ];
    return this.todos; 
  }
}
