import { environment } from './../../environments/environment';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../models/userdetails.model';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css']
})
export class SubmitButtonComponent implements OnInit{
  @Input() firstName;
  isHovered: boolean = false;
  isBackButtonClicked: boolean = false;

  constructor(private router: Router, private userdetails: UserDetailsService){
    this.firstName = this.router.getCurrentNavigation()?.extras?.state?.['firstName'];
  }

  ngOnInit(): void {
    let request:UserDetails = {
      fName: "yash",
      lName: "reddy"
  };
    this.userdetails.postUserDetails(request).subscribe(data=>{
      environment.backgroundHeaderColor
      console.log(JSON.stringify(data))
    });
  }

  btnBack(){
    this.isBackButtonClicked = true;
    console.log("BACK button Clicked "+this.firstName + " ,"+this.isBackButtonClicked );
    //this.router.navigateByUrl('home');
  }
  btnYes(){
    console.log("BACK button Clicked "+this.firstName + " ,"+this.isBackButtonClicked );
    this.router.navigateByUrl('home');
  }
  btnClose(){
    this.isBackButtonClicked = false;
  }
  btnHome(){
    this.router.navigateByUrl('landing-page');
  }
  over(){
    console.log("Mouseover called");
  }
}
