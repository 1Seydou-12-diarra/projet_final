import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-beaute',
  templateUrl: './beaute.component.html',
  styleUrls: ['./beaute.component.css']
})
export class BeauteComponent implements OnInit  {
  public productList: any;
  public filterCategory : any
  searchKey:string ="";
  constructor(private _api: ApiService, private _cartService : CartService) {}
  
  ngOnInit(): void {
    this._api.getBeaute().subscribe((response) => {
      this.filterCategory = response;
      this.productList = response;
    
      this.productList.forEach((a:any)=>{
      if(a.category ==="corps" || a.category ==="cheveux"  || a.category ==="Beauté" || a.category ==="Parfums" || a.category ==="Bébé et Enfants"|| a.category ==="Homme"){
          a.category ="Beauté"
         
          
        }
        Object.assign(a,{quantity:1,total:a.prix});
      });
      console.log(this.productList)
    });
    this._cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item : any){
    this._cartService.addToCart(item);
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
}
}

