import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  fname = "";
  fpassword = "";

  btnClick(): void{
    console.log("button clicked",this.fname);
    console.log("Length of the pwd:",(this.fpassword.length));
  }

  btnReset(){
    this.fname = "";
    this.fpassword = "";
  }
}
