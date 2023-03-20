import { Component, OnInit } from '@angular/core';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginAdService } from 'src/app/services/login-ad.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  loginForm!: FormGroup;
  success = false;
  errMessage = '';
    constructor(
      private formBuilder: FormBuilder,
      private loginAdService: LoginAdService,
      public router: Router
    ) { 
      this.loginForm = this.formBuilder.group({
        username:['',Validators.required],
        passwords:['',Validators.required],
      }) ;
    }
    ngOnInit(): void {}
    loginAdmin(){
      this. loginAdService.loginAdmin(this.loginForm.value)
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
