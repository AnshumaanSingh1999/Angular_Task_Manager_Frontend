import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  public taskform!:FormGroup;


  constructor(private http:HttpClient,private formbuilder: FormBuilder) { } 

  ngOnInit(): void {
    

    this.taskform=this.formbuilder.group({
      task:[''],
      status:[''],
    })
    


  }

  addtask(){

    this.http.post<any>("http://localhost:8800/addtask/",this.taskform.value).subscribe(res=>{
      alert("Task Added Successfully!")
      this.taskform.reset()
    },
      err=>{
        alert("Something Went Wrong!")
      }
    )
  }

}