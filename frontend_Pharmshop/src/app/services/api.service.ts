import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { map } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}
  baseUrl: string = 'http://localhost:8000/';
  
  getData() {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this._http.get('http://localhost:8000/', { headers });
  }
  
//affichage de tout les  produits
  getProduct() {
    return this._http
      .get<any>(this.baseUrl+'produitAll.php')
      .pipe(map((response: any) => {
        return response;
      }));
  }
  //creation d'un produit
  create(nom:string,descriptions:string,prix:number,img:string,quantite:number,categorie_id:number):Observable<any>{
    return this._http.post(this.baseUrl+'addProduit.php',{nom,descriptions,prix,img,quantite,categorie_id})
    .pipe(map((response: any) => {
      return response;
    }));
  }
  //creation d'un produit
  // delete(id:number):Observable<any>{
  //   return this._http.post(this.baseUrl+'deleteProduit.php',{id})
  //   .pipe(map((response: any) => {
  //     return response;
  //   }));
  // }
  
  
  ///affichage de tout les  produits dont la categorie est beaute
  getBeaute():Observable<any>{
    return this._http.get(this.baseUrl+'lireCategorieBeaute.php')
    .pipe(map((response: any) => {
      return response;
    }));
    
    //affichage de tout les  produits dont la categorie est bebe
    

}
}