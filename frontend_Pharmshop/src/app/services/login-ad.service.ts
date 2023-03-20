import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from 'user';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAdService {

headers = new HttpHeaders({ 'Content-Type': 'application/json' });
currentUser = new User();
constructor(private http: HttpClient, public router: Router) { }

baseUrl: string = 'http://localhost:8000/';
  
getData() {
     const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
      return this.http.get('http://localhost:8000/', { headers });
  }
  
  
  loginAdmin(user: User) {
    return this.http.post<any>(this.baseUrl+'loginUser.php', user).subscribe((res:any) => {
      console.log(user);
      localStorage.setItem('token', res.token);
     if(res.token){
    this.router.navigate(['./admin']);
     }
      
    });
  }
  
  
  getToken(){
    return localStorage.getItem('token');
  }
  
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('token');
    return authToken!= null? true : false;
  }
}
