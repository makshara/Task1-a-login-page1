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

  constructor(private router: Router){
  }

  btnClick(): void{
    console.log("button clicked",this.fname);
    console.log("Length of the pwd:",(this.fpassword.length));
    
    this.router.navigateByUrl('landing-page', {
       state: { 
        firstName: this.fname 
      } 
    });
  }

  btnReset(){
    this.fname = "";
    this.fpassword = "";
  }
}
