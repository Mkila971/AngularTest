import { Component, OnInit } from '@angular/core';
import { EnregistrementService } from '../enregistrement.service';
import {AngularFireDatabase,AngularFireList} from'angularfire2/database';

import {Todo} from './../model/todo.model';

@Component({
  selector: 'cb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todosFirebase : AngularFireList<any>;
  todos : Todo[];
  personnes = [];

  constructor(private service: EnregistrementService,private db:AngularFireDatabase) { 
      this.todosFirebase = db.list('/Todos');

  }
  
  ngOnInit() {
    var x = this.todosFirebase.snapshotChanges().subscribe(items => {
      this.todos = [];
      items.forEach(item => {
      var todo = item.payload.toJSON();
      todo["$key"] = item.key;
      this.todos.push(todo as Todo);
      });

    });
    this.getPersonnes();
  }

  addTodo(newTodoLabel:string):void{
    this.todosFirebase.push({
      label:newTodoLabel,
      done:false, 
      priority:1
    } );
  }

  delete(todo): void{
    this.todosFirebase.remove(todo.$key);
  }

  changeStatus(todo): void{
    this.todosFirebase.update(todo.$key,{
      done : true
    });
  }

  getPersonnes(){
    this.personnes = this.service.getDataPersonnesMock();
  }

}
