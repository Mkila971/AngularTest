import { Component, OnInit } from '@angular/core';
import { EnregistrementService } from '../enregistrement.service';

@Component({
  selector: 'cb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todos =[ 
    {
      label:'Lait',
      done:false, 
      priority:3
    },
    {
      label:'Fromage',
      done:false, 
      priority:1
    },
    {
      label:'Pain',
      done:false, 
      priority:5
    }
  ];

  personnes = [];

  constructor(private service: EnregistrementService) { 
    
  }
  
  ngOnInit() {
    this.getPersonnes();
  }

  addTodo(newTodoLabel:string):void{
    var newTodo = {
      label:newTodoLabel,
      done:false, 
      priority:1
    } 
    this.todos.push(newTodo);
  }

  delete(todo): void{
    this.todos = this.todos.filter(t => t.label !== todo.label );
  }

  changeStatus(todo): void{
    this.todos.find(t=>t.label === todo.label).done = true;
  }

  getPersonnes(){
    this.personnes = this.service.getDataPersonnesMock();
  }

}
