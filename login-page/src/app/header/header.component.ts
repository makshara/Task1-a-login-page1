import { CashService } from './../services/cash.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
  userName : string= '';
  constructor(private cash:CashService){
   

  }
  ngOnInit(): void {
    this.cash.getUserName().subscribe(data =>{
      this.userName = data;
      console.log("Nav-header-component: uname = ",this.userName);

    });
    console.log("Nav-header-component: uname = ",this.userName);
  }
}
