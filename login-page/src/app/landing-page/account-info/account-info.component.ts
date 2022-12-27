import { UserDetailsService } from './../../services/user-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit{
  userDetails = 'test';
  ngOnInit(): void {
    this.getUsers();
 
  }
  constructor(private userService: UserDetailsService){
  }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(data=>{
        console.log(JSON.stringify(data));
        this.userDetails = JSON.stringify(data);
      });
    
  }
}
