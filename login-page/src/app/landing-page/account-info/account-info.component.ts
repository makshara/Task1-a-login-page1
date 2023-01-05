import { Router, ActivatedRoute } from '@angular/router';
import { UserDetailsService } from './../../services/user-details.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit{
  firstName = '';
  count = 0;
  userDetails:any = [];
  listOfUsers: any =[];
  status:boolean = true;

  ngOnInit(): void {
    this.getUsers();
    this.route.params.subscribe((params: any) => {
      this.firstName = params['userName'];
    });
  }
  constructor(private userService: UserDetailsService, private router:Router, private route:ActivatedRoute){
    this.firstName = this.router.getCurrentNavigation()?.extras?.state?.['firstName'];
    console.log("username:",this.firstName);
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
        this.count = this.listOfUsers.length;
      });
     
  }
 
  @Output() someEvent = new EventEmitter();

someFunction(): void {
  this.someEvent.emit(this.count);
}
}
