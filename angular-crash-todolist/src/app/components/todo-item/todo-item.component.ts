import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo?: Todo;

  constructor() { }

  ngOnInit(): void {
    console.log(this.todo);
  }

  setClasses(){
    let classes = {
      todo : true, //todo : tên class , true,false : hiện thị hay không
      'is-completed' : this.todo?.completed,
    }
    return classes;
  }

  onToggle(todo : Todo) {

    todo.completed = !todo.completed;

     //console.log(todo.completed);
  }

  onDelete() {
      console.log() ;
  }

}
