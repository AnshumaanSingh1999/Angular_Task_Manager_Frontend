import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public userdate:any

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.userdate=localStorage.getItem("usernamels") 
  }

  logoutFunction(){
    localStorage.clear()
    this.router.navigate([""])
  }
  
}