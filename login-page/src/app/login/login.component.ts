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
  passwordRegex=  "^[A-Za-z]\w{7,14}$/"  ;
 
  constructor(private router: Router){
  }
  validatePassword(){
    if(this.fpassword.match(this.passwordRegex)){
      console.log("Valid password")
    }else {
      console.log("Invalid password")
    }
  }  
  btnSubmit(): void{
    this.validatePassword();
    this.isSubmitButtonClicked = true;
    setTimeout( () => {

      console.log("button clicked",this.fname);
    console.log("Length of the pwd:",(this.fpassword.length));
    
    this.router.navigateByUrl('landing-page', {
       state: { 
        firstName: this.fname 
      } 
    });
    }, 1000 );

   

    
  
  }

  btnReset(){
    this.fname = "";
    this.fpassword = "";
  }

}
