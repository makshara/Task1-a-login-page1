import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  fname = "";
  fpassword = "";
  isSubmitButtonClicked: boolean = false;

  constructor(private router: Router){
  }

  btnClick(): void{
    this.isSubmitButtonClicked = true;
    setTimeout( () => {

      console.log("button clicked",this.fname);
    console.log("Length of the pwd:",(this.fpassword.length));
    
    this.router.navigateByUrl('landing-page', {
       state: { 
        firstName: this.fname 
      } 
    });
    }, 5000 );

   

    
  
  }

  btnReset(){
    this.fname = "";
    this.fpassword = "";
  }
  btnSubmit(){

  }
}
