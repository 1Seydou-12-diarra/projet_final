
import { Component,OnInit } from '@angular/core';
import {RegistrationService} from 'src/app/register.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
 
  public UserList: any;
  constructor(private _api: RegistrationService) {}
  
  ngOnInit(): void {
    this._api.getUser().subscribe((response) => {
      this.UserList = response;
      console.log(this.UserList)
    });
  }
          
      
   
  }
 
  


