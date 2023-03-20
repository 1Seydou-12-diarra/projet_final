import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  public productList: any;
 
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private apiService: ApiService,
    public router:Router
  ) { }
  
  ngOnInit(): void {
   
  
}

}

// @Component({ selector: 'delete-request', templateUrl: 'delete-request.component.html' })
// export class DeleteRequestComponent implements OnInit {
//     status;

//     constructor(private http: HttpClient) { }

//     ngOnInit() {
//         this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
//             .subscribe(() => this.status = 'Delete successful');
//     }
