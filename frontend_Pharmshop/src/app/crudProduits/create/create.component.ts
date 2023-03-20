import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
createForm!: FormGroup; 
  success = false;
  errMessage = '';
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private apiService: ApiService,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
    nom:['',Validators.required],
    descriptions:['',Validators.required],
    prix:['',Validators.required],
    img:['',Validators.required],
    quantite:['',Validators.required],
    categorie_id:['',Validators.required]
    }) 
  }
  //fonction permettant devalider les informations de l'utilisteur
create(){
    const formValue = this.createForm.value
    this.apiService.create(formValue.nom,formValue.descriptions,formValue.prix,formValue.img,formValue.quantite,formValue.categorie_id).subscribe({next:() => {
      this.success =true
      this.router.navigate(["/dash"])
    },error : (err) =>{
      if(err.error.code == 409)
        this.errMessage= 'ce produit existe deja.'
      else 
        this.errMessage= ' erreur de donnée '
    }})
    this.createForm.reset();
  }
 
}
