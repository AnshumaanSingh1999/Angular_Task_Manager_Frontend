import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupform!:FormGroup;

  constructor(private formbuilder: FormBuilder, private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signupform=this.formbuilder.group({
      username:[''],
      password:['']
    })  
  }
  signup(){
    this.http.post<any>("http://localhost:8800/signup/",this.signupform.value).subscribe(res=>{
      alert("User Registration Successfull!")
      this.signupform.reset()
      this.router.navigate([""])
    },
      err=>{
        alert("Something Went Wrong!")
      }
    )
  }


}
