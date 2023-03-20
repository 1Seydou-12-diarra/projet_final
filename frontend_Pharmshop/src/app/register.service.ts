
// }
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }
  baseUrl: string = 'http://localhost:8000/';
  
  getData() {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:8000/', { headers });
  }
  

  register(username:string,email:string,passwords:string,telephone:number,adresse:string):Observable<any>{
    return this.http.post(this.baseUrl+'createUser.php',{username,email,passwords,telephone,adresse})
  }
  
    
  
  
  // getUser():Observable<any>{
  //   return this.http.get(this.baseUrl+'luserAll.php.php')
  //   .pipe(map((response: any) => {
  //     return response;
  //   }));
  
  
  // }
//   //deconnexion
// Logout(){
//   let removeToken = localStorage.removeItem('token');
//   if(removeToken== null){
//     this.router.navigate(['/login']);
//   }
//affichage des produits de la ctegorie bebe
getBebe():Observable<any>{
  return this.http.get(this.baseUrl+'lireCategorieBebe.php')
  .pipe(map((response: any) => {
    return response;
  }));


}

//affichage des produits de la ctegorie homme
getHomme():Observable<any>{
  return this.http.get(this.baseUrl+'lireCategorieHomme.php')
  .pipe(map((response: any) => {
    return response;
  }));
}
//affichage des produits de la ctegorie cheveux
getCheveux():Observable<any>{
  return this.http.get(this.baseUrl+'lireCategorieCheveux.php')
  .pipe(map((response: any) => {
    return response;
  }));
}

//affichage des produits de la ctegorie cheveux
getCorps():Observable<any>{
  return this.http.get(this.baseUrl+'lireCategorieCorps.php')
  .pipe(map((response: any) => {
    return response;
  }));
}
//affichage des produits de la ctegorie cheveux
getParfum():Observable<any>{
  return this.http.get(this.baseUrl+'lireCategorieParfums.php')
  .pipe(map((response: any) => {
    return response;
  }));
}


getUser():Observable<any>{
  return this.http.get(this.baseUrl+'userAll.php')
  .pipe(map((response: any) => {
    return response;
  }));
}
}