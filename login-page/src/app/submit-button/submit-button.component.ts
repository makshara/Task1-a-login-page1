import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css']
})
export class SubmitButtonComponent {
  
  firstName;
  isBackButtonClicked: boolean = false;
  constructor(private router: Router){
    this.firstName = this.router.getCurrentNavigation()?.extras?.state?.['firstName'];

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
}
