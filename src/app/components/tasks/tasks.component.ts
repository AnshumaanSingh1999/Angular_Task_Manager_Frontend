import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  public taskdata:any

  public useridconverted:any;

  public userdataform!:FormGroup;



  public userid: any;



  constructor(private formbuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.userid=localStorage.getItem("useridls");    
    var l=this.userid.length


    let c=0
    for(let i=0;i<l;i++){
      let ch=this.userid.charAt(i)
      let x=ch-0
      c=c*10+x;
      this.useridconverted=c;
    }


    this.userid=this.useridconverted

    this.userdataform=this.formbuilder.group({
      userid: this.userid
    })
    


    // this.gettasks();
    this.getusertasks();

    


  }

  // gettasks(){
  //   this.http.get<any>("http://localhost:8800/tasks/").subscribe(res=>{
  //     if(res.length>0){
  //       this.taskdata=res
  //     }
  //   },
  //     err=>{
  //       alert("Api call Went Wrong!")
  //     }
  //   )
  // }


  getusertasks(){
    this.http.post<any>("http://localhost:8800/usertasks/",this.userdataform.value).subscribe(res=>{
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
