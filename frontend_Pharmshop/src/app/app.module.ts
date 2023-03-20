import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './administrateur/admin/admin.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './register/register/register.component';
import { LoginComponent } from './login/login/login.component';
import { LivraisonComponent } from './components/livraison/livraison.component';
import { InfoshopComponent } from './components/infoshop/infoshop.component';
import { PaiementsComponent } from './components/paiements/paiements.component';
import { DashboardComponent } from './crudProduits/dashboard/dashboard.component';
import { ButtonComponent } from './components/button/button.component';
import { CreateComponent } from './crudProduits/create/create.component';
import { UpdateComponent } from './crudProduits/update/update.component';
import { DeleteComponent } from './crudProduits/delete/delete.component';
import { BeauteComponent } from './categories/beaute/beaute.component';
import { CheveuxComponent } from './categories/cheveux/cheveux.component';
import { CorpsComponent } from './categories/corps/corps.component';
import { BebeComponent } from './categories/bebe/bebe.component';
import { HommeComponent } from './categories/homme/homme.component';
import { ParfumComponent } from './categories/parfum/parfum.component';
import { ListUserComponent } from './crudProduits/list-user/list-user.component';
import { LoginAdminComponent } from './administrateur/login-admin/login-admin.component';
import { MedicoComponent } from './components/medico/medico.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    HomeComponent,
    AdminComponent,
    FilterPipe,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    LivraisonComponent,
    InfoshopComponent,
    PaiementsComponent,
    DashboardComponent,
    ButtonComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    BeauteComponent,
    CheveuxComponent,
    CorpsComponent,
    BebeComponent,
    HommeComponent,
    ParfumComponent,
    ListUserComponent,
    LoginAdminComponent,
    MedicoComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
