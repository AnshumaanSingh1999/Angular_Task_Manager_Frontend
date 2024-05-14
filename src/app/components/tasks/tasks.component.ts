import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  taskdata:any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.gettasks();
  }

  gettasks(){
    this.http.get<any>("http://localhost:8800/usertasks/").subscribe(res=>{
      if(res.length>0){
        this.taskdata=res
        console.log(res)
      }
    },
      err=>{
        alert("Api call Went Wrong!")
      }
    )
  }

}
