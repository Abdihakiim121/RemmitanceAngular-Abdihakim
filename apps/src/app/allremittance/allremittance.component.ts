import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-allremittance',
  templateUrl: './allremittance.component.html',
  styleUrls: ['./allremittance.component.css']
})
export class AllremittanceComponent implements OnInit {
    allRemittance : any;

  constructor(private apiService:ApiService, 
    private authService:AuthService,
     private route:Router ) { }

  ngOnInit(): void {
    if (!this.authService.isUserLogin()){
      this.route.navigateByUrl('/')
      return;
    }
    this.getAllRemittance();
  }

  getAllRemittance() {
    this.apiService.getAll_Apis('http://localhost:3001/database/remittance/getAllremittance')
    .then(result => {
      this.allRemittance = result;
      console.log('',result);       
    })  
  }

}
