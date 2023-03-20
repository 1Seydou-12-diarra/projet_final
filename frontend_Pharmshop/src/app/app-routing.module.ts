import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './administrateur/admin/admin.component';
import { RegisterComponent } from './register/register/register.component';
import { LoginComponent } from './login/login/login.component';
import { LivraisonComponent } from './components/livraison/livraison.component';
import { PaiementsComponent } from './components/paiements/paiements.component';
import { DashboardComponent } from './crudProduits/dashboard/dashboard.component';
import { CreateComponent } from './crudProduits/create/create.component';
import { BeauteComponent } from './categories/beaute/beaute.component';
import { BebeComponent } from './categories/bebe/bebe.component';
import { HommeComponent } from './categories/homme/homme.component';
import { CorpsComponent } from './categories/corps/corps.component';
import { ParfumComponent } from './categories/parfum/parfum.component';
import { CheveuxComponent } from './categories/cheveux/cheveux.component';
import { ListUserComponent } from './crudProduits/list-user/list-user.component';
import { LoginAdminComponent } from './administrateur/login-admin/login-admin.component';


const routes: Routes = [
  {path:'', redirectTo:'home' ,  pathMatch: 'full'},
  {path:'products', component : ProductsComponent},
  {path:'cart', component : CartComponent},
  {path:'home', component : HomeComponent},
  {path:'admin', component : AdminComponent},
  {path:'register', component :  RegisterComponent},
  {path:'login', component : LoginComponent },
  {path:'livraison', component : LivraisonComponent },
  {path:'paiement', component :  PaiementsComponent},
  {path:'dash', component : DashboardComponent},
  {path:'create', component : CreateComponent },
  //les routes des differentes categories
  {path:'beaute', component : BeauteComponent },
  {path:'bebe', component : BebeComponent},
  {path:'homme', component : HommeComponent},
  {path:'corps',component :CorpsComponent},
  {path:'parfum',component : ParfumComponent},
  {path:'cheveux',component : CheveuxComponent},
  //liste des users
 
  {path:'liste',component : ListUserComponent},
  {path:'loginAdmin',component : LoginAdminComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
