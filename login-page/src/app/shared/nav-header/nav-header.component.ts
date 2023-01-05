import { CashService } from './../../services/cash.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit{
  @Input() uname = '';
  
  userName : string= '';
  constructor(private cash:CashService){
    this.cash.getUserName().subscribe(
       (test) => { 
      this.userName = test;
      console.log("Nav-header-component: uname = " + this.userName);

    }, err => console.log(err));
    console.log("Nav-header-component: uname = " + this.uname);
  

  }
  ngOnInit(): void {
    this.cash.getUserName().subscribe(data =>{
      this.userName = data;
      console.log("Nav-header-component: uname = " + this.userName);

    }, err => console.log(err));
    console.log("Nav-header-component: uname = " + this.uname);
  

  }
}
