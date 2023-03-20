// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-login',
// //   templateUrl: './login.component.html',
// //   styleUrls: ['./login.component.css']
// // })
// // export class LoginComponent {

// // }

 import { Component, OnInit } from '@angular/core';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 import { LoginService } from 'src/app/login.service';
 @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']})

export class LoginComponent implements OnInit {


loginForm!: FormGroup;
success = false;
errMessage = '';
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    public router: Router
  ) { 
    this.loginForm = this.formBuilder.group({
      username:['',Validators.required],
      passwords:['',Validators.required],
    }) ;
  }
  ngOnInit(): void {}
  login(){
    this.loginService.login(this.loginForm.value)
    this.success = true
    error :(err:any) =>{
      if(err.error.code == 409)
        this.errMessage= ' erro.'
      else 
        this.errMessage= ' mot de passe ou nom incorrect '
    }
    this.loginForm .reset();
    }
   
}
 

