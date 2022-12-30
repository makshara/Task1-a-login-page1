import { UserDetailsService } from './../../services/user-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit{
  userDetails:any = [];
  listOfUsers: any =[];
  status:boolean = true;

  ngOnInit(): void {
    this.getUsers();
   // this.clickEvent();
  }
  constructor(private userService: UserDetailsService){
  }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe((data:any)=>{
        console.log(JSON.stringify(data));
        this.userDetails = data;
        //creating a list of strings(users)
        let user:any;
        for(user of this.userDetails){
          //this.listOfUsers.push(this.userDetails[user].username);
          this.listOfUsers.push(user.username);
        }
        console.log(this.listOfUsers);
      });
     
  }
}
