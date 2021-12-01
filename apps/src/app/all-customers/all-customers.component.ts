import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.css']
})
export class AllCustomersComponent implements OnInit {

  allCustomers: any;

  constructor(private apiService:ApiService,
    private authService:AuthService,
     private route:Router) { }

  ngOnInit(): void {
    if (!this.authService.isUserLogin()){
      this.route.navigateByUrl('/')
      return;
    }
  this.getAllCustomers() 
  }

  getAllCustomers() {
    this.apiService.getAll_Apis('http://localhost:3001/database/customer/getAllCustomers')
    .then(result => {
      this.allCustomers = result;
      console.warn(result);       
    }) .catch(error => {
      alert (error.message)
    }) 
  }
 

}
