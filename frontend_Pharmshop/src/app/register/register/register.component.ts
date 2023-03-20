// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {

// }
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {RegistrationService} from 'src/app/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup; 
  success = false;
  errMessage = '';
 

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private registerService: RegistrationService,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username:['',Validators.required],
      email:['',Validators.required],
      passwords:['',Validators.required],
      telephone:['',Validators.required],
      adresse:['',Validators.required]
    }) 
  }
//fonction permettant devalider les informations de l'utilisteur
  register(){
    const formValue = this.registerForm.value
    this.registerService.register(formValue.username,formValue.email,formValue.passwords,formValue.telephone,formValue.adresse).subscribe({next:() => {
      this.success =true
    },error : (err) =>{
      if(err.error.code == 409)
        this.errMessage= 'ce utilisateur existe deja.'
      else 
        this.errMessage= ' erreur de donnée '
    }})
    this.registerForm .reset();
  }
}