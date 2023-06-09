import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public productList: any;
  constructor(private _api: ApiService) {}
  
  ngOnInit(): void {
    this._api.getProduct().subscribe((response) => {
      this.productList = response;
      console.log(this.productList)
    });
  }
}