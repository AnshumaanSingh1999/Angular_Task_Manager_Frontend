import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  public useridconverted:any;

  public taskform!:FormGroup;

  public useridls: any;
  
  constructor(private http:HttpClient,private formbuilder: FormBuilder) { } 

  ngOnInit(): void {

    this.useridls=localStorage.getItem("useridls");    
    var l=this.useridls.length


    let c=0
    for(let i=0;i<l;i++){
      let ch=this.useridls.charAt(i)
      let x=ch-0
      c=c*10+x;
      this.useridconverted=c;
    }
    this.useridls=this.useridconverted


    console.log(this.useridconverted)
    console.log(typeof(this.useridconverted))

    this.taskform=this.formbuilder.group({
      userid:this.useridconverted,
      task:[''],
      status:[''],
    })
  }


  addtask(){
    console.log(this.useridls)
    console.log(typeof(this.useridls))





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